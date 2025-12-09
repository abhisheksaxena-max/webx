
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model registrant
 * 
 */
export type registrant = $Result.DefaultSelection<Prisma.$registrantPayload>
/**
 * Model zoom_participant
 * 
 */
export type zoom_participant = $Result.DefaultSelection<Prisma.$zoom_participantPayload>
/**
 * Model zoom_refresh_token
 * 
 */
export type zoom_refresh_token = $Result.DefaultSelection<Prisma.$zoom_refresh_tokenPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Registrants
 * const registrants = await prisma.registrant.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Registrants
   * const registrants = await prisma.registrant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.registrant`: Exposes CRUD operations for the **registrant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrants
    * const registrants = await prisma.registrant.findMany()
    * ```
    */
  get registrant(): Prisma.registrantDelegate<ExtArgs>;

  /**
   * `prisma.zoom_participant`: Exposes CRUD operations for the **zoom_participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zoom_participants
    * const zoom_participants = await prisma.zoom_participant.findMany()
    * ```
    */
  get zoom_participant(): Prisma.zoom_participantDelegate<ExtArgs>;

  /**
   * `prisma.zoom_refresh_token`: Exposes CRUD operations for the **zoom_refresh_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zoom_refresh_tokens
    * const zoom_refresh_tokens = await prisma.zoom_refresh_token.findMany()
    * ```
    */
  get zoom_refresh_token(): Prisma.zoom_refresh_tokenDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    registrant: 'registrant',
    zoom_participant: 'zoom_participant',
    zoom_refresh_token: 'zoom_refresh_token'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "registrant" | "zoom_participant" | "zoom_refresh_token"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      registrant: {
        payload: Prisma.$registrantPayload<ExtArgs>
        fields: Prisma.registrantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.registrantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.registrantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrantPayload>
          }
          findFirst: {
            args: Prisma.registrantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.registrantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrantPayload>
          }
          findMany: {
            args: Prisma.registrantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrantPayload>[]
          }
          create: {
            args: Prisma.registrantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrantPayload>
          }
          createMany: {
            args: Prisma.registrantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.registrantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrantPayload>[]
          }
          delete: {
            args: Prisma.registrantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrantPayload>
          }
          update: {
            args: Prisma.registrantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrantPayload>
          }
          deleteMany: {
            args: Prisma.registrantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.registrantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.registrantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrantPayload>
          }
          aggregate: {
            args: Prisma.RegistrantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrant>
          }
          groupBy: {
            args: Prisma.registrantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrantGroupByOutputType>[]
          }
          count: {
            args: Prisma.registrantCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrantCountAggregateOutputType> | number
          }
        }
      }
      zoom_participant: {
        payload: Prisma.$zoom_participantPayload<ExtArgs>
        fields: Prisma.zoom_participantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.zoom_participantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_participantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.zoom_participantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_participantPayload>
          }
          findFirst: {
            args: Prisma.zoom_participantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_participantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.zoom_participantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_participantPayload>
          }
          findMany: {
            args: Prisma.zoom_participantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_participantPayload>[]
          }
          create: {
            args: Prisma.zoom_participantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_participantPayload>
          }
          createMany: {
            args: Prisma.zoom_participantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.zoom_participantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_participantPayload>[]
          }
          delete: {
            args: Prisma.zoom_participantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_participantPayload>
          }
          update: {
            args: Prisma.zoom_participantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_participantPayload>
          }
          deleteMany: {
            args: Prisma.zoom_participantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.zoom_participantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.zoom_participantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_participantPayload>
          }
          aggregate: {
            args: Prisma.Zoom_participantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZoom_participant>
          }
          groupBy: {
            args: Prisma.zoom_participantGroupByArgs<ExtArgs>
            result: $Utils.Optional<Zoom_participantGroupByOutputType>[]
          }
          count: {
            args: Prisma.zoom_participantCountArgs<ExtArgs>
            result: $Utils.Optional<Zoom_participantCountAggregateOutputType> | number
          }
        }
      }
      zoom_refresh_token: {
        payload: Prisma.$zoom_refresh_tokenPayload<ExtArgs>
        fields: Prisma.zoom_refresh_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.zoom_refresh_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_refresh_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.zoom_refresh_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_refresh_tokenPayload>
          }
          findFirst: {
            args: Prisma.zoom_refresh_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_refresh_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.zoom_refresh_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_refresh_tokenPayload>
          }
          findMany: {
            args: Prisma.zoom_refresh_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_refresh_tokenPayload>[]
          }
          create: {
            args: Prisma.zoom_refresh_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_refresh_tokenPayload>
          }
          createMany: {
            args: Prisma.zoom_refresh_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.zoom_refresh_tokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_refresh_tokenPayload>[]
          }
          delete: {
            args: Prisma.zoom_refresh_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_refresh_tokenPayload>
          }
          update: {
            args: Prisma.zoom_refresh_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_refresh_tokenPayload>
          }
          deleteMany: {
            args: Prisma.zoom_refresh_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.zoom_refresh_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.zoom_refresh_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zoom_refresh_tokenPayload>
          }
          aggregate: {
            args: Prisma.Zoom_refresh_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZoom_refresh_token>
          }
          groupBy: {
            args: Prisma.zoom_refresh_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Zoom_refresh_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.zoom_refresh_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<Zoom_refresh_tokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model registrant
   */

  export type AggregateRegistrant = {
    _count: RegistrantCountAggregateOutputType | null
    _min: RegistrantMinAggregateOutputType | null
    _max: RegistrantMaxAggregateOutputType | null
  }

  export type RegistrantMinAggregateOutputType = {
    id: string | null
    registrant_id: string | null
    webinar_id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    phone_number: string | null
    join_url: string | null
    topic: string | null
    start_time: Date | null
    registered_at: Date | null
  }

  export type RegistrantMaxAggregateOutputType = {
    id: string | null
    registrant_id: string | null
    webinar_id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    phone_number: string | null
    join_url: string | null
    topic: string | null
    start_time: Date | null
    registered_at: Date | null
  }

  export type RegistrantCountAggregateOutputType = {
    id: number
    registrant_id: number
    webinar_id: number
    email: number
    first_name: number
    last_name: number
    phone_number: number
    join_url: number
    topic: number
    start_time: number
    registered_at: number
    _all: number
  }


  export type RegistrantMinAggregateInputType = {
    id?: true
    registrant_id?: true
    webinar_id?: true
    email?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    join_url?: true
    topic?: true
    start_time?: true
    registered_at?: true
  }

  export type RegistrantMaxAggregateInputType = {
    id?: true
    registrant_id?: true
    webinar_id?: true
    email?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    join_url?: true
    topic?: true
    start_time?: true
    registered_at?: true
  }

  export type RegistrantCountAggregateInputType = {
    id?: true
    registrant_id?: true
    webinar_id?: true
    email?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    join_url?: true
    topic?: true
    start_time?: true
    registered_at?: true
    _all?: true
  }

  export type RegistrantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registrant to aggregate.
     */
    where?: registrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrants to fetch.
     */
    orderBy?: registrantOrderByWithRelationInput | registrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: registrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned registrants
    **/
    _count?: true | RegistrantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrantMaxAggregateInputType
  }

  export type GetRegistrantAggregateType<T extends RegistrantAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrant[P]>
      : GetScalarType<T[P], AggregateRegistrant[P]>
  }




  export type registrantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registrantWhereInput
    orderBy?: registrantOrderByWithAggregationInput | registrantOrderByWithAggregationInput[]
    by: RegistrantScalarFieldEnum[] | RegistrantScalarFieldEnum
    having?: registrantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrantCountAggregateInputType | true
    _min?: RegistrantMinAggregateInputType
    _max?: RegistrantMaxAggregateInputType
  }

  export type RegistrantGroupByOutputType = {
    id: string
    registrant_id: string | null
    webinar_id: string
    email: string
    first_name: string
    last_name: string
    phone_number: string | null
    join_url: string
    topic: string
    start_time: Date
    registered_at: Date
    _count: RegistrantCountAggregateOutputType | null
    _min: RegistrantMinAggregateOutputType | null
    _max: RegistrantMaxAggregateOutputType | null
  }

  type GetRegistrantGroupByPayload<T extends registrantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrantGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrantGroupByOutputType[P]>
        }
      >
    >


  export type registrantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrant_id?: boolean
    webinar_id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    join_url?: boolean
    topic?: boolean
    start_time?: boolean
    registered_at?: boolean
  }, ExtArgs["result"]["registrant"]>

  export type registrantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrant_id?: boolean
    webinar_id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    join_url?: boolean
    topic?: boolean
    start_time?: boolean
    registered_at?: boolean
  }, ExtArgs["result"]["registrant"]>

  export type registrantSelectScalar = {
    id?: boolean
    registrant_id?: boolean
    webinar_id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    join_url?: boolean
    topic?: boolean
    start_time?: boolean
    registered_at?: boolean
  }


  export type $registrantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "registrant"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registrant_id: string | null
      webinar_id: string
      email: string
      first_name: string
      last_name: string
      phone_number: string | null
      join_url: string
      topic: string
      start_time: Date
      registered_at: Date
    }, ExtArgs["result"]["registrant"]>
    composites: {}
  }

  type registrantGetPayload<S extends boolean | null | undefined | registrantDefaultArgs> = $Result.GetResult<Prisma.$registrantPayload, S>

  type registrantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<registrantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegistrantCountAggregateInputType | true
    }

  export interface registrantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['registrant'], meta: { name: 'registrant' } }
    /**
     * Find zero or one Registrant that matches the filter.
     * @param {registrantFindUniqueArgs} args - Arguments to find a Registrant
     * @example
     * // Get one Registrant
     * const registrant = await prisma.registrant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends registrantFindUniqueArgs>(args: SelectSubset<T, registrantFindUniqueArgs<ExtArgs>>): Prisma__registrantClient<$Result.GetResult<Prisma.$registrantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Registrant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {registrantFindUniqueOrThrowArgs} args - Arguments to find a Registrant
     * @example
     * // Get one Registrant
     * const registrant = await prisma.registrant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends registrantFindUniqueOrThrowArgs>(args: SelectSubset<T, registrantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__registrantClient<$Result.GetResult<Prisma.$registrantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Registrant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrantFindFirstArgs} args - Arguments to find a Registrant
     * @example
     * // Get one Registrant
     * const registrant = await prisma.registrant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends registrantFindFirstArgs>(args?: SelectSubset<T, registrantFindFirstArgs<ExtArgs>>): Prisma__registrantClient<$Result.GetResult<Prisma.$registrantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Registrant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrantFindFirstOrThrowArgs} args - Arguments to find a Registrant
     * @example
     * // Get one Registrant
     * const registrant = await prisma.registrant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends registrantFindFirstOrThrowArgs>(args?: SelectSubset<T, registrantFindFirstOrThrowArgs<ExtArgs>>): Prisma__registrantClient<$Result.GetResult<Prisma.$registrantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Registrants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrants
     * const registrants = await prisma.registrant.findMany()
     * 
     * // Get first 10 Registrants
     * const registrants = await prisma.registrant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrantWithIdOnly = await prisma.registrant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends registrantFindManyArgs>(args?: SelectSubset<T, registrantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Registrant.
     * @param {registrantCreateArgs} args - Arguments to create a Registrant.
     * @example
     * // Create one Registrant
     * const Registrant = await prisma.registrant.create({
     *   data: {
     *     // ... data to create a Registrant
     *   }
     * })
     * 
     */
    create<T extends registrantCreateArgs>(args: SelectSubset<T, registrantCreateArgs<ExtArgs>>): Prisma__registrantClient<$Result.GetResult<Prisma.$registrantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Registrants.
     * @param {registrantCreateManyArgs} args - Arguments to create many Registrants.
     * @example
     * // Create many Registrants
     * const registrant = await prisma.registrant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends registrantCreateManyArgs>(args?: SelectSubset<T, registrantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registrants and returns the data saved in the database.
     * @param {registrantCreateManyAndReturnArgs} args - Arguments to create many Registrants.
     * @example
     * // Create many Registrants
     * const registrant = await prisma.registrant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registrants and only return the `id`
     * const registrantWithIdOnly = await prisma.registrant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends registrantCreateManyAndReturnArgs>(args?: SelectSubset<T, registrantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Registrant.
     * @param {registrantDeleteArgs} args - Arguments to delete one Registrant.
     * @example
     * // Delete one Registrant
     * const Registrant = await prisma.registrant.delete({
     *   where: {
     *     // ... filter to delete one Registrant
     *   }
     * })
     * 
     */
    delete<T extends registrantDeleteArgs>(args: SelectSubset<T, registrantDeleteArgs<ExtArgs>>): Prisma__registrantClient<$Result.GetResult<Prisma.$registrantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Registrant.
     * @param {registrantUpdateArgs} args - Arguments to update one Registrant.
     * @example
     * // Update one Registrant
     * const registrant = await prisma.registrant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends registrantUpdateArgs>(args: SelectSubset<T, registrantUpdateArgs<ExtArgs>>): Prisma__registrantClient<$Result.GetResult<Prisma.$registrantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Registrants.
     * @param {registrantDeleteManyArgs} args - Arguments to filter Registrants to delete.
     * @example
     * // Delete a few Registrants
     * const { count } = await prisma.registrant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends registrantDeleteManyArgs>(args?: SelectSubset<T, registrantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrants
     * const registrant = await prisma.registrant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends registrantUpdateManyArgs>(args: SelectSubset<T, registrantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Registrant.
     * @param {registrantUpsertArgs} args - Arguments to update or create a Registrant.
     * @example
     * // Update or create a Registrant
     * const registrant = await prisma.registrant.upsert({
     *   create: {
     *     // ... data to create a Registrant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registrant we want to update
     *   }
     * })
     */
    upsert<T extends registrantUpsertArgs>(args: SelectSubset<T, registrantUpsertArgs<ExtArgs>>): Prisma__registrantClient<$Result.GetResult<Prisma.$registrantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Registrants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrantCountArgs} args - Arguments to filter Registrants to count.
     * @example
     * // Count the number of Registrants
     * const count = await prisma.registrant.count({
     *   where: {
     *     // ... the filter for the Registrants we want to count
     *   }
     * })
    **/
    count<T extends registrantCountArgs>(
      args?: Subset<T, registrantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registrant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistrantAggregateArgs>(args: Subset<T, RegistrantAggregateArgs>): Prisma.PrismaPromise<GetRegistrantAggregateType<T>>

    /**
     * Group by Registrant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends registrantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: registrantGroupByArgs['orderBy'] }
        : { orderBy?: registrantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, registrantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the registrant model
   */
  readonly fields: registrantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for registrant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__registrantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the registrant model
   */ 
  interface registrantFieldRefs {
    readonly id: FieldRef<"registrant", 'String'>
    readonly registrant_id: FieldRef<"registrant", 'String'>
    readonly webinar_id: FieldRef<"registrant", 'String'>
    readonly email: FieldRef<"registrant", 'String'>
    readonly first_name: FieldRef<"registrant", 'String'>
    readonly last_name: FieldRef<"registrant", 'String'>
    readonly phone_number: FieldRef<"registrant", 'String'>
    readonly join_url: FieldRef<"registrant", 'String'>
    readonly topic: FieldRef<"registrant", 'String'>
    readonly start_time: FieldRef<"registrant", 'DateTime'>
    readonly registered_at: FieldRef<"registrant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * registrant findUnique
   */
  export type registrantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrant
     */
    select?: registrantSelect<ExtArgs> | null
    /**
     * Filter, which registrant to fetch.
     */
    where: registrantWhereUniqueInput
  }

  /**
   * registrant findUniqueOrThrow
   */
  export type registrantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrant
     */
    select?: registrantSelect<ExtArgs> | null
    /**
     * Filter, which registrant to fetch.
     */
    where: registrantWhereUniqueInput
  }

  /**
   * registrant findFirst
   */
  export type registrantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrant
     */
    select?: registrantSelect<ExtArgs> | null
    /**
     * Filter, which registrant to fetch.
     */
    where?: registrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrants to fetch.
     */
    orderBy?: registrantOrderByWithRelationInput | registrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registrants.
     */
    cursor?: registrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registrants.
     */
    distinct?: RegistrantScalarFieldEnum | RegistrantScalarFieldEnum[]
  }

  /**
   * registrant findFirstOrThrow
   */
  export type registrantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrant
     */
    select?: registrantSelect<ExtArgs> | null
    /**
     * Filter, which registrant to fetch.
     */
    where?: registrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrants to fetch.
     */
    orderBy?: registrantOrderByWithRelationInput | registrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registrants.
     */
    cursor?: registrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registrants.
     */
    distinct?: RegistrantScalarFieldEnum | RegistrantScalarFieldEnum[]
  }

  /**
   * registrant findMany
   */
  export type registrantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrant
     */
    select?: registrantSelect<ExtArgs> | null
    /**
     * Filter, which registrants to fetch.
     */
    where?: registrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrants to fetch.
     */
    orderBy?: registrantOrderByWithRelationInput | registrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing registrants.
     */
    cursor?: registrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrants.
     */
    skip?: number
    distinct?: RegistrantScalarFieldEnum | RegistrantScalarFieldEnum[]
  }

  /**
   * registrant create
   */
  export type registrantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrant
     */
    select?: registrantSelect<ExtArgs> | null
    /**
     * The data needed to create a registrant.
     */
    data: XOR<registrantCreateInput, registrantUncheckedCreateInput>
  }

  /**
   * registrant createMany
   */
  export type registrantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many registrants.
     */
    data: registrantCreateManyInput | registrantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * registrant createManyAndReturn
   */
  export type registrantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrant
     */
    select?: registrantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many registrants.
     */
    data: registrantCreateManyInput | registrantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * registrant update
   */
  export type registrantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrant
     */
    select?: registrantSelect<ExtArgs> | null
    /**
     * The data needed to update a registrant.
     */
    data: XOR<registrantUpdateInput, registrantUncheckedUpdateInput>
    /**
     * Choose, which registrant to update.
     */
    where: registrantWhereUniqueInput
  }

  /**
   * registrant updateMany
   */
  export type registrantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update registrants.
     */
    data: XOR<registrantUpdateManyMutationInput, registrantUncheckedUpdateManyInput>
    /**
     * Filter which registrants to update
     */
    where?: registrantWhereInput
  }

  /**
   * registrant upsert
   */
  export type registrantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrant
     */
    select?: registrantSelect<ExtArgs> | null
    /**
     * The filter to search for the registrant to update in case it exists.
     */
    where: registrantWhereUniqueInput
    /**
     * In case the registrant found by the `where` argument doesn't exist, create a new registrant with this data.
     */
    create: XOR<registrantCreateInput, registrantUncheckedCreateInput>
    /**
     * In case the registrant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<registrantUpdateInput, registrantUncheckedUpdateInput>
  }

  /**
   * registrant delete
   */
  export type registrantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrant
     */
    select?: registrantSelect<ExtArgs> | null
    /**
     * Filter which registrant to delete.
     */
    where: registrantWhereUniqueInput
  }

  /**
   * registrant deleteMany
   */
  export type registrantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registrants to delete
     */
    where?: registrantWhereInput
  }

  /**
   * registrant without action
   */
  export type registrantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrant
     */
    select?: registrantSelect<ExtArgs> | null
  }


  /**
   * Model zoom_participant
   */

  export type AggregateZoom_participant = {
    _count: Zoom_participantCountAggregateOutputType | null
    _avg: Zoom_participantAvgAggregateOutputType | null
    _sum: Zoom_participantSumAggregateOutputType | null
    _min: Zoom_participantMinAggregateOutputType | null
    _max: Zoom_participantMaxAggregateOutputType | null
  }

  export type Zoom_participantAvgAggregateOutputType = {
    duration: number | null
  }

  export type Zoom_participantSumAggregateOutputType = {
    duration: number | null
  }

  export type Zoom_participantMinAggregateOutputType = {
    id: string | null
    webinar_id: string | null
    participant_id: string | null
    user_id: string | null
    full_name: string | null
    email: string | null
    join_time: Date | null
    leave_time: Date | null
    duration: number | null
    status: string | null
  }

  export type Zoom_participantMaxAggregateOutputType = {
    id: string | null
    webinar_id: string | null
    participant_id: string | null
    user_id: string | null
    full_name: string | null
    email: string | null
    join_time: Date | null
    leave_time: Date | null
    duration: number | null
    status: string | null
  }

  export type Zoom_participantCountAggregateOutputType = {
    id: number
    webinar_id: number
    participant_id: number
    user_id: number
    full_name: number
    email: number
    join_time: number
    leave_time: number
    duration: number
    status: number
    _all: number
  }


  export type Zoom_participantAvgAggregateInputType = {
    duration?: true
  }

  export type Zoom_participantSumAggregateInputType = {
    duration?: true
  }

  export type Zoom_participantMinAggregateInputType = {
    id?: true
    webinar_id?: true
    participant_id?: true
    user_id?: true
    full_name?: true
    email?: true
    join_time?: true
    leave_time?: true
    duration?: true
    status?: true
  }

  export type Zoom_participantMaxAggregateInputType = {
    id?: true
    webinar_id?: true
    participant_id?: true
    user_id?: true
    full_name?: true
    email?: true
    join_time?: true
    leave_time?: true
    duration?: true
    status?: true
  }

  export type Zoom_participantCountAggregateInputType = {
    id?: true
    webinar_id?: true
    participant_id?: true
    user_id?: true
    full_name?: true
    email?: true
    join_time?: true
    leave_time?: true
    duration?: true
    status?: true
    _all?: true
  }

  export type Zoom_participantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zoom_participant to aggregate.
     */
    where?: zoom_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zoom_participants to fetch.
     */
    orderBy?: zoom_participantOrderByWithRelationInput | zoom_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: zoom_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zoom_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zoom_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned zoom_participants
    **/
    _count?: true | Zoom_participantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Zoom_participantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Zoom_participantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Zoom_participantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Zoom_participantMaxAggregateInputType
  }

  export type GetZoom_participantAggregateType<T extends Zoom_participantAggregateArgs> = {
        [P in keyof T & keyof AggregateZoom_participant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZoom_participant[P]>
      : GetScalarType<T[P], AggregateZoom_participant[P]>
  }




  export type zoom_participantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zoom_participantWhereInput
    orderBy?: zoom_participantOrderByWithAggregationInput | zoom_participantOrderByWithAggregationInput[]
    by: Zoom_participantScalarFieldEnum[] | Zoom_participantScalarFieldEnum
    having?: zoom_participantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Zoom_participantCountAggregateInputType | true
    _avg?: Zoom_participantAvgAggregateInputType
    _sum?: Zoom_participantSumAggregateInputType
    _min?: Zoom_participantMinAggregateInputType
    _max?: Zoom_participantMaxAggregateInputType
  }

  export type Zoom_participantGroupByOutputType = {
    id: string
    webinar_id: string
    participant_id: string | null
    user_id: string
    full_name: string | null
    email: string
    join_time: Date | null
    leave_time: Date | null
    duration: number | null
    status: string | null
    _count: Zoom_participantCountAggregateOutputType | null
    _avg: Zoom_participantAvgAggregateOutputType | null
    _sum: Zoom_participantSumAggregateOutputType | null
    _min: Zoom_participantMinAggregateOutputType | null
    _max: Zoom_participantMaxAggregateOutputType | null
  }

  type GetZoom_participantGroupByPayload<T extends zoom_participantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Zoom_participantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Zoom_participantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Zoom_participantGroupByOutputType[P]>
            : GetScalarType<T[P], Zoom_participantGroupByOutputType[P]>
        }
      >
    >


  export type zoom_participantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webinar_id?: boolean
    participant_id?: boolean
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    join_time?: boolean
    leave_time?: boolean
    duration?: boolean
    status?: boolean
  }, ExtArgs["result"]["zoom_participant"]>

  export type zoom_participantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webinar_id?: boolean
    participant_id?: boolean
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    join_time?: boolean
    leave_time?: boolean
    duration?: boolean
    status?: boolean
  }, ExtArgs["result"]["zoom_participant"]>

  export type zoom_participantSelectScalar = {
    id?: boolean
    webinar_id?: boolean
    participant_id?: boolean
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    join_time?: boolean
    leave_time?: boolean
    duration?: boolean
    status?: boolean
  }


  export type $zoom_participantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "zoom_participant"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      webinar_id: string
      participant_id: string | null
      user_id: string
      full_name: string | null
      email: string
      join_time: Date | null
      leave_time: Date | null
      duration: number | null
      status: string | null
    }, ExtArgs["result"]["zoom_participant"]>
    composites: {}
  }

  type zoom_participantGetPayload<S extends boolean | null | undefined | zoom_participantDefaultArgs> = $Result.GetResult<Prisma.$zoom_participantPayload, S>

  type zoom_participantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<zoom_participantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Zoom_participantCountAggregateInputType | true
    }

  export interface zoom_participantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['zoom_participant'], meta: { name: 'zoom_participant' } }
    /**
     * Find zero or one Zoom_participant that matches the filter.
     * @param {zoom_participantFindUniqueArgs} args - Arguments to find a Zoom_participant
     * @example
     * // Get one Zoom_participant
     * const zoom_participant = await prisma.zoom_participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zoom_participantFindUniqueArgs>(args: SelectSubset<T, zoom_participantFindUniqueArgs<ExtArgs>>): Prisma__zoom_participantClient<$Result.GetResult<Prisma.$zoom_participantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Zoom_participant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {zoom_participantFindUniqueOrThrowArgs} args - Arguments to find a Zoom_participant
     * @example
     * // Get one Zoom_participant
     * const zoom_participant = await prisma.zoom_participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zoom_participantFindUniqueOrThrowArgs>(args: SelectSubset<T, zoom_participantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__zoom_participantClient<$Result.GetResult<Prisma.$zoom_participantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Zoom_participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_participantFindFirstArgs} args - Arguments to find a Zoom_participant
     * @example
     * // Get one Zoom_participant
     * const zoom_participant = await prisma.zoom_participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zoom_participantFindFirstArgs>(args?: SelectSubset<T, zoom_participantFindFirstArgs<ExtArgs>>): Prisma__zoom_participantClient<$Result.GetResult<Prisma.$zoom_participantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Zoom_participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_participantFindFirstOrThrowArgs} args - Arguments to find a Zoom_participant
     * @example
     * // Get one Zoom_participant
     * const zoom_participant = await prisma.zoom_participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zoom_participantFindFirstOrThrowArgs>(args?: SelectSubset<T, zoom_participantFindFirstOrThrowArgs<ExtArgs>>): Prisma__zoom_participantClient<$Result.GetResult<Prisma.$zoom_participantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Zoom_participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_participantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zoom_participants
     * const zoom_participants = await prisma.zoom_participant.findMany()
     * 
     * // Get first 10 Zoom_participants
     * const zoom_participants = await prisma.zoom_participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoom_participantWithIdOnly = await prisma.zoom_participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends zoom_participantFindManyArgs>(args?: SelectSubset<T, zoom_participantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zoom_participantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Zoom_participant.
     * @param {zoom_participantCreateArgs} args - Arguments to create a Zoom_participant.
     * @example
     * // Create one Zoom_participant
     * const Zoom_participant = await prisma.zoom_participant.create({
     *   data: {
     *     // ... data to create a Zoom_participant
     *   }
     * })
     * 
     */
    create<T extends zoom_participantCreateArgs>(args: SelectSubset<T, zoom_participantCreateArgs<ExtArgs>>): Prisma__zoom_participantClient<$Result.GetResult<Prisma.$zoom_participantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Zoom_participants.
     * @param {zoom_participantCreateManyArgs} args - Arguments to create many Zoom_participants.
     * @example
     * // Create many Zoom_participants
     * const zoom_participant = await prisma.zoom_participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends zoom_participantCreateManyArgs>(args?: SelectSubset<T, zoom_participantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zoom_participants and returns the data saved in the database.
     * @param {zoom_participantCreateManyAndReturnArgs} args - Arguments to create many Zoom_participants.
     * @example
     * // Create many Zoom_participants
     * const zoom_participant = await prisma.zoom_participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zoom_participants and only return the `id`
     * const zoom_participantWithIdOnly = await prisma.zoom_participant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends zoom_participantCreateManyAndReturnArgs>(args?: SelectSubset<T, zoom_participantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zoom_participantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Zoom_participant.
     * @param {zoom_participantDeleteArgs} args - Arguments to delete one Zoom_participant.
     * @example
     * // Delete one Zoom_participant
     * const Zoom_participant = await prisma.zoom_participant.delete({
     *   where: {
     *     // ... filter to delete one Zoom_participant
     *   }
     * })
     * 
     */
    delete<T extends zoom_participantDeleteArgs>(args: SelectSubset<T, zoom_participantDeleteArgs<ExtArgs>>): Prisma__zoom_participantClient<$Result.GetResult<Prisma.$zoom_participantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Zoom_participant.
     * @param {zoom_participantUpdateArgs} args - Arguments to update one Zoom_participant.
     * @example
     * // Update one Zoom_participant
     * const zoom_participant = await prisma.zoom_participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends zoom_participantUpdateArgs>(args: SelectSubset<T, zoom_participantUpdateArgs<ExtArgs>>): Prisma__zoom_participantClient<$Result.GetResult<Prisma.$zoom_participantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Zoom_participants.
     * @param {zoom_participantDeleteManyArgs} args - Arguments to filter Zoom_participants to delete.
     * @example
     * // Delete a few Zoom_participants
     * const { count } = await prisma.zoom_participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends zoom_participantDeleteManyArgs>(args?: SelectSubset<T, zoom_participantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zoom_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_participantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zoom_participants
     * const zoom_participant = await prisma.zoom_participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends zoom_participantUpdateManyArgs>(args: SelectSubset<T, zoom_participantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Zoom_participant.
     * @param {zoom_participantUpsertArgs} args - Arguments to update or create a Zoom_participant.
     * @example
     * // Update or create a Zoom_participant
     * const zoom_participant = await prisma.zoom_participant.upsert({
     *   create: {
     *     // ... data to create a Zoom_participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zoom_participant we want to update
     *   }
     * })
     */
    upsert<T extends zoom_participantUpsertArgs>(args: SelectSubset<T, zoom_participantUpsertArgs<ExtArgs>>): Prisma__zoom_participantClient<$Result.GetResult<Prisma.$zoom_participantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Zoom_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_participantCountArgs} args - Arguments to filter Zoom_participants to count.
     * @example
     * // Count the number of Zoom_participants
     * const count = await prisma.zoom_participant.count({
     *   where: {
     *     // ... the filter for the Zoom_participants we want to count
     *   }
     * })
    **/
    count<T extends zoom_participantCountArgs>(
      args?: Subset<T, zoom_participantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Zoom_participantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zoom_participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Zoom_participantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Zoom_participantAggregateArgs>(args: Subset<T, Zoom_participantAggregateArgs>): Prisma.PrismaPromise<GetZoom_participantAggregateType<T>>

    /**
     * Group by Zoom_participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_participantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends zoom_participantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: zoom_participantGroupByArgs['orderBy'] }
        : { orderBy?: zoom_participantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, zoom_participantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoom_participantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the zoom_participant model
   */
  readonly fields: zoom_participantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for zoom_participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__zoom_participantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the zoom_participant model
   */ 
  interface zoom_participantFieldRefs {
    readonly id: FieldRef<"zoom_participant", 'String'>
    readonly webinar_id: FieldRef<"zoom_participant", 'String'>
    readonly participant_id: FieldRef<"zoom_participant", 'String'>
    readonly user_id: FieldRef<"zoom_participant", 'String'>
    readonly full_name: FieldRef<"zoom_participant", 'String'>
    readonly email: FieldRef<"zoom_participant", 'String'>
    readonly join_time: FieldRef<"zoom_participant", 'DateTime'>
    readonly leave_time: FieldRef<"zoom_participant", 'DateTime'>
    readonly duration: FieldRef<"zoom_participant", 'Int'>
    readonly status: FieldRef<"zoom_participant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * zoom_participant findUnique
   */
  export type zoom_participantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_participant
     */
    select?: zoom_participantSelect<ExtArgs> | null
    /**
     * Filter, which zoom_participant to fetch.
     */
    where: zoom_participantWhereUniqueInput
  }

  /**
   * zoom_participant findUniqueOrThrow
   */
  export type zoom_participantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_participant
     */
    select?: zoom_participantSelect<ExtArgs> | null
    /**
     * Filter, which zoom_participant to fetch.
     */
    where: zoom_participantWhereUniqueInput
  }

  /**
   * zoom_participant findFirst
   */
  export type zoom_participantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_participant
     */
    select?: zoom_participantSelect<ExtArgs> | null
    /**
     * Filter, which zoom_participant to fetch.
     */
    where?: zoom_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zoom_participants to fetch.
     */
    orderBy?: zoom_participantOrderByWithRelationInput | zoom_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zoom_participants.
     */
    cursor?: zoom_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zoom_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zoom_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zoom_participants.
     */
    distinct?: Zoom_participantScalarFieldEnum | Zoom_participantScalarFieldEnum[]
  }

  /**
   * zoom_participant findFirstOrThrow
   */
  export type zoom_participantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_participant
     */
    select?: zoom_participantSelect<ExtArgs> | null
    /**
     * Filter, which zoom_participant to fetch.
     */
    where?: zoom_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zoom_participants to fetch.
     */
    orderBy?: zoom_participantOrderByWithRelationInput | zoom_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zoom_participants.
     */
    cursor?: zoom_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zoom_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zoom_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zoom_participants.
     */
    distinct?: Zoom_participantScalarFieldEnum | Zoom_participantScalarFieldEnum[]
  }

  /**
   * zoom_participant findMany
   */
  export type zoom_participantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_participant
     */
    select?: zoom_participantSelect<ExtArgs> | null
    /**
     * Filter, which zoom_participants to fetch.
     */
    where?: zoom_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zoom_participants to fetch.
     */
    orderBy?: zoom_participantOrderByWithRelationInput | zoom_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing zoom_participants.
     */
    cursor?: zoom_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zoom_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zoom_participants.
     */
    skip?: number
    distinct?: Zoom_participantScalarFieldEnum | Zoom_participantScalarFieldEnum[]
  }

  /**
   * zoom_participant create
   */
  export type zoom_participantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_participant
     */
    select?: zoom_participantSelect<ExtArgs> | null
    /**
     * The data needed to create a zoom_participant.
     */
    data: XOR<zoom_participantCreateInput, zoom_participantUncheckedCreateInput>
  }

  /**
   * zoom_participant createMany
   */
  export type zoom_participantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many zoom_participants.
     */
    data: zoom_participantCreateManyInput | zoom_participantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zoom_participant createManyAndReturn
   */
  export type zoom_participantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_participant
     */
    select?: zoom_participantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many zoom_participants.
     */
    data: zoom_participantCreateManyInput | zoom_participantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zoom_participant update
   */
  export type zoom_participantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_participant
     */
    select?: zoom_participantSelect<ExtArgs> | null
    /**
     * The data needed to update a zoom_participant.
     */
    data: XOR<zoom_participantUpdateInput, zoom_participantUncheckedUpdateInput>
    /**
     * Choose, which zoom_participant to update.
     */
    where: zoom_participantWhereUniqueInput
  }

  /**
   * zoom_participant updateMany
   */
  export type zoom_participantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update zoom_participants.
     */
    data: XOR<zoom_participantUpdateManyMutationInput, zoom_participantUncheckedUpdateManyInput>
    /**
     * Filter which zoom_participants to update
     */
    where?: zoom_participantWhereInput
  }

  /**
   * zoom_participant upsert
   */
  export type zoom_participantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_participant
     */
    select?: zoom_participantSelect<ExtArgs> | null
    /**
     * The filter to search for the zoom_participant to update in case it exists.
     */
    where: zoom_participantWhereUniqueInput
    /**
     * In case the zoom_participant found by the `where` argument doesn't exist, create a new zoom_participant with this data.
     */
    create: XOR<zoom_participantCreateInput, zoom_participantUncheckedCreateInput>
    /**
     * In case the zoom_participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<zoom_participantUpdateInput, zoom_participantUncheckedUpdateInput>
  }

  /**
   * zoom_participant delete
   */
  export type zoom_participantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_participant
     */
    select?: zoom_participantSelect<ExtArgs> | null
    /**
     * Filter which zoom_participant to delete.
     */
    where: zoom_participantWhereUniqueInput
  }

  /**
   * zoom_participant deleteMany
   */
  export type zoom_participantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zoom_participants to delete
     */
    where?: zoom_participantWhereInput
  }

  /**
   * zoom_participant without action
   */
  export type zoom_participantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_participant
     */
    select?: zoom_participantSelect<ExtArgs> | null
  }


  /**
   * Model zoom_refresh_token
   */

  export type AggregateZoom_refresh_token = {
    _count: Zoom_refresh_tokenCountAggregateOutputType | null
    _min: Zoom_refresh_tokenMinAggregateOutputType | null
    _max: Zoom_refresh_tokenMaxAggregateOutputType | null
  }

  export type Zoom_refresh_tokenMinAggregateOutputType = {
    id: string | null
    refresh_token: string | null
    created_at: Date | null
  }

  export type Zoom_refresh_tokenMaxAggregateOutputType = {
    id: string | null
    refresh_token: string | null
    created_at: Date | null
  }

  export type Zoom_refresh_tokenCountAggregateOutputType = {
    id: number
    refresh_token: number
    created_at: number
    _all: number
  }


  export type Zoom_refresh_tokenMinAggregateInputType = {
    id?: true
    refresh_token?: true
    created_at?: true
  }

  export type Zoom_refresh_tokenMaxAggregateInputType = {
    id?: true
    refresh_token?: true
    created_at?: true
  }

  export type Zoom_refresh_tokenCountAggregateInputType = {
    id?: true
    refresh_token?: true
    created_at?: true
    _all?: true
  }

  export type Zoom_refresh_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zoom_refresh_token to aggregate.
     */
    where?: zoom_refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zoom_refresh_tokens to fetch.
     */
    orderBy?: zoom_refresh_tokenOrderByWithRelationInput | zoom_refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: zoom_refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zoom_refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zoom_refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned zoom_refresh_tokens
    **/
    _count?: true | Zoom_refresh_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Zoom_refresh_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Zoom_refresh_tokenMaxAggregateInputType
  }

  export type GetZoom_refresh_tokenAggregateType<T extends Zoom_refresh_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateZoom_refresh_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZoom_refresh_token[P]>
      : GetScalarType<T[P], AggregateZoom_refresh_token[P]>
  }




  export type zoom_refresh_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zoom_refresh_tokenWhereInput
    orderBy?: zoom_refresh_tokenOrderByWithAggregationInput | zoom_refresh_tokenOrderByWithAggregationInput[]
    by: Zoom_refresh_tokenScalarFieldEnum[] | Zoom_refresh_tokenScalarFieldEnum
    having?: zoom_refresh_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Zoom_refresh_tokenCountAggregateInputType | true
    _min?: Zoom_refresh_tokenMinAggregateInputType
    _max?: Zoom_refresh_tokenMaxAggregateInputType
  }

  export type Zoom_refresh_tokenGroupByOutputType = {
    id: string
    refresh_token: string
    created_at: Date
    _count: Zoom_refresh_tokenCountAggregateOutputType | null
    _min: Zoom_refresh_tokenMinAggregateOutputType | null
    _max: Zoom_refresh_tokenMaxAggregateOutputType | null
  }

  type GetZoom_refresh_tokenGroupByPayload<T extends zoom_refresh_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Zoom_refresh_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Zoom_refresh_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Zoom_refresh_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Zoom_refresh_tokenGroupByOutputType[P]>
        }
      >
    >


  export type zoom_refresh_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refresh_token?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["zoom_refresh_token"]>

  export type zoom_refresh_tokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refresh_token?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["zoom_refresh_token"]>

  export type zoom_refresh_tokenSelectScalar = {
    id?: boolean
    refresh_token?: boolean
    created_at?: boolean
  }


  export type $zoom_refresh_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "zoom_refresh_token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      refresh_token: string
      created_at: Date
    }, ExtArgs["result"]["zoom_refresh_token"]>
    composites: {}
  }

  type zoom_refresh_tokenGetPayload<S extends boolean | null | undefined | zoom_refresh_tokenDefaultArgs> = $Result.GetResult<Prisma.$zoom_refresh_tokenPayload, S>

  type zoom_refresh_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<zoom_refresh_tokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Zoom_refresh_tokenCountAggregateInputType | true
    }

  export interface zoom_refresh_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['zoom_refresh_token'], meta: { name: 'zoom_refresh_token' } }
    /**
     * Find zero or one Zoom_refresh_token that matches the filter.
     * @param {zoom_refresh_tokenFindUniqueArgs} args - Arguments to find a Zoom_refresh_token
     * @example
     * // Get one Zoom_refresh_token
     * const zoom_refresh_token = await prisma.zoom_refresh_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zoom_refresh_tokenFindUniqueArgs>(args: SelectSubset<T, zoom_refresh_tokenFindUniqueArgs<ExtArgs>>): Prisma__zoom_refresh_tokenClient<$Result.GetResult<Prisma.$zoom_refresh_tokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Zoom_refresh_token that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {zoom_refresh_tokenFindUniqueOrThrowArgs} args - Arguments to find a Zoom_refresh_token
     * @example
     * // Get one Zoom_refresh_token
     * const zoom_refresh_token = await prisma.zoom_refresh_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zoom_refresh_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, zoom_refresh_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__zoom_refresh_tokenClient<$Result.GetResult<Prisma.$zoom_refresh_tokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Zoom_refresh_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_refresh_tokenFindFirstArgs} args - Arguments to find a Zoom_refresh_token
     * @example
     * // Get one Zoom_refresh_token
     * const zoom_refresh_token = await prisma.zoom_refresh_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zoom_refresh_tokenFindFirstArgs>(args?: SelectSubset<T, zoom_refresh_tokenFindFirstArgs<ExtArgs>>): Prisma__zoom_refresh_tokenClient<$Result.GetResult<Prisma.$zoom_refresh_tokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Zoom_refresh_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_refresh_tokenFindFirstOrThrowArgs} args - Arguments to find a Zoom_refresh_token
     * @example
     * // Get one Zoom_refresh_token
     * const zoom_refresh_token = await prisma.zoom_refresh_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zoom_refresh_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, zoom_refresh_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__zoom_refresh_tokenClient<$Result.GetResult<Prisma.$zoom_refresh_tokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Zoom_refresh_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_refresh_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zoom_refresh_tokens
     * const zoom_refresh_tokens = await prisma.zoom_refresh_token.findMany()
     * 
     * // Get first 10 Zoom_refresh_tokens
     * const zoom_refresh_tokens = await prisma.zoom_refresh_token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoom_refresh_tokenWithIdOnly = await prisma.zoom_refresh_token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends zoom_refresh_tokenFindManyArgs>(args?: SelectSubset<T, zoom_refresh_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zoom_refresh_tokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Zoom_refresh_token.
     * @param {zoom_refresh_tokenCreateArgs} args - Arguments to create a Zoom_refresh_token.
     * @example
     * // Create one Zoom_refresh_token
     * const Zoom_refresh_token = await prisma.zoom_refresh_token.create({
     *   data: {
     *     // ... data to create a Zoom_refresh_token
     *   }
     * })
     * 
     */
    create<T extends zoom_refresh_tokenCreateArgs>(args: SelectSubset<T, zoom_refresh_tokenCreateArgs<ExtArgs>>): Prisma__zoom_refresh_tokenClient<$Result.GetResult<Prisma.$zoom_refresh_tokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Zoom_refresh_tokens.
     * @param {zoom_refresh_tokenCreateManyArgs} args - Arguments to create many Zoom_refresh_tokens.
     * @example
     * // Create many Zoom_refresh_tokens
     * const zoom_refresh_token = await prisma.zoom_refresh_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends zoom_refresh_tokenCreateManyArgs>(args?: SelectSubset<T, zoom_refresh_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zoom_refresh_tokens and returns the data saved in the database.
     * @param {zoom_refresh_tokenCreateManyAndReturnArgs} args - Arguments to create many Zoom_refresh_tokens.
     * @example
     * // Create many Zoom_refresh_tokens
     * const zoom_refresh_token = await prisma.zoom_refresh_token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zoom_refresh_tokens and only return the `id`
     * const zoom_refresh_tokenWithIdOnly = await prisma.zoom_refresh_token.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends zoom_refresh_tokenCreateManyAndReturnArgs>(args?: SelectSubset<T, zoom_refresh_tokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zoom_refresh_tokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Zoom_refresh_token.
     * @param {zoom_refresh_tokenDeleteArgs} args - Arguments to delete one Zoom_refresh_token.
     * @example
     * // Delete one Zoom_refresh_token
     * const Zoom_refresh_token = await prisma.zoom_refresh_token.delete({
     *   where: {
     *     // ... filter to delete one Zoom_refresh_token
     *   }
     * })
     * 
     */
    delete<T extends zoom_refresh_tokenDeleteArgs>(args: SelectSubset<T, zoom_refresh_tokenDeleteArgs<ExtArgs>>): Prisma__zoom_refresh_tokenClient<$Result.GetResult<Prisma.$zoom_refresh_tokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Zoom_refresh_token.
     * @param {zoom_refresh_tokenUpdateArgs} args - Arguments to update one Zoom_refresh_token.
     * @example
     * // Update one Zoom_refresh_token
     * const zoom_refresh_token = await prisma.zoom_refresh_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends zoom_refresh_tokenUpdateArgs>(args: SelectSubset<T, zoom_refresh_tokenUpdateArgs<ExtArgs>>): Prisma__zoom_refresh_tokenClient<$Result.GetResult<Prisma.$zoom_refresh_tokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Zoom_refresh_tokens.
     * @param {zoom_refresh_tokenDeleteManyArgs} args - Arguments to filter Zoom_refresh_tokens to delete.
     * @example
     * // Delete a few Zoom_refresh_tokens
     * const { count } = await prisma.zoom_refresh_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends zoom_refresh_tokenDeleteManyArgs>(args?: SelectSubset<T, zoom_refresh_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zoom_refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_refresh_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zoom_refresh_tokens
     * const zoom_refresh_token = await prisma.zoom_refresh_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends zoom_refresh_tokenUpdateManyArgs>(args: SelectSubset<T, zoom_refresh_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Zoom_refresh_token.
     * @param {zoom_refresh_tokenUpsertArgs} args - Arguments to update or create a Zoom_refresh_token.
     * @example
     * // Update or create a Zoom_refresh_token
     * const zoom_refresh_token = await prisma.zoom_refresh_token.upsert({
     *   create: {
     *     // ... data to create a Zoom_refresh_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zoom_refresh_token we want to update
     *   }
     * })
     */
    upsert<T extends zoom_refresh_tokenUpsertArgs>(args: SelectSubset<T, zoom_refresh_tokenUpsertArgs<ExtArgs>>): Prisma__zoom_refresh_tokenClient<$Result.GetResult<Prisma.$zoom_refresh_tokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Zoom_refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_refresh_tokenCountArgs} args - Arguments to filter Zoom_refresh_tokens to count.
     * @example
     * // Count the number of Zoom_refresh_tokens
     * const count = await prisma.zoom_refresh_token.count({
     *   where: {
     *     // ... the filter for the Zoom_refresh_tokens we want to count
     *   }
     * })
    **/
    count<T extends zoom_refresh_tokenCountArgs>(
      args?: Subset<T, zoom_refresh_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Zoom_refresh_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zoom_refresh_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Zoom_refresh_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Zoom_refresh_tokenAggregateArgs>(args: Subset<T, Zoom_refresh_tokenAggregateArgs>): Prisma.PrismaPromise<GetZoom_refresh_tokenAggregateType<T>>

    /**
     * Group by Zoom_refresh_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoom_refresh_tokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends zoom_refresh_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: zoom_refresh_tokenGroupByArgs['orderBy'] }
        : { orderBy?: zoom_refresh_tokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, zoom_refresh_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoom_refresh_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the zoom_refresh_token model
   */
  readonly fields: zoom_refresh_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for zoom_refresh_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__zoom_refresh_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the zoom_refresh_token model
   */ 
  interface zoom_refresh_tokenFieldRefs {
    readonly id: FieldRef<"zoom_refresh_token", 'String'>
    readonly refresh_token: FieldRef<"zoom_refresh_token", 'String'>
    readonly created_at: FieldRef<"zoom_refresh_token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * zoom_refresh_token findUnique
   */
  export type zoom_refresh_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_refresh_token
     */
    select?: zoom_refresh_tokenSelect<ExtArgs> | null
    /**
     * Filter, which zoom_refresh_token to fetch.
     */
    where: zoom_refresh_tokenWhereUniqueInput
  }

  /**
   * zoom_refresh_token findUniqueOrThrow
   */
  export type zoom_refresh_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_refresh_token
     */
    select?: zoom_refresh_tokenSelect<ExtArgs> | null
    /**
     * Filter, which zoom_refresh_token to fetch.
     */
    where: zoom_refresh_tokenWhereUniqueInput
  }

  /**
   * zoom_refresh_token findFirst
   */
  export type zoom_refresh_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_refresh_token
     */
    select?: zoom_refresh_tokenSelect<ExtArgs> | null
    /**
     * Filter, which zoom_refresh_token to fetch.
     */
    where?: zoom_refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zoom_refresh_tokens to fetch.
     */
    orderBy?: zoom_refresh_tokenOrderByWithRelationInput | zoom_refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zoom_refresh_tokens.
     */
    cursor?: zoom_refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zoom_refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zoom_refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zoom_refresh_tokens.
     */
    distinct?: Zoom_refresh_tokenScalarFieldEnum | Zoom_refresh_tokenScalarFieldEnum[]
  }

  /**
   * zoom_refresh_token findFirstOrThrow
   */
  export type zoom_refresh_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_refresh_token
     */
    select?: zoom_refresh_tokenSelect<ExtArgs> | null
    /**
     * Filter, which zoom_refresh_token to fetch.
     */
    where?: zoom_refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zoom_refresh_tokens to fetch.
     */
    orderBy?: zoom_refresh_tokenOrderByWithRelationInput | zoom_refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zoom_refresh_tokens.
     */
    cursor?: zoom_refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zoom_refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zoom_refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zoom_refresh_tokens.
     */
    distinct?: Zoom_refresh_tokenScalarFieldEnum | Zoom_refresh_tokenScalarFieldEnum[]
  }

  /**
   * zoom_refresh_token findMany
   */
  export type zoom_refresh_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_refresh_token
     */
    select?: zoom_refresh_tokenSelect<ExtArgs> | null
    /**
     * Filter, which zoom_refresh_tokens to fetch.
     */
    where?: zoom_refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zoom_refresh_tokens to fetch.
     */
    orderBy?: zoom_refresh_tokenOrderByWithRelationInput | zoom_refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing zoom_refresh_tokens.
     */
    cursor?: zoom_refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zoom_refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zoom_refresh_tokens.
     */
    skip?: number
    distinct?: Zoom_refresh_tokenScalarFieldEnum | Zoom_refresh_tokenScalarFieldEnum[]
  }

  /**
   * zoom_refresh_token create
   */
  export type zoom_refresh_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_refresh_token
     */
    select?: zoom_refresh_tokenSelect<ExtArgs> | null
    /**
     * The data needed to create a zoom_refresh_token.
     */
    data: XOR<zoom_refresh_tokenCreateInput, zoom_refresh_tokenUncheckedCreateInput>
  }

  /**
   * zoom_refresh_token createMany
   */
  export type zoom_refresh_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many zoom_refresh_tokens.
     */
    data: zoom_refresh_tokenCreateManyInput | zoom_refresh_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zoom_refresh_token createManyAndReturn
   */
  export type zoom_refresh_tokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_refresh_token
     */
    select?: zoom_refresh_tokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many zoom_refresh_tokens.
     */
    data: zoom_refresh_tokenCreateManyInput | zoom_refresh_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zoom_refresh_token update
   */
  export type zoom_refresh_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_refresh_token
     */
    select?: zoom_refresh_tokenSelect<ExtArgs> | null
    /**
     * The data needed to update a zoom_refresh_token.
     */
    data: XOR<zoom_refresh_tokenUpdateInput, zoom_refresh_tokenUncheckedUpdateInput>
    /**
     * Choose, which zoom_refresh_token to update.
     */
    where: zoom_refresh_tokenWhereUniqueInput
  }

  /**
   * zoom_refresh_token updateMany
   */
  export type zoom_refresh_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update zoom_refresh_tokens.
     */
    data: XOR<zoom_refresh_tokenUpdateManyMutationInput, zoom_refresh_tokenUncheckedUpdateManyInput>
    /**
     * Filter which zoom_refresh_tokens to update
     */
    where?: zoom_refresh_tokenWhereInput
  }

  /**
   * zoom_refresh_token upsert
   */
  export type zoom_refresh_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_refresh_token
     */
    select?: zoom_refresh_tokenSelect<ExtArgs> | null
    /**
     * The filter to search for the zoom_refresh_token to update in case it exists.
     */
    where: zoom_refresh_tokenWhereUniqueInput
    /**
     * In case the zoom_refresh_token found by the `where` argument doesn't exist, create a new zoom_refresh_token with this data.
     */
    create: XOR<zoom_refresh_tokenCreateInput, zoom_refresh_tokenUncheckedCreateInput>
    /**
     * In case the zoom_refresh_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<zoom_refresh_tokenUpdateInput, zoom_refresh_tokenUncheckedUpdateInput>
  }

  /**
   * zoom_refresh_token delete
   */
  export type zoom_refresh_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_refresh_token
     */
    select?: zoom_refresh_tokenSelect<ExtArgs> | null
    /**
     * Filter which zoom_refresh_token to delete.
     */
    where: zoom_refresh_tokenWhereUniqueInput
  }

  /**
   * zoom_refresh_token deleteMany
   */
  export type zoom_refresh_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zoom_refresh_tokens to delete
     */
    where?: zoom_refresh_tokenWhereInput
  }

  /**
   * zoom_refresh_token without action
   */
  export type zoom_refresh_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zoom_refresh_token
     */
    select?: zoom_refresh_tokenSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RegistrantScalarFieldEnum: {
    id: 'id',
    registrant_id: 'registrant_id',
    webinar_id: 'webinar_id',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    phone_number: 'phone_number',
    join_url: 'join_url',
    topic: 'topic',
    start_time: 'start_time',
    registered_at: 'registered_at'
  };

  export type RegistrantScalarFieldEnum = (typeof RegistrantScalarFieldEnum)[keyof typeof RegistrantScalarFieldEnum]


  export const Zoom_participantScalarFieldEnum: {
    id: 'id',
    webinar_id: 'webinar_id',
    participant_id: 'participant_id',
    user_id: 'user_id',
    full_name: 'full_name',
    email: 'email',
    join_time: 'join_time',
    leave_time: 'leave_time',
    duration: 'duration',
    status: 'status'
  };

  export type Zoom_participantScalarFieldEnum = (typeof Zoom_participantScalarFieldEnum)[keyof typeof Zoom_participantScalarFieldEnum]


  export const Zoom_refresh_tokenScalarFieldEnum: {
    id: 'id',
    refresh_token: 'refresh_token',
    created_at: 'created_at'
  };

  export type Zoom_refresh_tokenScalarFieldEnum = (typeof Zoom_refresh_tokenScalarFieldEnum)[keyof typeof Zoom_refresh_tokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type registrantWhereInput = {
    AND?: registrantWhereInput | registrantWhereInput[]
    OR?: registrantWhereInput[]
    NOT?: registrantWhereInput | registrantWhereInput[]
    id?: StringFilter<"registrant"> | string
    registrant_id?: StringNullableFilter<"registrant"> | string | null
    webinar_id?: StringFilter<"registrant"> | string
    email?: StringFilter<"registrant"> | string
    first_name?: StringFilter<"registrant"> | string
    last_name?: StringFilter<"registrant"> | string
    phone_number?: StringNullableFilter<"registrant"> | string | null
    join_url?: StringFilter<"registrant"> | string
    topic?: StringFilter<"registrant"> | string
    start_time?: DateTimeFilter<"registrant"> | Date | string
    registered_at?: DateTimeFilter<"registrant"> | Date | string
  }

  export type registrantOrderByWithRelationInput = {
    id?: SortOrder
    registrant_id?: SortOrderInput | SortOrder
    webinar_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    join_url?: SortOrder
    topic?: SortOrder
    start_time?: SortOrder
    registered_at?: SortOrder
  }

  export type registrantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: registrantWhereInput | registrantWhereInput[]
    OR?: registrantWhereInput[]
    NOT?: registrantWhereInput | registrantWhereInput[]
    registrant_id?: StringNullableFilter<"registrant"> | string | null
    webinar_id?: StringFilter<"registrant"> | string
    email?: StringFilter<"registrant"> | string
    first_name?: StringFilter<"registrant"> | string
    last_name?: StringFilter<"registrant"> | string
    phone_number?: StringNullableFilter<"registrant"> | string | null
    join_url?: StringFilter<"registrant"> | string
    topic?: StringFilter<"registrant"> | string
    start_time?: DateTimeFilter<"registrant"> | Date | string
    registered_at?: DateTimeFilter<"registrant"> | Date | string
  }, "id">

  export type registrantOrderByWithAggregationInput = {
    id?: SortOrder
    registrant_id?: SortOrderInput | SortOrder
    webinar_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    join_url?: SortOrder
    topic?: SortOrder
    start_time?: SortOrder
    registered_at?: SortOrder
    _count?: registrantCountOrderByAggregateInput
    _max?: registrantMaxOrderByAggregateInput
    _min?: registrantMinOrderByAggregateInput
  }

  export type registrantScalarWhereWithAggregatesInput = {
    AND?: registrantScalarWhereWithAggregatesInput | registrantScalarWhereWithAggregatesInput[]
    OR?: registrantScalarWhereWithAggregatesInput[]
    NOT?: registrantScalarWhereWithAggregatesInput | registrantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"registrant"> | string
    registrant_id?: StringNullableWithAggregatesFilter<"registrant"> | string | null
    webinar_id?: StringWithAggregatesFilter<"registrant"> | string
    email?: StringWithAggregatesFilter<"registrant"> | string
    first_name?: StringWithAggregatesFilter<"registrant"> | string
    last_name?: StringWithAggregatesFilter<"registrant"> | string
    phone_number?: StringNullableWithAggregatesFilter<"registrant"> | string | null
    join_url?: StringWithAggregatesFilter<"registrant"> | string
    topic?: StringWithAggregatesFilter<"registrant"> | string
    start_time?: DateTimeWithAggregatesFilter<"registrant"> | Date | string
    registered_at?: DateTimeWithAggregatesFilter<"registrant"> | Date | string
  }

  export type zoom_participantWhereInput = {
    AND?: zoom_participantWhereInput | zoom_participantWhereInput[]
    OR?: zoom_participantWhereInput[]
    NOT?: zoom_participantWhereInput | zoom_participantWhereInput[]
    id?: StringFilter<"zoom_participant"> | string
    webinar_id?: StringFilter<"zoom_participant"> | string
    participant_id?: StringNullableFilter<"zoom_participant"> | string | null
    user_id?: StringFilter<"zoom_participant"> | string
    full_name?: StringNullableFilter<"zoom_participant"> | string | null
    email?: StringFilter<"zoom_participant"> | string
    join_time?: DateTimeNullableFilter<"zoom_participant"> | Date | string | null
    leave_time?: DateTimeNullableFilter<"zoom_participant"> | Date | string | null
    duration?: IntNullableFilter<"zoom_participant"> | number | null
    status?: StringNullableFilter<"zoom_participant"> | string | null
  }

  export type zoom_participantOrderByWithRelationInput = {
    id?: SortOrder
    webinar_id?: SortOrder
    participant_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrder
    join_time?: SortOrderInput | SortOrder
    leave_time?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
  }

  export type zoom_participantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: zoom_participantWhereInput | zoom_participantWhereInput[]
    OR?: zoom_participantWhereInput[]
    NOT?: zoom_participantWhereInput | zoom_participantWhereInput[]
    webinar_id?: StringFilter<"zoom_participant"> | string
    participant_id?: StringNullableFilter<"zoom_participant"> | string | null
    user_id?: StringFilter<"zoom_participant"> | string
    full_name?: StringNullableFilter<"zoom_participant"> | string | null
    email?: StringFilter<"zoom_participant"> | string
    join_time?: DateTimeNullableFilter<"zoom_participant"> | Date | string | null
    leave_time?: DateTimeNullableFilter<"zoom_participant"> | Date | string | null
    duration?: IntNullableFilter<"zoom_participant"> | number | null
    status?: StringNullableFilter<"zoom_participant"> | string | null
  }, "id">

  export type zoom_participantOrderByWithAggregationInput = {
    id?: SortOrder
    webinar_id?: SortOrder
    participant_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrder
    join_time?: SortOrderInput | SortOrder
    leave_time?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: zoom_participantCountOrderByAggregateInput
    _avg?: zoom_participantAvgOrderByAggregateInput
    _max?: zoom_participantMaxOrderByAggregateInput
    _min?: zoom_participantMinOrderByAggregateInput
    _sum?: zoom_participantSumOrderByAggregateInput
  }

  export type zoom_participantScalarWhereWithAggregatesInput = {
    AND?: zoom_participantScalarWhereWithAggregatesInput | zoom_participantScalarWhereWithAggregatesInput[]
    OR?: zoom_participantScalarWhereWithAggregatesInput[]
    NOT?: zoom_participantScalarWhereWithAggregatesInput | zoom_participantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"zoom_participant"> | string
    webinar_id?: StringWithAggregatesFilter<"zoom_participant"> | string
    participant_id?: StringNullableWithAggregatesFilter<"zoom_participant"> | string | null
    user_id?: StringWithAggregatesFilter<"zoom_participant"> | string
    full_name?: StringNullableWithAggregatesFilter<"zoom_participant"> | string | null
    email?: StringWithAggregatesFilter<"zoom_participant"> | string
    join_time?: DateTimeNullableWithAggregatesFilter<"zoom_participant"> | Date | string | null
    leave_time?: DateTimeNullableWithAggregatesFilter<"zoom_participant"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"zoom_participant"> | number | null
    status?: StringNullableWithAggregatesFilter<"zoom_participant"> | string | null
  }

  export type zoom_refresh_tokenWhereInput = {
    AND?: zoom_refresh_tokenWhereInput | zoom_refresh_tokenWhereInput[]
    OR?: zoom_refresh_tokenWhereInput[]
    NOT?: zoom_refresh_tokenWhereInput | zoom_refresh_tokenWhereInput[]
    id?: StringFilter<"zoom_refresh_token"> | string
    refresh_token?: StringFilter<"zoom_refresh_token"> | string
    created_at?: DateTimeFilter<"zoom_refresh_token"> | Date | string
  }

  export type zoom_refresh_tokenOrderByWithRelationInput = {
    id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
  }

  export type zoom_refresh_tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: zoom_refresh_tokenWhereInput | zoom_refresh_tokenWhereInput[]
    OR?: zoom_refresh_tokenWhereInput[]
    NOT?: zoom_refresh_tokenWhereInput | zoom_refresh_tokenWhereInput[]
    refresh_token?: StringFilter<"zoom_refresh_token"> | string
    created_at?: DateTimeFilter<"zoom_refresh_token"> | Date | string
  }, "id">

  export type zoom_refresh_tokenOrderByWithAggregationInput = {
    id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    _count?: zoom_refresh_tokenCountOrderByAggregateInput
    _max?: zoom_refresh_tokenMaxOrderByAggregateInput
    _min?: zoom_refresh_tokenMinOrderByAggregateInput
  }

  export type zoom_refresh_tokenScalarWhereWithAggregatesInput = {
    AND?: zoom_refresh_tokenScalarWhereWithAggregatesInput | zoom_refresh_tokenScalarWhereWithAggregatesInput[]
    OR?: zoom_refresh_tokenScalarWhereWithAggregatesInput[]
    NOT?: zoom_refresh_tokenScalarWhereWithAggregatesInput | zoom_refresh_tokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"zoom_refresh_token"> | string
    refresh_token?: StringWithAggregatesFilter<"zoom_refresh_token"> | string
    created_at?: DateTimeWithAggregatesFilter<"zoom_refresh_token"> | Date | string
  }

  export type registrantCreateInput = {
    id?: string
    registrant_id?: string | null
    webinar_id: string
    email: string
    first_name: string
    last_name?: string
    phone_number?: string | null
    join_url: string
    topic: string
    start_time: Date | string
    registered_at: Date | string
  }

  export type registrantUncheckedCreateInput = {
    id?: string
    registrant_id?: string | null
    webinar_id: string
    email: string
    first_name: string
    last_name?: string
    phone_number?: string | null
    join_url: string
    topic: string
    start_time: Date | string
    registered_at: Date | string
  }

  export type registrantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrant_id?: NullableStringFieldUpdateOperationsInput | string | null
    webinar_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registrantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrant_id?: NullableStringFieldUpdateOperationsInput | string | null
    webinar_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registrantCreateManyInput = {
    id?: string
    registrant_id?: string | null
    webinar_id: string
    email: string
    first_name: string
    last_name?: string
    phone_number?: string | null
    join_url: string
    topic: string
    start_time: Date | string
    registered_at: Date | string
  }

  export type registrantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrant_id?: NullableStringFieldUpdateOperationsInput | string | null
    webinar_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type registrantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrant_id?: NullableStringFieldUpdateOperationsInput | string | null
    webinar_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_url?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type zoom_participantCreateInput = {
    id?: string
    webinar_id: string
    participant_id?: string | null
    user_id: string
    full_name?: string | null
    email: string
    join_time?: Date | string | null
    leave_time?: Date | string | null
    duration?: number | null
    status?: string | null
  }

  export type zoom_participantUncheckedCreateInput = {
    id?: string
    webinar_id: string
    participant_id?: string | null
    user_id: string
    full_name?: string | null
    email: string
    join_time?: Date | string | null
    leave_time?: Date | string | null
    duration?: number | null
    status?: string | null
  }

  export type zoom_participantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinar_id?: StringFieldUpdateOperationsInput | string
    participant_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    join_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leave_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type zoom_participantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinar_id?: StringFieldUpdateOperationsInput | string
    participant_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    join_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leave_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type zoom_participantCreateManyInput = {
    id?: string
    webinar_id: string
    participant_id?: string | null
    user_id: string
    full_name?: string | null
    email: string
    join_time?: Date | string | null
    leave_time?: Date | string | null
    duration?: number | null
    status?: string | null
  }

  export type zoom_participantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinar_id?: StringFieldUpdateOperationsInput | string
    participant_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    join_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leave_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type zoom_participantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinar_id?: StringFieldUpdateOperationsInput | string
    participant_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    join_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leave_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type zoom_refresh_tokenCreateInput = {
    id?: string
    refresh_token: string
    created_at?: Date | string
  }

  export type zoom_refresh_tokenUncheckedCreateInput = {
    id?: string
    refresh_token: string
    created_at?: Date | string
  }

  export type zoom_refresh_tokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type zoom_refresh_tokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type zoom_refresh_tokenCreateManyInput = {
    id?: string
    refresh_token: string
    created_at?: Date | string
  }

  export type zoom_refresh_tokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type zoom_refresh_tokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type registrantCountOrderByAggregateInput = {
    id?: SortOrder
    registrant_id?: SortOrder
    webinar_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    join_url?: SortOrder
    topic?: SortOrder
    start_time?: SortOrder
    registered_at?: SortOrder
  }

  export type registrantMaxOrderByAggregateInput = {
    id?: SortOrder
    registrant_id?: SortOrder
    webinar_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    join_url?: SortOrder
    topic?: SortOrder
    start_time?: SortOrder
    registered_at?: SortOrder
  }

  export type registrantMinOrderByAggregateInput = {
    id?: SortOrder
    registrant_id?: SortOrder
    webinar_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    join_url?: SortOrder
    topic?: SortOrder
    start_time?: SortOrder
    registered_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type zoom_participantCountOrderByAggregateInput = {
    id?: SortOrder
    webinar_id?: SortOrder
    participant_id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    join_time?: SortOrder
    leave_time?: SortOrder
    duration?: SortOrder
    status?: SortOrder
  }

  export type zoom_participantAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type zoom_participantMaxOrderByAggregateInput = {
    id?: SortOrder
    webinar_id?: SortOrder
    participant_id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    join_time?: SortOrder
    leave_time?: SortOrder
    duration?: SortOrder
    status?: SortOrder
  }

  export type zoom_participantMinOrderByAggregateInput = {
    id?: SortOrder
    webinar_id?: SortOrder
    participant_id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    join_time?: SortOrder
    leave_time?: SortOrder
    duration?: SortOrder
    status?: SortOrder
  }

  export type zoom_participantSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type zoom_refresh_tokenCountOrderByAggregateInput = {
    id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
  }

  export type zoom_refresh_tokenMaxOrderByAggregateInput = {
    id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
  }

  export type zoom_refresh_tokenMinOrderByAggregateInput = {
    id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}