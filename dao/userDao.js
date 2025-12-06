const prisma = require("../config/db.config");

const createUserRegistration = async (
  email,
  first_name,
  last_name,
  phone_number,
  id,
  registrant_id,
  topic,
  start_time,
  join_url
) => {
  try {
    return await prisma.registrant.create({
      data: {
        registrant_id: registrant_id,
        email: email,
        webinar_id: id,
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        join_url: join_url,
        topic: topic,
        start_time: new Date(start_time),
        registered_at: new Date(),
      },
    });
  } catch (error) {
    console.log("Insert Error:", error);
    throw error;
  }
};

const createZoomParticipant = async (
  webinar_id,
  participant_id,
  user_id,
  name,
  user_email,
  join_time,
  leave_time,
  duration,
  status
) => {
  try {
    return await prisma.zoom_participant.create({
      data: {
        webinar_id: webinar_id,
        participant_id: participant_id,
        user_id: user_id,
        full_name: name,
        email: user_email,
        join_time: join_time ? new Date(join_time) : null,
        leave_time: leave_time ? new Date(leave_time) : null,
        duration: duration || null,
        status: status || null,
      },
    });
  } catch (error) {
    console.log("Participant Insert Error:", error);
    throw error;
  }
};

const getMergedWebinarData = async () => {
  try {
    const registrants = await prisma.registrant.findMany();
    const participants = await prisma.zoom_participant.findMany();

    // Create participant lookup by email + start_time
    const participantMap = {};

    participants.forEach((p) => {
      if (p.email && p.start_time) {
        const key = `${p.email.toLowerCase()}_${new Date(p.start_time).getTime()}`;
        participantMap[key] = p;
      }
    });

    // Merge each registrant with the matching participant
    const mergedData = registrants.map((r) => {
      const regStartTimestamp = new Date(r.start_time).getTime();
      const key = `${r.email.toLowerCase()}_${regStartTimestamp}`;

      const participant = participantMap[key] || null;

      return {
        // From registrant table
        date: r.registered_at.toISOString().split("T")[0],
        registration_time: r.registered_at.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        email: r.email,
        first_name: r.first_name,
        last_name: r.last_name,
        phone_number: r.phone_number,
        status: participant?.status || "not_attended",  // From participant table
        registrant_id: r.registrant_id,
        webinar_id: r.webinar_id,
        topic: r.topic,
        start_time: r.start_time,
        join_url: r.join_url,

        // From participant table
        join_time: participant?.join_time || null,
        leave_time: participant?.leave_time || null,
        duration: participant?.duration || 0,
      };
    });

    return mergedData;
  } catch (error) {
    console.error("Merge error:", error);
    throw error;
  }
};


module.exports = {
  createUserRegistration,
  createZoomParticipant,
  getMergedWebinarData,
};
