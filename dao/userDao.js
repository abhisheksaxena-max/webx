const prisma = require('../config/db.config');

const createUserRegistration = async( 
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
            data:{
                registrant_id: registrant_id,
                email: email,
                webinar_id: id,
                first_name: first_name,      
                last_name: last_name,        
                phone_number: phone_number,
                join_url: join_url,
                topic: topic,
                start_time: new Date(start_time), 
                registered_at: new Date()   
            }
        })
        
    } catch (error) {
        console.log("Insert Error:", error);
        throw error;
    }
}

const createZoomParticipant = async (
    webinar_id,
    participant_id,
    user_id,
    name,
    user_email,
    join_time,
    leave_time,
    duration,
    status,
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

                

            }
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

    // Create participant lookup by lowercase email
    const participantByEmail = {};
    participants.forEach(p => {
      if (p.email) {
        participantByEmail[p.email.toLowerCase()] = p;
      }
    });

    // Merge data
    const mergedData = registrants.map(r => {
      const emailKey = r.email?.toLowerCase();
      const participant = emailKey ? participantByEmail[emailKey] : null;

      return {
        // From registrant table
        registrant_id: r.registrant_id,
        webinar_id: r.webinar_id,
        email: r.email,
        first_name: r.first_name,
        last_name: r.last_name,
        phone_number: r.phone_number,
        join_url: r.join_url,
        topic: r.topic,
        start_time: r.start_time,
        registered_at: r.registered_at,

        // From participant table (if exists)
        joined: participant ? true : false,
        status: participant?.status || "not_attended",
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
    createUserRegistration,createZoomParticipant,getMergedWebinarData
}
