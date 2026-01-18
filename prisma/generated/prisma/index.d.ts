
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model UserAppProfile
 * 
 */
export type UserAppProfile = $Result.DefaultSelection<Prisma.$UserAppProfilePayload>
/**
 * Model Orisa
 * 
 */
export type Orisa = $Result.DefaultSelection<Prisma.$OrisaPayload>
/**
 * Model Festival
 * 
 */
export type Festival = $Result.DefaultSelection<Prisma.$FestivalPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const App: {
  YORUBA_CALENDAR: 'YORUBA_CALENDAR',
  TAX_FLOW: 'TAX_FLOW',
  CLEANING_SERVICE: 'CLEANING_SERVICE',
  TICKETING: 'TICKETING'
};

export type App = (typeof App)[keyof typeof App]


export const RoleName: {
  USER: 'USER',
  CREATOR: 'CREATOR',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN',
  TAX_MANAGER: 'TAX_MANAGER',
  CALENDAR_MANAGER: 'CALENDAR_MANAGER',
  TICKET_MANAGER: 'TICKET_MANAGER',
  CLEANING_MANAGER: 'CLEANING_MANAGER'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]


export const UserType: {
  INDIVIDUAL: 'INDIVIDUAL',
  COMPANY: 'COMPANY',
  SME: 'SME'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type App = $Enums.App

export const App: typeof $Enums.App

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAppProfile`: Exposes CRUD operations for the **UserAppProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAppProfiles
    * const userAppProfiles = await prisma.userAppProfile.findMany()
    * ```
    */
  get userAppProfile(): Prisma.UserAppProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orisa`: Exposes CRUD operations for the **Orisa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orisas
    * const orisas = await prisma.orisa.findMany()
    * ```
    */
  get orisa(): Prisma.OrisaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.festival`: Exposes CRUD operations for the **Festival** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Festivals
    * const festivals = await prisma.festival.findMany()
    * ```
    */
  get festival(): Prisma.FestivalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    UserAppProfile: 'UserAppProfile',
    Orisa: 'Orisa',
    Festival: 'Festival',
    Ticket: 'Ticket'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "userRole" | "userAppProfile" | "orisa" | "festival" | "ticket"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      UserAppProfile: {
        payload: Prisma.$UserAppProfilePayload<ExtArgs>
        fields: Prisma.UserAppProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAppProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAppProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAppProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAppProfilePayload>
          }
          findFirst: {
            args: Prisma.UserAppProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAppProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAppProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAppProfilePayload>
          }
          findMany: {
            args: Prisma.UserAppProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAppProfilePayload>[]
          }
          create: {
            args: Prisma.UserAppProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAppProfilePayload>
          }
          createMany: {
            args: Prisma.UserAppProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAppProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAppProfilePayload>[]
          }
          delete: {
            args: Prisma.UserAppProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAppProfilePayload>
          }
          update: {
            args: Prisma.UserAppProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAppProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserAppProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAppProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAppProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAppProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserAppProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAppProfilePayload>
          }
          aggregate: {
            args: Prisma.UserAppProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAppProfile>
          }
          groupBy: {
            args: Prisma.UserAppProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAppProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAppProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserAppProfileCountAggregateOutputType> | number
          }
        }
      }
      Orisa: {
        payload: Prisma.$OrisaPayload<ExtArgs>
        fields: Prisma.OrisaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrisaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrisaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrisaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrisaPayload>
          }
          findFirst: {
            args: Prisma.OrisaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrisaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrisaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrisaPayload>
          }
          findMany: {
            args: Prisma.OrisaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrisaPayload>[]
          }
          create: {
            args: Prisma.OrisaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrisaPayload>
          }
          createMany: {
            args: Prisma.OrisaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrisaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrisaPayload>[]
          }
          delete: {
            args: Prisma.OrisaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrisaPayload>
          }
          update: {
            args: Prisma.OrisaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrisaPayload>
          }
          deleteMany: {
            args: Prisma.OrisaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrisaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrisaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrisaPayload>[]
          }
          upsert: {
            args: Prisma.OrisaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrisaPayload>
          }
          aggregate: {
            args: Prisma.OrisaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrisa>
          }
          groupBy: {
            args: Prisma.OrisaGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrisaGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrisaCountArgs<ExtArgs>
            result: $Utils.Optional<OrisaCountAggregateOutputType> | number
          }
        }
      }
      Festival: {
        payload: Prisma.$FestivalPayload<ExtArgs>
        fields: Prisma.FestivalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FestivalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FestivalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          findFirst: {
            args: Prisma.FestivalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FestivalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          findMany: {
            args: Prisma.FestivalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>[]
          }
          create: {
            args: Prisma.FestivalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          createMany: {
            args: Prisma.FestivalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FestivalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>[]
          }
          delete: {
            args: Prisma.FestivalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          update: {
            args: Prisma.FestivalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          deleteMany: {
            args: Prisma.FestivalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FestivalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FestivalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>[]
          }
          upsert: {
            args: Prisma.FestivalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          aggregate: {
            args: Prisma.FestivalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFestival>
          }
          groupBy: {
            args: Prisma.FestivalGroupByArgs<ExtArgs>
            result: $Utils.Optional<FestivalGroupByOutputType>[]
          }
          count: {
            args: Prisma.FestivalCountArgs<ExtArgs>
            result: $Utils.Optional<FestivalCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    userRole?: UserRoleOmit
    userAppProfile?: UserAppProfileOmit
    orisa?: OrisaOmit
    festival?: FestivalOmit
    ticket?: TicketOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
    userAppProfiles: number
    festivals: number
    orisas: number
    tickets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    userAppProfiles?: boolean | UserCountOutputTypeCountUserAppProfilesArgs
    festivals?: boolean | UserCountOutputTypeCountFestivalsArgs
    orisas?: boolean | UserCountOutputTypeCountOrisasArgs
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAppProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAppProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFestivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FestivalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrisasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrisaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type OrisaCountOutputType
   */

  export type OrisaCountOutputType = {
    festivals: number
  }

  export type OrisaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festivals?: boolean | OrisaCountOutputTypeCountFestivalsArgs
  }

  // Custom InputTypes
  /**
   * OrisaCountOutputType without action
   */
  export type OrisaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrisaCountOutputType
     */
    select?: OrisaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrisaCountOutputType without action
   */
  export type OrisaCountOutputTypeCountFestivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FestivalWhereInput
  }


  /**
   * Count Type FestivalCountOutputType
   */

  export type FestivalCountOutputType = {
    tickets: number
  }

  export type FestivalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | FestivalCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * FestivalCountOutputType without action
   */
  export type FestivalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalCountOutputType
     */
    select?: FestivalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FestivalCountOutputType without action
   */
  export type FestivalCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    twoFactorEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    twoFactorEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    password: number
    image: number
    twoFactorEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    twoFactorEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    twoFactorEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    twoFactorEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    password: string | null
    image: string | null
    twoFactorEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    twoFactorEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    userAppProfiles?: boolean | User$userAppProfilesArgs<ExtArgs>
    festivals?: boolean | User$festivalsArgs<ExtArgs>
    orisas?: boolean | User$orisasArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    twoFactorEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    twoFactorEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    twoFactorEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "password" | "image" | "twoFactorEnabled" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    userAppProfiles?: boolean | User$userAppProfilesArgs<ExtArgs>
    festivals?: boolean | User$festivalsArgs<ExtArgs>
    orisas?: boolean | User$orisasArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$UserRolePayload<ExtArgs>[]
      userAppProfiles: Prisma.$UserAppProfilePayload<ExtArgs>[]
      festivals: Prisma.$FestivalPayload<ExtArgs>[]
      orisas: Prisma.$OrisaPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      password: string | null
      image: string | null
      twoFactorEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAppProfiles<T extends User$userAppProfilesArgs<ExtArgs> = {}>(args?: Subset<T, User$userAppProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    festivals<T extends User$festivalsArgs<ExtArgs> = {}>(args?: Subset<T, User$festivalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orisas<T extends User$orisasArgs<ExtArgs> = {}>(args?: Subset<T, User$orisasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly twoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.userAppProfiles
   */
  export type User$userAppProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileInclude<ExtArgs> | null
    where?: UserAppProfileWhereInput
    orderBy?: UserAppProfileOrderByWithRelationInput | UserAppProfileOrderByWithRelationInput[]
    cursor?: UserAppProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAppProfileScalarFieldEnum | UserAppProfileScalarFieldEnum[]
  }

  /**
   * User.festivals
   */
  export type User$festivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    where?: FestivalWhereInput
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    cursor?: FestivalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * User.orisas
   */
  export type User$orisasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaInclude<ExtArgs> | null
    where?: OrisaWhereInput
    orderBy?: OrisaOrderByWithRelationInput | OrisaOrderByWithRelationInput[]
    cursor?: OrisaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrisaScalarFieldEnum | OrisaScalarFieldEnum[]
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: $Enums.RoleName
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.RoleName
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'RoleName'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    roleId: string | null
    app: $Enums.App | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    roleId: string | null
    app: $Enums.App | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    userId: number
    roleId: number
    app: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    app?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    app?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    app?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: string
    userId: string
    roleId: string
    app: $Enums.App
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    app?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    app?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    app?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    roleId?: boolean
    app?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roleId" | "app", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      roleId: string
      app: $Enums.App
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'String'>
    readonly userId: FieldRef<"UserRole", 'String'>
    readonly roleId: FieldRef<"UserRole", 'String'>
    readonly app: FieldRef<"UserRole", 'App'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model UserAppProfile
   */

  export type AggregateUserAppProfile = {
    _count: UserAppProfileCountAggregateOutputType | null
    _min: UserAppProfileMinAggregateOutputType | null
    _max: UserAppProfileMaxAggregateOutputType | null
  }

  export type UserAppProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    app: $Enums.App | null
    type: $Enums.UserType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAppProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    app: $Enums.App | null
    type: $Enums.UserType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAppProfileCountAggregateOutputType = {
    id: number
    userId: number
    app: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAppProfileMinAggregateInputType = {
    id?: true
    userId?: true
    app?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAppProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    app?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAppProfileCountAggregateInputType = {
    id?: true
    userId?: true
    app?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAppProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAppProfile to aggregate.
     */
    where?: UserAppProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAppProfiles to fetch.
     */
    orderBy?: UserAppProfileOrderByWithRelationInput | UserAppProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAppProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAppProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAppProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAppProfiles
    **/
    _count?: true | UserAppProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAppProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAppProfileMaxAggregateInputType
  }

  export type GetUserAppProfileAggregateType<T extends UserAppProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAppProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAppProfile[P]>
      : GetScalarType<T[P], AggregateUserAppProfile[P]>
  }




  export type UserAppProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAppProfileWhereInput
    orderBy?: UserAppProfileOrderByWithAggregationInput | UserAppProfileOrderByWithAggregationInput[]
    by: UserAppProfileScalarFieldEnum[] | UserAppProfileScalarFieldEnum
    having?: UserAppProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAppProfileCountAggregateInputType | true
    _min?: UserAppProfileMinAggregateInputType
    _max?: UserAppProfileMaxAggregateInputType
  }

  export type UserAppProfileGroupByOutputType = {
    id: string
    userId: string
    app: $Enums.App
    type: $Enums.UserType
    createdAt: Date
    updatedAt: Date
    _count: UserAppProfileCountAggregateOutputType | null
    _min: UserAppProfileMinAggregateOutputType | null
    _max: UserAppProfileMaxAggregateOutputType | null
  }

  type GetUserAppProfileGroupByPayload<T extends UserAppProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAppProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAppProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAppProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserAppProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserAppProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    app?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAppProfile"]>

  export type UserAppProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    app?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAppProfile"]>

  export type UserAppProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    app?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAppProfile"]>

  export type UserAppProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    app?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserAppProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "app" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["userAppProfile"]>
  export type UserAppProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAppProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAppProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAppProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAppProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      app: $Enums.App
      type: $Enums.UserType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAppProfile"]>
    composites: {}
  }

  type UserAppProfileGetPayload<S extends boolean | null | undefined | UserAppProfileDefaultArgs> = $Result.GetResult<Prisma.$UserAppProfilePayload, S>

  type UserAppProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAppProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAppProfileCountAggregateInputType | true
    }

  export interface UserAppProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAppProfile'], meta: { name: 'UserAppProfile' } }
    /**
     * Find zero or one UserAppProfile that matches the filter.
     * @param {UserAppProfileFindUniqueArgs} args - Arguments to find a UserAppProfile
     * @example
     * // Get one UserAppProfile
     * const userAppProfile = await prisma.userAppProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAppProfileFindUniqueArgs>(args: SelectSubset<T, UserAppProfileFindUniqueArgs<ExtArgs>>): Prisma__UserAppProfileClient<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAppProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAppProfileFindUniqueOrThrowArgs} args - Arguments to find a UserAppProfile
     * @example
     * // Get one UserAppProfile
     * const userAppProfile = await prisma.userAppProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAppProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAppProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAppProfileClient<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAppProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAppProfileFindFirstArgs} args - Arguments to find a UserAppProfile
     * @example
     * // Get one UserAppProfile
     * const userAppProfile = await prisma.userAppProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAppProfileFindFirstArgs>(args?: SelectSubset<T, UserAppProfileFindFirstArgs<ExtArgs>>): Prisma__UserAppProfileClient<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAppProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAppProfileFindFirstOrThrowArgs} args - Arguments to find a UserAppProfile
     * @example
     * // Get one UserAppProfile
     * const userAppProfile = await prisma.userAppProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAppProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAppProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAppProfileClient<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAppProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAppProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAppProfiles
     * const userAppProfiles = await prisma.userAppProfile.findMany()
     * 
     * // Get first 10 UserAppProfiles
     * const userAppProfiles = await prisma.userAppProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAppProfileWithIdOnly = await prisma.userAppProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAppProfileFindManyArgs>(args?: SelectSubset<T, UserAppProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAppProfile.
     * @param {UserAppProfileCreateArgs} args - Arguments to create a UserAppProfile.
     * @example
     * // Create one UserAppProfile
     * const UserAppProfile = await prisma.userAppProfile.create({
     *   data: {
     *     // ... data to create a UserAppProfile
     *   }
     * })
     * 
     */
    create<T extends UserAppProfileCreateArgs>(args: SelectSubset<T, UserAppProfileCreateArgs<ExtArgs>>): Prisma__UserAppProfileClient<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAppProfiles.
     * @param {UserAppProfileCreateManyArgs} args - Arguments to create many UserAppProfiles.
     * @example
     * // Create many UserAppProfiles
     * const userAppProfile = await prisma.userAppProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAppProfileCreateManyArgs>(args?: SelectSubset<T, UserAppProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAppProfiles and returns the data saved in the database.
     * @param {UserAppProfileCreateManyAndReturnArgs} args - Arguments to create many UserAppProfiles.
     * @example
     * // Create many UserAppProfiles
     * const userAppProfile = await prisma.userAppProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAppProfiles and only return the `id`
     * const userAppProfileWithIdOnly = await prisma.userAppProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAppProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAppProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAppProfile.
     * @param {UserAppProfileDeleteArgs} args - Arguments to delete one UserAppProfile.
     * @example
     * // Delete one UserAppProfile
     * const UserAppProfile = await prisma.userAppProfile.delete({
     *   where: {
     *     // ... filter to delete one UserAppProfile
     *   }
     * })
     * 
     */
    delete<T extends UserAppProfileDeleteArgs>(args: SelectSubset<T, UserAppProfileDeleteArgs<ExtArgs>>): Prisma__UserAppProfileClient<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAppProfile.
     * @param {UserAppProfileUpdateArgs} args - Arguments to update one UserAppProfile.
     * @example
     * // Update one UserAppProfile
     * const userAppProfile = await prisma.userAppProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAppProfileUpdateArgs>(args: SelectSubset<T, UserAppProfileUpdateArgs<ExtArgs>>): Prisma__UserAppProfileClient<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAppProfiles.
     * @param {UserAppProfileDeleteManyArgs} args - Arguments to filter UserAppProfiles to delete.
     * @example
     * // Delete a few UserAppProfiles
     * const { count } = await prisma.userAppProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAppProfileDeleteManyArgs>(args?: SelectSubset<T, UserAppProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAppProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAppProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAppProfiles
     * const userAppProfile = await prisma.userAppProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAppProfileUpdateManyArgs>(args: SelectSubset<T, UserAppProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAppProfiles and returns the data updated in the database.
     * @param {UserAppProfileUpdateManyAndReturnArgs} args - Arguments to update many UserAppProfiles.
     * @example
     * // Update many UserAppProfiles
     * const userAppProfile = await prisma.userAppProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAppProfiles and only return the `id`
     * const userAppProfileWithIdOnly = await prisma.userAppProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAppProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAppProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAppProfile.
     * @param {UserAppProfileUpsertArgs} args - Arguments to update or create a UserAppProfile.
     * @example
     * // Update or create a UserAppProfile
     * const userAppProfile = await prisma.userAppProfile.upsert({
     *   create: {
     *     // ... data to create a UserAppProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAppProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserAppProfileUpsertArgs>(args: SelectSubset<T, UserAppProfileUpsertArgs<ExtArgs>>): Prisma__UserAppProfileClient<$Result.GetResult<Prisma.$UserAppProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAppProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAppProfileCountArgs} args - Arguments to filter UserAppProfiles to count.
     * @example
     * // Count the number of UserAppProfiles
     * const count = await prisma.userAppProfile.count({
     *   where: {
     *     // ... the filter for the UserAppProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserAppProfileCountArgs>(
      args?: Subset<T, UserAppProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAppProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAppProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAppProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAppProfileAggregateArgs>(args: Subset<T, UserAppProfileAggregateArgs>): Prisma.PrismaPromise<GetUserAppProfileAggregateType<T>>

    /**
     * Group by UserAppProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAppProfileGroupByArgs} args - Group by arguments.
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
      T extends UserAppProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAppProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserAppProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAppProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAppProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAppProfile model
   */
  readonly fields: UserAppProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAppProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAppProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAppProfile model
   */
  interface UserAppProfileFieldRefs {
    readonly id: FieldRef<"UserAppProfile", 'String'>
    readonly userId: FieldRef<"UserAppProfile", 'String'>
    readonly app: FieldRef<"UserAppProfile", 'App'>
    readonly type: FieldRef<"UserAppProfile", 'UserType'>
    readonly createdAt: FieldRef<"UserAppProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAppProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAppProfile findUnique
   */
  export type UserAppProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserAppProfile to fetch.
     */
    where: UserAppProfileWhereUniqueInput
  }

  /**
   * UserAppProfile findUniqueOrThrow
   */
  export type UserAppProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserAppProfile to fetch.
     */
    where: UserAppProfileWhereUniqueInput
  }

  /**
   * UserAppProfile findFirst
   */
  export type UserAppProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserAppProfile to fetch.
     */
    where?: UserAppProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAppProfiles to fetch.
     */
    orderBy?: UserAppProfileOrderByWithRelationInput | UserAppProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAppProfiles.
     */
    cursor?: UserAppProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAppProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAppProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAppProfiles.
     */
    distinct?: UserAppProfileScalarFieldEnum | UserAppProfileScalarFieldEnum[]
  }

  /**
   * UserAppProfile findFirstOrThrow
   */
  export type UserAppProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserAppProfile to fetch.
     */
    where?: UserAppProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAppProfiles to fetch.
     */
    orderBy?: UserAppProfileOrderByWithRelationInput | UserAppProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAppProfiles.
     */
    cursor?: UserAppProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAppProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAppProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAppProfiles.
     */
    distinct?: UserAppProfileScalarFieldEnum | UserAppProfileScalarFieldEnum[]
  }

  /**
   * UserAppProfile findMany
   */
  export type UserAppProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserAppProfiles to fetch.
     */
    where?: UserAppProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAppProfiles to fetch.
     */
    orderBy?: UserAppProfileOrderByWithRelationInput | UserAppProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAppProfiles.
     */
    cursor?: UserAppProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAppProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAppProfiles.
     */
    skip?: number
    distinct?: UserAppProfileScalarFieldEnum | UserAppProfileScalarFieldEnum[]
  }

  /**
   * UserAppProfile create
   */
  export type UserAppProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAppProfile.
     */
    data: XOR<UserAppProfileCreateInput, UserAppProfileUncheckedCreateInput>
  }

  /**
   * UserAppProfile createMany
   */
  export type UserAppProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAppProfiles.
     */
    data: UserAppProfileCreateManyInput | UserAppProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAppProfile createManyAndReturn
   */
  export type UserAppProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserAppProfiles.
     */
    data: UserAppProfileCreateManyInput | UserAppProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAppProfile update
   */
  export type UserAppProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAppProfile.
     */
    data: XOR<UserAppProfileUpdateInput, UserAppProfileUncheckedUpdateInput>
    /**
     * Choose, which UserAppProfile to update.
     */
    where: UserAppProfileWhereUniqueInput
  }

  /**
   * UserAppProfile updateMany
   */
  export type UserAppProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAppProfiles.
     */
    data: XOR<UserAppProfileUpdateManyMutationInput, UserAppProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserAppProfiles to update
     */
    where?: UserAppProfileWhereInput
    /**
     * Limit how many UserAppProfiles to update.
     */
    limit?: number
  }

  /**
   * UserAppProfile updateManyAndReturn
   */
  export type UserAppProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserAppProfiles.
     */
    data: XOR<UserAppProfileUpdateManyMutationInput, UserAppProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserAppProfiles to update
     */
    where?: UserAppProfileWhereInput
    /**
     * Limit how many UserAppProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAppProfile upsert
   */
  export type UserAppProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAppProfile to update in case it exists.
     */
    where: UserAppProfileWhereUniqueInput
    /**
     * In case the UserAppProfile found by the `where` argument doesn't exist, create a new UserAppProfile with this data.
     */
    create: XOR<UserAppProfileCreateInput, UserAppProfileUncheckedCreateInput>
    /**
     * In case the UserAppProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAppProfileUpdateInput, UserAppProfileUncheckedUpdateInput>
  }

  /**
   * UserAppProfile delete
   */
  export type UserAppProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileInclude<ExtArgs> | null
    /**
     * Filter which UserAppProfile to delete.
     */
    where: UserAppProfileWhereUniqueInput
  }

  /**
   * UserAppProfile deleteMany
   */
  export type UserAppProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAppProfiles to delete
     */
    where?: UserAppProfileWhereInput
    /**
     * Limit how many UserAppProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserAppProfile without action
   */
  export type UserAppProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAppProfile
     */
    select?: UserAppProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAppProfile
     */
    omit?: UserAppProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAppProfileInclude<ExtArgs> | null
  }


  /**
   * Model Orisa
   */

  export type AggregateOrisa = {
    _count: OrisaCountAggregateOutputType | null
    _avg: OrisaAvgAggregateOutputType | null
    _sum: OrisaSumAggregateOutputType | null
    _min: OrisaMinAggregateOutputType | null
    _max: OrisaMaxAggregateOutputType | null
  }

  export type OrisaAvgAggregateOutputType = {
    id: number | null
  }

  export type OrisaSumAggregateOutputType = {
    id: number | null
  }

  export type OrisaMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: string | null
  }

  export type OrisaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: string | null
  }

  export type OrisaCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type OrisaAvgAggregateInputType = {
    id?: true
  }

  export type OrisaSumAggregateInputType = {
    id?: true
  }

  export type OrisaMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type OrisaMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type OrisaCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type OrisaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orisa to aggregate.
     */
    where?: OrisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orisas to fetch.
     */
    orderBy?: OrisaOrderByWithRelationInput | OrisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orisas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orisas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orisas
    **/
    _count?: true | OrisaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrisaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrisaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrisaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrisaMaxAggregateInputType
  }

  export type GetOrisaAggregateType<T extends OrisaAggregateArgs> = {
        [P in keyof T & keyof AggregateOrisa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrisa[P]>
      : GetScalarType<T[P], AggregateOrisa[P]>
  }




  export type OrisaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrisaWhereInput
    orderBy?: OrisaOrderByWithAggregationInput | OrisaOrderByWithAggregationInput[]
    by: OrisaScalarFieldEnum[] | OrisaScalarFieldEnum
    having?: OrisaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrisaCountAggregateInputType | true
    _avg?: OrisaAvgAggregateInputType
    _sum?: OrisaSumAggregateInputType
    _min?: OrisaMinAggregateInputType
    _max?: OrisaMaxAggregateInputType
  }

  export type OrisaGroupByOutputType = {
    id: number
    name: string
    userId: string | null
    _count: OrisaCountAggregateOutputType | null
    _avg: OrisaAvgAggregateOutputType | null
    _sum: OrisaSumAggregateOutputType | null
    _min: OrisaMinAggregateOutputType | null
    _max: OrisaMaxAggregateOutputType | null
  }

  type GetOrisaGroupByPayload<T extends OrisaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrisaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrisaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrisaGroupByOutputType[P]>
            : GetScalarType<T[P], OrisaGroupByOutputType[P]>
        }
      >
    >


  export type OrisaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | Orisa$userArgs<ExtArgs>
    festivals?: boolean | Orisa$festivalsArgs<ExtArgs>
    _count?: boolean | OrisaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orisa"]>

  export type OrisaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | Orisa$userArgs<ExtArgs>
  }, ExtArgs["result"]["orisa"]>

  export type OrisaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | Orisa$userArgs<ExtArgs>
  }, ExtArgs["result"]["orisa"]>

  export type OrisaSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type OrisaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["orisa"]>
  export type OrisaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Orisa$userArgs<ExtArgs>
    festivals?: boolean | Orisa$festivalsArgs<ExtArgs>
    _count?: boolean | OrisaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrisaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Orisa$userArgs<ExtArgs>
  }
  export type OrisaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Orisa$userArgs<ExtArgs>
  }

  export type $OrisaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orisa"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      festivals: Prisma.$FestivalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: string | null
    }, ExtArgs["result"]["orisa"]>
    composites: {}
  }

  type OrisaGetPayload<S extends boolean | null | undefined | OrisaDefaultArgs> = $Result.GetResult<Prisma.$OrisaPayload, S>

  type OrisaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrisaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrisaCountAggregateInputType | true
    }

  export interface OrisaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orisa'], meta: { name: 'Orisa' } }
    /**
     * Find zero or one Orisa that matches the filter.
     * @param {OrisaFindUniqueArgs} args - Arguments to find a Orisa
     * @example
     * // Get one Orisa
     * const orisa = await prisma.orisa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrisaFindUniqueArgs>(args: SelectSubset<T, OrisaFindUniqueArgs<ExtArgs>>): Prisma__OrisaClient<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orisa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrisaFindUniqueOrThrowArgs} args - Arguments to find a Orisa
     * @example
     * // Get one Orisa
     * const orisa = await prisma.orisa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrisaFindUniqueOrThrowArgs>(args: SelectSubset<T, OrisaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrisaClient<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orisa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrisaFindFirstArgs} args - Arguments to find a Orisa
     * @example
     * // Get one Orisa
     * const orisa = await prisma.orisa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrisaFindFirstArgs>(args?: SelectSubset<T, OrisaFindFirstArgs<ExtArgs>>): Prisma__OrisaClient<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orisa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrisaFindFirstOrThrowArgs} args - Arguments to find a Orisa
     * @example
     * // Get one Orisa
     * const orisa = await prisma.orisa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrisaFindFirstOrThrowArgs>(args?: SelectSubset<T, OrisaFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrisaClient<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orisas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrisaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orisas
     * const orisas = await prisma.orisa.findMany()
     * 
     * // Get first 10 Orisas
     * const orisas = await prisma.orisa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orisaWithIdOnly = await prisma.orisa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrisaFindManyArgs>(args?: SelectSubset<T, OrisaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orisa.
     * @param {OrisaCreateArgs} args - Arguments to create a Orisa.
     * @example
     * // Create one Orisa
     * const Orisa = await prisma.orisa.create({
     *   data: {
     *     // ... data to create a Orisa
     *   }
     * })
     * 
     */
    create<T extends OrisaCreateArgs>(args: SelectSubset<T, OrisaCreateArgs<ExtArgs>>): Prisma__OrisaClient<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orisas.
     * @param {OrisaCreateManyArgs} args - Arguments to create many Orisas.
     * @example
     * // Create many Orisas
     * const orisa = await prisma.orisa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrisaCreateManyArgs>(args?: SelectSubset<T, OrisaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orisas and returns the data saved in the database.
     * @param {OrisaCreateManyAndReturnArgs} args - Arguments to create many Orisas.
     * @example
     * // Create many Orisas
     * const orisa = await prisma.orisa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orisas and only return the `id`
     * const orisaWithIdOnly = await prisma.orisa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrisaCreateManyAndReturnArgs>(args?: SelectSubset<T, OrisaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orisa.
     * @param {OrisaDeleteArgs} args - Arguments to delete one Orisa.
     * @example
     * // Delete one Orisa
     * const Orisa = await prisma.orisa.delete({
     *   where: {
     *     // ... filter to delete one Orisa
     *   }
     * })
     * 
     */
    delete<T extends OrisaDeleteArgs>(args: SelectSubset<T, OrisaDeleteArgs<ExtArgs>>): Prisma__OrisaClient<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orisa.
     * @param {OrisaUpdateArgs} args - Arguments to update one Orisa.
     * @example
     * // Update one Orisa
     * const orisa = await prisma.orisa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrisaUpdateArgs>(args: SelectSubset<T, OrisaUpdateArgs<ExtArgs>>): Prisma__OrisaClient<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orisas.
     * @param {OrisaDeleteManyArgs} args - Arguments to filter Orisas to delete.
     * @example
     * // Delete a few Orisas
     * const { count } = await prisma.orisa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrisaDeleteManyArgs>(args?: SelectSubset<T, OrisaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orisas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrisaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orisas
     * const orisa = await prisma.orisa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrisaUpdateManyArgs>(args: SelectSubset<T, OrisaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orisas and returns the data updated in the database.
     * @param {OrisaUpdateManyAndReturnArgs} args - Arguments to update many Orisas.
     * @example
     * // Update many Orisas
     * const orisa = await prisma.orisa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orisas and only return the `id`
     * const orisaWithIdOnly = await prisma.orisa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrisaUpdateManyAndReturnArgs>(args: SelectSubset<T, OrisaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orisa.
     * @param {OrisaUpsertArgs} args - Arguments to update or create a Orisa.
     * @example
     * // Update or create a Orisa
     * const orisa = await prisma.orisa.upsert({
     *   create: {
     *     // ... data to create a Orisa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orisa we want to update
     *   }
     * })
     */
    upsert<T extends OrisaUpsertArgs>(args: SelectSubset<T, OrisaUpsertArgs<ExtArgs>>): Prisma__OrisaClient<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orisas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrisaCountArgs} args - Arguments to filter Orisas to count.
     * @example
     * // Count the number of Orisas
     * const count = await prisma.orisa.count({
     *   where: {
     *     // ... the filter for the Orisas we want to count
     *   }
     * })
    **/
    count<T extends OrisaCountArgs>(
      args?: Subset<T, OrisaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrisaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orisa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrisaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrisaAggregateArgs>(args: Subset<T, OrisaAggregateArgs>): Prisma.PrismaPromise<GetOrisaAggregateType<T>>

    /**
     * Group by Orisa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrisaGroupByArgs} args - Group by arguments.
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
      T extends OrisaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrisaGroupByArgs['orderBy'] }
        : { orderBy?: OrisaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrisaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrisaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orisa model
   */
  readonly fields: OrisaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orisa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrisaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Orisa$userArgs<ExtArgs> = {}>(args?: Subset<T, Orisa$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    festivals<T extends Orisa$festivalsArgs<ExtArgs> = {}>(args?: Subset<T, Orisa$festivalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orisa model
   */
  interface OrisaFieldRefs {
    readonly id: FieldRef<"Orisa", 'Int'>
    readonly name: FieldRef<"Orisa", 'String'>
    readonly userId: FieldRef<"Orisa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orisa findUnique
   */
  export type OrisaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaInclude<ExtArgs> | null
    /**
     * Filter, which Orisa to fetch.
     */
    where: OrisaWhereUniqueInput
  }

  /**
   * Orisa findUniqueOrThrow
   */
  export type OrisaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaInclude<ExtArgs> | null
    /**
     * Filter, which Orisa to fetch.
     */
    where: OrisaWhereUniqueInput
  }

  /**
   * Orisa findFirst
   */
  export type OrisaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaInclude<ExtArgs> | null
    /**
     * Filter, which Orisa to fetch.
     */
    where?: OrisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orisas to fetch.
     */
    orderBy?: OrisaOrderByWithRelationInput | OrisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orisas.
     */
    cursor?: OrisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orisas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orisas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orisas.
     */
    distinct?: OrisaScalarFieldEnum | OrisaScalarFieldEnum[]
  }

  /**
   * Orisa findFirstOrThrow
   */
  export type OrisaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaInclude<ExtArgs> | null
    /**
     * Filter, which Orisa to fetch.
     */
    where?: OrisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orisas to fetch.
     */
    orderBy?: OrisaOrderByWithRelationInput | OrisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orisas.
     */
    cursor?: OrisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orisas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orisas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orisas.
     */
    distinct?: OrisaScalarFieldEnum | OrisaScalarFieldEnum[]
  }

  /**
   * Orisa findMany
   */
  export type OrisaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaInclude<ExtArgs> | null
    /**
     * Filter, which Orisas to fetch.
     */
    where?: OrisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orisas to fetch.
     */
    orderBy?: OrisaOrderByWithRelationInput | OrisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orisas.
     */
    cursor?: OrisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orisas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orisas.
     */
    skip?: number
    distinct?: OrisaScalarFieldEnum | OrisaScalarFieldEnum[]
  }

  /**
   * Orisa create
   */
  export type OrisaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaInclude<ExtArgs> | null
    /**
     * The data needed to create a Orisa.
     */
    data: XOR<OrisaCreateInput, OrisaUncheckedCreateInput>
  }

  /**
   * Orisa createMany
   */
  export type OrisaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orisas.
     */
    data: OrisaCreateManyInput | OrisaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orisa createManyAndReturn
   */
  export type OrisaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * The data used to create many Orisas.
     */
    data: OrisaCreateManyInput | OrisaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orisa update
   */
  export type OrisaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaInclude<ExtArgs> | null
    /**
     * The data needed to update a Orisa.
     */
    data: XOR<OrisaUpdateInput, OrisaUncheckedUpdateInput>
    /**
     * Choose, which Orisa to update.
     */
    where: OrisaWhereUniqueInput
  }

  /**
   * Orisa updateMany
   */
  export type OrisaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orisas.
     */
    data: XOR<OrisaUpdateManyMutationInput, OrisaUncheckedUpdateManyInput>
    /**
     * Filter which Orisas to update
     */
    where?: OrisaWhereInput
    /**
     * Limit how many Orisas to update.
     */
    limit?: number
  }

  /**
   * Orisa updateManyAndReturn
   */
  export type OrisaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * The data used to update Orisas.
     */
    data: XOR<OrisaUpdateManyMutationInput, OrisaUncheckedUpdateManyInput>
    /**
     * Filter which Orisas to update
     */
    where?: OrisaWhereInput
    /**
     * Limit how many Orisas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orisa upsert
   */
  export type OrisaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaInclude<ExtArgs> | null
    /**
     * The filter to search for the Orisa to update in case it exists.
     */
    where: OrisaWhereUniqueInput
    /**
     * In case the Orisa found by the `where` argument doesn't exist, create a new Orisa with this data.
     */
    create: XOR<OrisaCreateInput, OrisaUncheckedCreateInput>
    /**
     * In case the Orisa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrisaUpdateInput, OrisaUncheckedUpdateInput>
  }

  /**
   * Orisa delete
   */
  export type OrisaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaInclude<ExtArgs> | null
    /**
     * Filter which Orisa to delete.
     */
    where: OrisaWhereUniqueInput
  }

  /**
   * Orisa deleteMany
   */
  export type OrisaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orisas to delete
     */
    where?: OrisaWhereInput
    /**
     * Limit how many Orisas to delete.
     */
    limit?: number
  }

  /**
   * Orisa.user
   */
  export type Orisa$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Orisa.festivals
   */
  export type Orisa$festivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    where?: FestivalWhereInput
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    cursor?: FestivalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * Orisa without action
   */
  export type OrisaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orisa
     */
    select?: OrisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orisa
     */
    omit?: OrisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrisaInclude<ExtArgs> | null
  }


  /**
   * Model Festival
   */

  export type AggregateFestival = {
    _count: FestivalCountAggregateOutputType | null
    _avg: FestivalAvgAggregateOutputType | null
    _sum: FestivalSumAggregateOutputType | null
    _min: FestivalMinAggregateOutputType | null
    _max: FestivalMaxAggregateOutputType | null
  }

  export type FestivalAvgAggregateOutputType = {
    id: number | null
    orisaId: number | null
  }

  export type FestivalSumAggregateOutputType = {
    id: number | null
    orisaId: number | null
  }

  export type FestivalMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    orisaId: number | null
    userId: string | null
    country: string | null
    eventType: string | null
    location: string | null
    eventLink: string | null
    timezone: string | null
    startDate: Date | null
    startTime: string | null
    endDate: Date | null
    endTime: string | null
    ticketType: string | null
    image: string | null
    banner: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FestivalMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    orisaId: number | null
    userId: string | null
    country: string | null
    eventType: string | null
    location: string | null
    eventLink: string | null
    timezone: string | null
    startDate: Date | null
    startTime: string | null
    endDate: Date | null
    endTime: string | null
    ticketType: string | null
    image: string | null
    banner: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FestivalCountAggregateOutputType = {
    id: number
    title: number
    description: number
    orisaId: number
    userId: number
    country: number
    eventType: number
    location: number
    eventLink: number
    timezone: number
    startDate: number
    startTime: number
    endDate: number
    endTime: number
    ticketType: number
    image: number
    banner: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FestivalAvgAggregateInputType = {
    id?: true
    orisaId?: true
  }

  export type FestivalSumAggregateInputType = {
    id?: true
    orisaId?: true
  }

  export type FestivalMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    orisaId?: true
    userId?: true
    country?: true
    eventType?: true
    location?: true
    eventLink?: true
    timezone?: true
    startDate?: true
    startTime?: true
    endDate?: true
    endTime?: true
    ticketType?: true
    image?: true
    banner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FestivalMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    orisaId?: true
    userId?: true
    country?: true
    eventType?: true
    location?: true
    eventLink?: true
    timezone?: true
    startDate?: true
    startTime?: true
    endDate?: true
    endTime?: true
    ticketType?: true
    image?: true
    banner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FestivalCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    orisaId?: true
    userId?: true
    country?: true
    eventType?: true
    location?: true
    eventLink?: true
    timezone?: true
    startDate?: true
    startTime?: true
    endDate?: true
    endTime?: true
    ticketType?: true
    image?: true
    banner?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FestivalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Festival to aggregate.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Festivals
    **/
    _count?: true | FestivalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FestivalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FestivalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FestivalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FestivalMaxAggregateInputType
  }

  export type GetFestivalAggregateType<T extends FestivalAggregateArgs> = {
        [P in keyof T & keyof AggregateFestival]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFestival[P]>
      : GetScalarType<T[P], AggregateFestival[P]>
  }




  export type FestivalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FestivalWhereInput
    orderBy?: FestivalOrderByWithAggregationInput | FestivalOrderByWithAggregationInput[]
    by: FestivalScalarFieldEnum[] | FestivalScalarFieldEnum
    having?: FestivalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FestivalCountAggregateInputType | true
    _avg?: FestivalAvgAggregateInputType
    _sum?: FestivalSumAggregateInputType
    _min?: FestivalMinAggregateInputType
    _max?: FestivalMaxAggregateInputType
  }

  export type FestivalGroupByOutputType = {
    id: number
    title: string
    description: string
    orisaId: number
    userId: string
    country: string
    eventType: string
    location: string | null
    eventLink: string | null
    timezone: string
    startDate: Date
    startTime: string | null
    endDate: Date
    endTime: string | null
    ticketType: string
    image: string | null
    banner: string | null
    createdAt: Date
    updatedAt: Date
    _count: FestivalCountAggregateOutputType | null
    _avg: FestivalAvgAggregateOutputType | null
    _sum: FestivalSumAggregateOutputType | null
    _min: FestivalMinAggregateOutputType | null
    _max: FestivalMaxAggregateOutputType | null
  }

  type GetFestivalGroupByPayload<T extends FestivalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FestivalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FestivalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FestivalGroupByOutputType[P]>
            : GetScalarType<T[P], FestivalGroupByOutputType[P]>
        }
      >
    >


  export type FestivalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    orisaId?: boolean
    userId?: boolean
    country?: boolean
    eventType?: boolean
    location?: boolean
    eventLink?: boolean
    timezone?: boolean
    startDate?: boolean
    startTime?: boolean
    endDate?: boolean
    endTime?: boolean
    ticketType?: boolean
    image?: boolean
    banner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orisa?: boolean | OrisaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    tickets?: boolean | Festival$ticketsArgs<ExtArgs>
    _count?: boolean | FestivalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festival"]>

  export type FestivalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    orisaId?: boolean
    userId?: boolean
    country?: boolean
    eventType?: boolean
    location?: boolean
    eventLink?: boolean
    timezone?: boolean
    startDate?: boolean
    startTime?: boolean
    endDate?: boolean
    endTime?: boolean
    ticketType?: boolean
    image?: boolean
    banner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orisa?: boolean | OrisaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festival"]>

  export type FestivalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    orisaId?: boolean
    userId?: boolean
    country?: boolean
    eventType?: boolean
    location?: boolean
    eventLink?: boolean
    timezone?: boolean
    startDate?: boolean
    startTime?: boolean
    endDate?: boolean
    endTime?: boolean
    ticketType?: boolean
    image?: boolean
    banner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orisa?: boolean | OrisaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festival"]>

  export type FestivalSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    orisaId?: boolean
    userId?: boolean
    country?: boolean
    eventType?: boolean
    location?: boolean
    eventLink?: boolean
    timezone?: boolean
    startDate?: boolean
    startTime?: boolean
    endDate?: boolean
    endTime?: boolean
    ticketType?: boolean
    image?: boolean
    banner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FestivalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "orisaId" | "userId" | "country" | "eventType" | "location" | "eventLink" | "timezone" | "startDate" | "startTime" | "endDate" | "endTime" | "ticketType" | "image" | "banner" | "createdAt" | "updatedAt", ExtArgs["result"]["festival"]>
  export type FestivalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orisa?: boolean | OrisaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    tickets?: boolean | Festival$ticketsArgs<ExtArgs>
    _count?: boolean | FestivalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FestivalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orisa?: boolean | OrisaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FestivalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orisa?: boolean | OrisaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FestivalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Festival"
    objects: {
      orisa: Prisma.$OrisaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      orisaId: number
      userId: string
      country: string
      eventType: string
      location: string | null
      eventLink: string | null
      timezone: string
      startDate: Date
      startTime: string | null
      endDate: Date
      endTime: string | null
      ticketType: string
      image: string | null
      banner: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["festival"]>
    composites: {}
  }

  type FestivalGetPayload<S extends boolean | null | undefined | FestivalDefaultArgs> = $Result.GetResult<Prisma.$FestivalPayload, S>

  type FestivalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FestivalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FestivalCountAggregateInputType | true
    }

  export interface FestivalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Festival'], meta: { name: 'Festival' } }
    /**
     * Find zero or one Festival that matches the filter.
     * @param {FestivalFindUniqueArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FestivalFindUniqueArgs>(args: SelectSubset<T, FestivalFindUniqueArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Festival that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FestivalFindUniqueOrThrowArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FestivalFindUniqueOrThrowArgs>(args: SelectSubset<T, FestivalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Festival that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalFindFirstArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FestivalFindFirstArgs>(args?: SelectSubset<T, FestivalFindFirstArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Festival that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalFindFirstOrThrowArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FestivalFindFirstOrThrowArgs>(args?: SelectSubset<T, FestivalFindFirstOrThrowArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Festivals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Festivals
     * const festivals = await prisma.festival.findMany()
     * 
     * // Get first 10 Festivals
     * const festivals = await prisma.festival.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const festivalWithIdOnly = await prisma.festival.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FestivalFindManyArgs>(args?: SelectSubset<T, FestivalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Festival.
     * @param {FestivalCreateArgs} args - Arguments to create a Festival.
     * @example
     * // Create one Festival
     * const Festival = await prisma.festival.create({
     *   data: {
     *     // ... data to create a Festival
     *   }
     * })
     * 
     */
    create<T extends FestivalCreateArgs>(args: SelectSubset<T, FestivalCreateArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Festivals.
     * @param {FestivalCreateManyArgs} args - Arguments to create many Festivals.
     * @example
     * // Create many Festivals
     * const festival = await prisma.festival.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FestivalCreateManyArgs>(args?: SelectSubset<T, FestivalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Festivals and returns the data saved in the database.
     * @param {FestivalCreateManyAndReturnArgs} args - Arguments to create many Festivals.
     * @example
     * // Create many Festivals
     * const festival = await prisma.festival.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Festivals and only return the `id`
     * const festivalWithIdOnly = await prisma.festival.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FestivalCreateManyAndReturnArgs>(args?: SelectSubset<T, FestivalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Festival.
     * @param {FestivalDeleteArgs} args - Arguments to delete one Festival.
     * @example
     * // Delete one Festival
     * const Festival = await prisma.festival.delete({
     *   where: {
     *     // ... filter to delete one Festival
     *   }
     * })
     * 
     */
    delete<T extends FestivalDeleteArgs>(args: SelectSubset<T, FestivalDeleteArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Festival.
     * @param {FestivalUpdateArgs} args - Arguments to update one Festival.
     * @example
     * // Update one Festival
     * const festival = await prisma.festival.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FestivalUpdateArgs>(args: SelectSubset<T, FestivalUpdateArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Festivals.
     * @param {FestivalDeleteManyArgs} args - Arguments to filter Festivals to delete.
     * @example
     * // Delete a few Festivals
     * const { count } = await prisma.festival.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FestivalDeleteManyArgs>(args?: SelectSubset<T, FestivalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Festivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Festivals
     * const festival = await prisma.festival.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FestivalUpdateManyArgs>(args: SelectSubset<T, FestivalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Festivals and returns the data updated in the database.
     * @param {FestivalUpdateManyAndReturnArgs} args - Arguments to update many Festivals.
     * @example
     * // Update many Festivals
     * const festival = await prisma.festival.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Festivals and only return the `id`
     * const festivalWithIdOnly = await prisma.festival.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FestivalUpdateManyAndReturnArgs>(args: SelectSubset<T, FestivalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Festival.
     * @param {FestivalUpsertArgs} args - Arguments to update or create a Festival.
     * @example
     * // Update or create a Festival
     * const festival = await prisma.festival.upsert({
     *   create: {
     *     // ... data to create a Festival
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Festival we want to update
     *   }
     * })
     */
    upsert<T extends FestivalUpsertArgs>(args: SelectSubset<T, FestivalUpsertArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Festivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalCountArgs} args - Arguments to filter Festivals to count.
     * @example
     * // Count the number of Festivals
     * const count = await prisma.festival.count({
     *   where: {
     *     // ... the filter for the Festivals we want to count
     *   }
     * })
    **/
    count<T extends FestivalCountArgs>(
      args?: Subset<T, FestivalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FestivalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Festival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FestivalAggregateArgs>(args: Subset<T, FestivalAggregateArgs>): Prisma.PrismaPromise<GetFestivalAggregateType<T>>

    /**
     * Group by Festival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalGroupByArgs} args - Group by arguments.
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
      T extends FestivalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FestivalGroupByArgs['orderBy'] }
        : { orderBy?: FestivalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FestivalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFestivalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Festival model
   */
  readonly fields: FestivalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Festival.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FestivalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orisa<T extends OrisaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrisaDefaultArgs<ExtArgs>>): Prisma__OrisaClient<$Result.GetResult<Prisma.$OrisaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Festival$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Festival$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Festival model
   */
  interface FestivalFieldRefs {
    readonly id: FieldRef<"Festival", 'Int'>
    readonly title: FieldRef<"Festival", 'String'>
    readonly description: FieldRef<"Festival", 'String'>
    readonly orisaId: FieldRef<"Festival", 'Int'>
    readonly userId: FieldRef<"Festival", 'String'>
    readonly country: FieldRef<"Festival", 'String'>
    readonly eventType: FieldRef<"Festival", 'String'>
    readonly location: FieldRef<"Festival", 'String'>
    readonly eventLink: FieldRef<"Festival", 'String'>
    readonly timezone: FieldRef<"Festival", 'String'>
    readonly startDate: FieldRef<"Festival", 'DateTime'>
    readonly startTime: FieldRef<"Festival", 'String'>
    readonly endDate: FieldRef<"Festival", 'DateTime'>
    readonly endTime: FieldRef<"Festival", 'String'>
    readonly ticketType: FieldRef<"Festival", 'String'>
    readonly image: FieldRef<"Festival", 'String'>
    readonly banner: FieldRef<"Festival", 'String'>
    readonly createdAt: FieldRef<"Festival", 'DateTime'>
    readonly updatedAt: FieldRef<"Festival", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Festival findUnique
   */
  export type FestivalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival findUniqueOrThrow
   */
  export type FestivalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival findFirst
   */
  export type FestivalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Festivals.
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Festivals.
     */
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * Festival findFirstOrThrow
   */
  export type FestivalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Festivals.
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Festivals.
     */
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * Festival findMany
   */
  export type FestivalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festivals to fetch.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Festivals.
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * Festival create
   */
  export type FestivalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * The data needed to create a Festival.
     */
    data: XOR<FestivalCreateInput, FestivalUncheckedCreateInput>
  }

  /**
   * Festival createMany
   */
  export type FestivalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Festivals.
     */
    data: FestivalCreateManyInput | FestivalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Festival createManyAndReturn
   */
  export type FestivalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * The data used to create many Festivals.
     */
    data: FestivalCreateManyInput | FestivalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Festival update
   */
  export type FestivalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * The data needed to update a Festival.
     */
    data: XOR<FestivalUpdateInput, FestivalUncheckedUpdateInput>
    /**
     * Choose, which Festival to update.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival updateMany
   */
  export type FestivalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Festivals.
     */
    data: XOR<FestivalUpdateManyMutationInput, FestivalUncheckedUpdateManyInput>
    /**
     * Filter which Festivals to update
     */
    where?: FestivalWhereInput
    /**
     * Limit how many Festivals to update.
     */
    limit?: number
  }

  /**
   * Festival updateManyAndReturn
   */
  export type FestivalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * The data used to update Festivals.
     */
    data: XOR<FestivalUpdateManyMutationInput, FestivalUncheckedUpdateManyInput>
    /**
     * Filter which Festivals to update
     */
    where?: FestivalWhereInput
    /**
     * Limit how many Festivals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Festival upsert
   */
  export type FestivalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * The filter to search for the Festival to update in case it exists.
     */
    where: FestivalWhereUniqueInput
    /**
     * In case the Festival found by the `where` argument doesn't exist, create a new Festival with this data.
     */
    create: XOR<FestivalCreateInput, FestivalUncheckedCreateInput>
    /**
     * In case the Festival was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FestivalUpdateInput, FestivalUncheckedUpdateInput>
  }

  /**
   * Festival delete
   */
  export type FestivalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter which Festival to delete.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival deleteMany
   */
  export type FestivalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Festivals to delete
     */
    where?: FestivalWhereInput
    /**
     * Limit how many Festivals to delete.
     */
    limit?: number
  }

  /**
   * Festival.tickets
   */
  export type Festival$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Festival without action
   */
  export type FestivalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    festivalId: number | null
    price: number | null
    quantity: number | null
    maxPerGroup: number | null
    sold: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    festivalId: number | null
    price: number | null
    quantity: number | null
    maxPerGroup: number | null
    sold: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    festivalId: number | null
    creatorId: string | null
    name: string | null
    type: string | null
    isFree: boolean | null
    price: number | null
    quantity: number | null
    maxPerGroup: number | null
    sold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    festivalId: number | null
    creatorId: string | null
    name: string | null
    type: string | null
    isFree: boolean | null
    price: number | null
    quantity: number | null
    maxPerGroup: number | null
    sold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    festivalId: number
    creatorId: number
    name: number
    type: number
    isFree: number
    price: number
    quantity: number
    maxPerGroup: number
    sold: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    festivalId?: true
    price?: true
    quantity?: true
    maxPerGroup?: true
    sold?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    festivalId?: true
    price?: true
    quantity?: true
    maxPerGroup?: true
    sold?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    festivalId?: true
    creatorId?: true
    name?: true
    type?: true
    isFree?: true
    price?: true
    quantity?: true
    maxPerGroup?: true
    sold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    festivalId?: true
    creatorId?: true
    name?: true
    type?: true
    isFree?: true
    price?: true
    quantity?: true
    maxPerGroup?: true
    sold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    festivalId?: true
    creatorId?: true
    name?: true
    type?: true
    isFree?: true
    price?: true
    quantity?: true
    maxPerGroup?: true
    sold?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    festivalId: number
    creatorId: string
    name: string
    type: string
    isFree: boolean
    price: number | null
    quantity: number
    maxPerGroup: number | null
    sold: number
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    creatorId?: boolean
    name?: boolean
    type?: boolean
    isFree?: boolean
    price?: boolean
    quantity?: boolean
    maxPerGroup?: boolean
    sold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    creatorId?: boolean
    name?: boolean
    type?: boolean
    isFree?: boolean
    price?: boolean
    quantity?: boolean
    maxPerGroup?: boolean
    sold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    creatorId?: boolean
    name?: boolean
    type?: boolean
    isFree?: boolean
    price?: boolean
    quantity?: boolean
    maxPerGroup?: boolean
    sold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    festivalId?: boolean
    creatorId?: boolean
    name?: boolean
    type?: boolean
    isFree?: boolean
    price?: boolean
    quantity?: boolean
    maxPerGroup?: boolean
    sold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "festivalId" | "creatorId" | "name" | "type" | "isFree" | "price" | "quantity" | "maxPerGroup" | "sold" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      festival: Prisma.$FestivalPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      festivalId: number
      creatorId: string
      name: string
      type: string
      isFree: boolean
      price: number | null
      quantity: number
      maxPerGroup: number | null
      sold: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    festival<T extends FestivalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FestivalDefaultArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly festivalId: FieldRef<"Ticket", 'Int'>
    readonly creatorId: FieldRef<"Ticket", 'String'>
    readonly name: FieldRef<"Ticket", 'String'>
    readonly type: FieldRef<"Ticket", 'String'>
    readonly isFree: FieldRef<"Ticket", 'Boolean'>
    readonly price: FieldRef<"Ticket", 'Float'>
    readonly quantity: FieldRef<"Ticket", 'Int'>
    readonly maxPerGroup: FieldRef<"Ticket", 'Int'>
    readonly sold: FieldRef<"Ticket", 'Int'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    image: 'image',
    twoFactorEnabled: 'twoFactorEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId',
    app: 'app'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const UserAppProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    app: 'app',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAppProfileScalarFieldEnum = (typeof UserAppProfileScalarFieldEnum)[keyof typeof UserAppProfileScalarFieldEnum]


  export const OrisaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type OrisaScalarFieldEnum = (typeof OrisaScalarFieldEnum)[keyof typeof OrisaScalarFieldEnum]


  export const FestivalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    orisaId: 'orisaId',
    userId: 'userId',
    country: 'country',
    eventType: 'eventType',
    location: 'location',
    eventLink: 'eventLink',
    timezone: 'timezone',
    startDate: 'startDate',
    startTime: 'startTime',
    endDate: 'endDate',
    endTime: 'endTime',
    ticketType: 'ticketType',
    image: 'image',
    banner: 'banner',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FestivalScalarFieldEnum = (typeof FestivalScalarFieldEnum)[keyof typeof FestivalScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    festivalId: 'festivalId',
    creatorId: 'creatorId',
    name: 'name',
    type: 'type',
    isFree: 'isFree',
    price: 'price',
    quantity: 'quantity',
    maxPerGroup: 'maxPerGroup',
    sold: 'sold',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'RoleName[]'
   */
  export type ListEnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName[]'>
    


  /**
   * Reference to a field of type 'App'
   */
  export type EnumAppFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'App'>
    


  /**
   * Reference to a field of type 'App[]'
   */
  export type ListEnumAppFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'App[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    userAppProfiles?: UserAppProfileListRelationFilter
    festivals?: FestivalListRelationFilter
    orisas?: OrisaListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: UserRoleOrderByRelationAggregateInput
    userAppProfiles?: UserAppProfileOrderByRelationAggregateInput
    festivals?: FestivalOrderByRelationAggregateInput
    orisas?: OrisaOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    userAppProfiles?: UserAppProfileListRelationFilter
    festivals?: FestivalListRelationFilter
    orisas?: OrisaListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    twoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: EnumRoleNameFilter<"Role"> | $Enums.RoleName
    users?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: $Enums.RoleName
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: EnumRoleNameWithAggregatesFilter<"Role"> | $Enums.RoleName
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: StringFilter<"UserRole"> | string
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    app?: EnumAppFilter<"UserRole"> | $Enums.App
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    app?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_roleId_app?: UserRoleUserIdRoleIdAppCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    app?: EnumAppFilter<"UserRole"> | $Enums.App
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "userId_roleId_app">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    app?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRole"> | string
    userId?: StringWithAggregatesFilter<"UserRole"> | string
    roleId?: StringWithAggregatesFilter<"UserRole"> | string
    app?: EnumAppWithAggregatesFilter<"UserRole"> | $Enums.App
  }

  export type UserAppProfileWhereInput = {
    AND?: UserAppProfileWhereInput | UserAppProfileWhereInput[]
    OR?: UserAppProfileWhereInput[]
    NOT?: UserAppProfileWhereInput | UserAppProfileWhereInput[]
    id?: StringFilter<"UserAppProfile"> | string
    userId?: StringFilter<"UserAppProfile"> | string
    app?: EnumAppFilter<"UserAppProfile"> | $Enums.App
    type?: EnumUserTypeFilter<"UserAppProfile"> | $Enums.UserType
    createdAt?: DateTimeFilter<"UserAppProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserAppProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAppProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    app?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAppProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_app?: UserAppProfileUserIdAppCompoundUniqueInput
    AND?: UserAppProfileWhereInput | UserAppProfileWhereInput[]
    OR?: UserAppProfileWhereInput[]
    NOT?: UserAppProfileWhereInput | UserAppProfileWhereInput[]
    userId?: StringFilter<"UserAppProfile"> | string
    app?: EnumAppFilter<"UserAppProfile"> | $Enums.App
    type?: EnumUserTypeFilter<"UserAppProfile"> | $Enums.UserType
    createdAt?: DateTimeFilter<"UserAppProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserAppProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_app">

  export type UserAppProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    app?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAppProfileCountOrderByAggregateInput
    _max?: UserAppProfileMaxOrderByAggregateInput
    _min?: UserAppProfileMinOrderByAggregateInput
  }

  export type UserAppProfileScalarWhereWithAggregatesInput = {
    AND?: UserAppProfileScalarWhereWithAggregatesInput | UserAppProfileScalarWhereWithAggregatesInput[]
    OR?: UserAppProfileScalarWhereWithAggregatesInput[]
    NOT?: UserAppProfileScalarWhereWithAggregatesInput | UserAppProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAppProfile"> | string
    userId?: StringWithAggregatesFilter<"UserAppProfile"> | string
    app?: EnumAppWithAggregatesFilter<"UserAppProfile"> | $Enums.App
    type?: EnumUserTypeWithAggregatesFilter<"UserAppProfile"> | $Enums.UserType
    createdAt?: DateTimeWithAggregatesFilter<"UserAppProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAppProfile"> | Date | string
  }

  export type OrisaWhereInput = {
    AND?: OrisaWhereInput | OrisaWhereInput[]
    OR?: OrisaWhereInput[]
    NOT?: OrisaWhereInput | OrisaWhereInput[]
    id?: IntFilter<"Orisa"> | number
    name?: StringFilter<"Orisa"> | string
    userId?: StringNullableFilter<"Orisa"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    festivals?: FestivalListRelationFilter
  }

  export type OrisaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    festivals?: FestivalOrderByRelationAggregateInput
  }

  export type OrisaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: OrisaWhereInput | OrisaWhereInput[]
    OR?: OrisaWhereInput[]
    NOT?: OrisaWhereInput | OrisaWhereInput[]
    userId?: StringNullableFilter<"Orisa"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    festivals?: FestivalListRelationFilter
  }, "id" | "name">

  export type OrisaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: OrisaCountOrderByAggregateInput
    _avg?: OrisaAvgOrderByAggregateInput
    _max?: OrisaMaxOrderByAggregateInput
    _min?: OrisaMinOrderByAggregateInput
    _sum?: OrisaSumOrderByAggregateInput
  }

  export type OrisaScalarWhereWithAggregatesInput = {
    AND?: OrisaScalarWhereWithAggregatesInput | OrisaScalarWhereWithAggregatesInput[]
    OR?: OrisaScalarWhereWithAggregatesInput[]
    NOT?: OrisaScalarWhereWithAggregatesInput | OrisaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orisa"> | number
    name?: StringWithAggregatesFilter<"Orisa"> | string
    userId?: StringNullableWithAggregatesFilter<"Orisa"> | string | null
  }

  export type FestivalWhereInput = {
    AND?: FestivalWhereInput | FestivalWhereInput[]
    OR?: FestivalWhereInput[]
    NOT?: FestivalWhereInput | FestivalWhereInput[]
    id?: IntFilter<"Festival"> | number
    title?: StringFilter<"Festival"> | string
    description?: StringFilter<"Festival"> | string
    orisaId?: IntFilter<"Festival"> | number
    userId?: StringFilter<"Festival"> | string
    country?: StringFilter<"Festival"> | string
    eventType?: StringFilter<"Festival"> | string
    location?: StringNullableFilter<"Festival"> | string | null
    eventLink?: StringNullableFilter<"Festival"> | string | null
    timezone?: StringFilter<"Festival"> | string
    startDate?: DateTimeFilter<"Festival"> | Date | string
    startTime?: StringNullableFilter<"Festival"> | string | null
    endDate?: DateTimeFilter<"Festival"> | Date | string
    endTime?: StringNullableFilter<"Festival"> | string | null
    ticketType?: StringFilter<"Festival"> | string
    image?: StringNullableFilter<"Festival"> | string | null
    banner?: StringNullableFilter<"Festival"> | string | null
    createdAt?: DateTimeFilter<"Festival"> | Date | string
    updatedAt?: DateTimeFilter<"Festival"> | Date | string
    orisa?: XOR<OrisaScalarRelationFilter, OrisaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tickets?: TicketListRelationFilter
  }

  export type FestivalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    orisaId?: SortOrder
    userId?: SortOrder
    country?: SortOrder
    eventType?: SortOrder
    location?: SortOrderInput | SortOrder
    eventLink?: SortOrderInput | SortOrder
    timezone?: SortOrder
    startDate?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endDate?: SortOrder
    endTime?: SortOrderInput | SortOrder
    ticketType?: SortOrder
    image?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orisa?: OrisaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type FestivalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FestivalWhereInput | FestivalWhereInput[]
    OR?: FestivalWhereInput[]
    NOT?: FestivalWhereInput | FestivalWhereInput[]
    title?: StringFilter<"Festival"> | string
    description?: StringFilter<"Festival"> | string
    orisaId?: IntFilter<"Festival"> | number
    userId?: StringFilter<"Festival"> | string
    country?: StringFilter<"Festival"> | string
    eventType?: StringFilter<"Festival"> | string
    location?: StringNullableFilter<"Festival"> | string | null
    eventLink?: StringNullableFilter<"Festival"> | string | null
    timezone?: StringFilter<"Festival"> | string
    startDate?: DateTimeFilter<"Festival"> | Date | string
    startTime?: StringNullableFilter<"Festival"> | string | null
    endDate?: DateTimeFilter<"Festival"> | Date | string
    endTime?: StringNullableFilter<"Festival"> | string | null
    ticketType?: StringFilter<"Festival"> | string
    image?: StringNullableFilter<"Festival"> | string | null
    banner?: StringNullableFilter<"Festival"> | string | null
    createdAt?: DateTimeFilter<"Festival"> | Date | string
    updatedAt?: DateTimeFilter<"Festival"> | Date | string
    orisa?: XOR<OrisaScalarRelationFilter, OrisaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tickets?: TicketListRelationFilter
  }, "id">

  export type FestivalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    orisaId?: SortOrder
    userId?: SortOrder
    country?: SortOrder
    eventType?: SortOrder
    location?: SortOrderInput | SortOrder
    eventLink?: SortOrderInput | SortOrder
    timezone?: SortOrder
    startDate?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endDate?: SortOrder
    endTime?: SortOrderInput | SortOrder
    ticketType?: SortOrder
    image?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FestivalCountOrderByAggregateInput
    _avg?: FestivalAvgOrderByAggregateInput
    _max?: FestivalMaxOrderByAggregateInput
    _min?: FestivalMinOrderByAggregateInput
    _sum?: FestivalSumOrderByAggregateInput
  }

  export type FestivalScalarWhereWithAggregatesInput = {
    AND?: FestivalScalarWhereWithAggregatesInput | FestivalScalarWhereWithAggregatesInput[]
    OR?: FestivalScalarWhereWithAggregatesInput[]
    NOT?: FestivalScalarWhereWithAggregatesInput | FestivalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Festival"> | number
    title?: StringWithAggregatesFilter<"Festival"> | string
    description?: StringWithAggregatesFilter<"Festival"> | string
    orisaId?: IntWithAggregatesFilter<"Festival"> | number
    userId?: StringWithAggregatesFilter<"Festival"> | string
    country?: StringWithAggregatesFilter<"Festival"> | string
    eventType?: StringWithAggregatesFilter<"Festival"> | string
    location?: StringNullableWithAggregatesFilter<"Festival"> | string | null
    eventLink?: StringNullableWithAggregatesFilter<"Festival"> | string | null
    timezone?: StringWithAggregatesFilter<"Festival"> | string
    startDate?: DateTimeWithAggregatesFilter<"Festival"> | Date | string
    startTime?: StringNullableWithAggregatesFilter<"Festival"> | string | null
    endDate?: DateTimeWithAggregatesFilter<"Festival"> | Date | string
    endTime?: StringNullableWithAggregatesFilter<"Festival"> | string | null
    ticketType?: StringWithAggregatesFilter<"Festival"> | string
    image?: StringNullableWithAggregatesFilter<"Festival"> | string | null
    banner?: StringNullableWithAggregatesFilter<"Festival"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Festival"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Festival"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    festivalId?: IntFilter<"Ticket"> | number
    creatorId?: StringFilter<"Ticket"> | string
    name?: StringFilter<"Ticket"> | string
    type?: StringFilter<"Ticket"> | string
    isFree?: BoolFilter<"Ticket"> | boolean
    price?: FloatNullableFilter<"Ticket"> | number | null
    quantity?: IntFilter<"Ticket"> | number
    maxPerGroup?: IntNullableFilter<"Ticket"> | number | null
    sold?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    creatorId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isFree?: SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrder
    maxPerGroup?: SortOrderInput | SortOrder
    sold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festival?: FestivalOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    festivalId?: IntFilter<"Ticket"> | number
    creatorId?: StringFilter<"Ticket"> | string
    name?: StringFilter<"Ticket"> | string
    type?: StringFilter<"Ticket"> | string
    isFree?: BoolFilter<"Ticket"> | boolean
    price?: FloatNullableFilter<"Ticket"> | number | null
    quantity?: IntFilter<"Ticket"> | number
    maxPerGroup?: IntNullableFilter<"Ticket"> | number | null
    sold?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    creatorId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isFree?: SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrder
    maxPerGroup?: SortOrderInput | SortOrder
    sold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    festivalId?: IntWithAggregatesFilter<"Ticket"> | number
    creatorId?: StringWithAggregatesFilter<"Ticket"> | string
    name?: StringWithAggregatesFilter<"Ticket"> | string
    type?: StringWithAggregatesFilter<"Ticket"> | string
    isFree?: BoolWithAggregatesFilter<"Ticket"> | boolean
    price?: FloatNullableWithAggregatesFilter<"Ticket"> | number | null
    quantity?: IntWithAggregatesFilter<"Ticket"> | number
    maxPerGroup?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    sold?: IntWithAggregatesFilter<"Ticket"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    userAppProfiles?: UserAppProfileCreateNestedManyWithoutUserInput
    festivals?: FestivalCreateNestedManyWithoutUserInput
    orisas?: OrisaCreateNestedManyWithoutUserInput
    tickets?: TicketCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    userAppProfiles?: UserAppProfileUncheckedCreateNestedManyWithoutUserInput
    festivals?: FestivalUncheckedCreateNestedManyWithoutUserInput
    orisas?: OrisaUncheckedCreateNestedManyWithoutUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    userAppProfiles?: UserAppProfileUpdateManyWithoutUserNestedInput
    festivals?: FestivalUpdateManyWithoutUserNestedInput
    orisas?: OrisaUpdateManyWithoutUserNestedInput
    tickets?: TicketUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    userAppProfiles?: UserAppProfileUncheckedUpdateManyWithoutUserNestedInput
    festivals?: FestivalUncheckedUpdateManyWithoutUserNestedInput
    orisas?: OrisaUncheckedUpdateManyWithoutUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: $Enums.RoleName
    users?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: $Enums.RoleName
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    users?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: $Enums.RoleName
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type UserRoleCreateInput = {
    id?: string
    app: $Enums.App
    user: UserCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: string
    userId: string
    roleId: string
    app: $Enums.App
  }

  export type UserRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
  }

  export type UserRoleCreateManyInput = {
    id?: string
    userId: string
    roleId: string
    app: $Enums.App
  }

  export type UserRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
  }

  export type UserAppProfileCreateInput = {
    id?: string
    app: $Enums.App
    type: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserAppProfilesInput
  }

  export type UserAppProfileUncheckedCreateInput = {
    id?: string
    userId: string
    app: $Enums.App
    type: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAppProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserAppProfilesNestedInput
  }

  export type UserAppProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAppProfileCreateManyInput = {
    id?: string
    userId: string
    app: $Enums.App
    type: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAppProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAppProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrisaCreateInput = {
    name: string
    user?: UserCreateNestedOneWithoutOrisasInput
    festivals?: FestivalCreateNestedManyWithoutOrisaInput
  }

  export type OrisaUncheckedCreateInput = {
    id?: number
    name: string
    userId?: string | null
    festivals?: FestivalUncheckedCreateNestedManyWithoutOrisaInput
  }

  export type OrisaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutOrisasNestedInput
    festivals?: FestivalUpdateManyWithoutOrisaNestedInput
  }

  export type OrisaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    festivals?: FestivalUncheckedUpdateManyWithoutOrisaNestedInput
  }

  export type OrisaCreateManyInput = {
    id?: number
    name: string
    userId?: string | null
  }

  export type OrisaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrisaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FestivalCreateInput = {
    title: string
    description: string
    country: string
    eventType: string
    location?: string | null
    eventLink?: string | null
    timezone: string
    startDate: Date | string
    startTime?: string | null
    endDate: Date | string
    endTime?: string | null
    ticketType: string
    image?: string | null
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orisa: OrisaCreateNestedOneWithoutFestivalsInput
    user: UserCreateNestedOneWithoutFestivalsInput
    tickets?: TicketCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    orisaId: number
    userId: string
    country: string
    eventType: string
    location?: string | null
    eventLink?: string | null
    timezone: string
    startDate: Date | string
    startTime?: string | null
    endDate: Date | string
    endTime?: string | null
    ticketType: string
    image?: string | null
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orisa?: OrisaUpdateOneRequiredWithoutFestivalsNestedInput
    user?: UserUpdateOneRequiredWithoutFestivalsNestedInput
    tickets?: TicketUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    orisaId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalCreateManyInput = {
    id?: number
    title: string
    description: string
    orisaId: number
    userId: string
    country: string
    eventType: string
    location?: string | null
    eventLink?: string | null
    timezone: string
    startDate: Date | string
    startTime?: string | null
    endDate: Date | string
    endTime?: string | null
    ticketType: string
    image?: string | null
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    orisaId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    name: string
    type: string
    isFree: boolean
    price?: number | null
    quantity: number
    maxPerGroup?: number | null
    sold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutTicketsInput
    creator: UserCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    festivalId: number
    creatorId: string
    name: string
    type: string
    isFree: boolean
    price?: number | null
    quantity: number
    maxPerGroup?: number | null
    sold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    maxPerGroup?: NullableIntFieldUpdateOperationsInput | number | null
    sold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutTicketsNestedInput
    creator?: UserUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    festivalId?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    maxPerGroup?: NullableIntFieldUpdateOperationsInput | number | null
    sold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyInput = {
    id?: number
    festivalId: number
    creatorId: string
    name: string
    type: string
    isFree: boolean
    price?: number | null
    quantity: number
    maxPerGroup?: number | null
    sold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    maxPerGroup?: NullableIntFieldUpdateOperationsInput | number | null
    sold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    festivalId?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    maxPerGroup?: NullableIntFieldUpdateOperationsInput | number | null
    sold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type UserAppProfileListRelationFilter = {
    every?: UserAppProfileWhereInput
    some?: UserAppProfileWhereInput
    none?: UserAppProfileWhereInput
  }

  export type FestivalListRelationFilter = {
    every?: FestivalWhereInput
    some?: FestivalWhereInput
    none?: FestivalWhereInput
  }

  export type OrisaListRelationFilter = {
    every?: OrisaWhereInput
    some?: OrisaWhereInput
    none?: OrisaWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAppProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FestivalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrisaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type EnumAppFilter<$PrismaModel = never> = {
    equals?: $Enums.App | EnumAppFieldRefInput<$PrismaModel>
    in?: $Enums.App[] | ListEnumAppFieldRefInput<$PrismaModel>
    notIn?: $Enums.App[] | ListEnumAppFieldRefInput<$PrismaModel>
    not?: NestedEnumAppFilter<$PrismaModel> | $Enums.App
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleUserIdRoleIdAppCompoundUniqueInput = {
    userId: string
    roleId: string
    app: $Enums.App
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    app?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    app?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    app?: SortOrder
  }

  export type EnumAppWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.App | EnumAppFieldRefInput<$PrismaModel>
    in?: $Enums.App[] | ListEnumAppFieldRefInput<$PrismaModel>
    notIn?: $Enums.App[] | ListEnumAppFieldRefInput<$PrismaModel>
    not?: NestedEnumAppWithAggregatesFilter<$PrismaModel> | $Enums.App
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppFilter<$PrismaModel>
    _max?: NestedEnumAppFilter<$PrismaModel>
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type UserAppProfileUserIdAppCompoundUniqueInput = {
    userId: string
    app: $Enums.App
  }

  export type UserAppProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    app?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAppProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    app?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAppProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    app?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OrisaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type OrisaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrisaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type OrisaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type OrisaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type OrisaScalarRelationFilter = {
    is?: OrisaWhereInput
    isNot?: OrisaWhereInput
  }

  export type FestivalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    orisaId?: SortOrder
    userId?: SortOrder
    country?: SortOrder
    eventType?: SortOrder
    location?: SortOrder
    eventLink?: SortOrder
    timezone?: SortOrder
    startDate?: SortOrder
    startTime?: SortOrder
    endDate?: SortOrder
    endTime?: SortOrder
    ticketType?: SortOrder
    image?: SortOrder
    banner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalAvgOrderByAggregateInput = {
    id?: SortOrder
    orisaId?: SortOrder
  }

  export type FestivalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    orisaId?: SortOrder
    userId?: SortOrder
    country?: SortOrder
    eventType?: SortOrder
    location?: SortOrder
    eventLink?: SortOrder
    timezone?: SortOrder
    startDate?: SortOrder
    startTime?: SortOrder
    endDate?: SortOrder
    endTime?: SortOrder
    ticketType?: SortOrder
    image?: SortOrder
    banner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    orisaId?: SortOrder
    userId?: SortOrder
    country?: SortOrder
    eventType?: SortOrder
    location?: SortOrder
    eventLink?: SortOrder
    timezone?: SortOrder
    startDate?: SortOrder
    startTime?: SortOrder
    endDate?: SortOrder
    endTime?: SortOrder
    ticketType?: SortOrder
    image?: SortOrder
    banner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalSumOrderByAggregateInput = {
    id?: SortOrder
    orisaId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type FestivalScalarRelationFilter = {
    is?: FestivalWhereInput
    isNot?: FestivalWhereInput
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    creatorId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isFree?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    maxPerGroup?: SortOrder
    sold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    maxPerGroup?: SortOrder
    sold?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    creatorId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isFree?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    maxPerGroup?: SortOrder
    sold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    creatorId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isFree?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    maxPerGroup?: SortOrder
    sold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    maxPerGroup?: SortOrder
    sold?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserAppProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAppProfileCreateWithoutUserInput, UserAppProfileUncheckedCreateWithoutUserInput> | UserAppProfileCreateWithoutUserInput[] | UserAppProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAppProfileCreateOrConnectWithoutUserInput | UserAppProfileCreateOrConnectWithoutUserInput[]
    createMany?: UserAppProfileCreateManyUserInputEnvelope
    connect?: UserAppProfileWhereUniqueInput | UserAppProfileWhereUniqueInput[]
  }

  export type FestivalCreateNestedManyWithoutUserInput = {
    create?: XOR<FestivalCreateWithoutUserInput, FestivalUncheckedCreateWithoutUserInput> | FestivalCreateWithoutUserInput[] | FestivalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutUserInput | FestivalCreateOrConnectWithoutUserInput[]
    createMany?: FestivalCreateManyUserInputEnvelope
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
  }

  export type OrisaCreateNestedManyWithoutUserInput = {
    create?: XOR<OrisaCreateWithoutUserInput, OrisaUncheckedCreateWithoutUserInput> | OrisaCreateWithoutUserInput[] | OrisaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrisaCreateOrConnectWithoutUserInput | OrisaCreateOrConnectWithoutUserInput[]
    createMany?: OrisaCreateManyUserInputEnvelope
    connect?: OrisaWhereUniqueInput | OrisaWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TicketCreateWithoutCreatorInput, TicketUncheckedCreateWithoutCreatorInput> | TicketCreateWithoutCreatorInput[] | TicketUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatorInput | TicketCreateOrConnectWithoutCreatorInput[]
    createMany?: TicketCreateManyCreatorInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserAppProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAppProfileCreateWithoutUserInput, UserAppProfileUncheckedCreateWithoutUserInput> | UserAppProfileCreateWithoutUserInput[] | UserAppProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAppProfileCreateOrConnectWithoutUserInput | UserAppProfileCreateOrConnectWithoutUserInput[]
    createMany?: UserAppProfileCreateManyUserInputEnvelope
    connect?: UserAppProfileWhereUniqueInput | UserAppProfileWhereUniqueInput[]
  }

  export type FestivalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FestivalCreateWithoutUserInput, FestivalUncheckedCreateWithoutUserInput> | FestivalCreateWithoutUserInput[] | FestivalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutUserInput | FestivalCreateOrConnectWithoutUserInput[]
    createMany?: FestivalCreateManyUserInputEnvelope
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
  }

  export type OrisaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrisaCreateWithoutUserInput, OrisaUncheckedCreateWithoutUserInput> | OrisaCreateWithoutUserInput[] | OrisaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrisaCreateOrConnectWithoutUserInput | OrisaCreateOrConnectWithoutUserInput[]
    createMany?: OrisaCreateManyUserInputEnvelope
    connect?: OrisaWhereUniqueInput | OrisaWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TicketCreateWithoutCreatorInput, TicketUncheckedCreateWithoutCreatorInput> | TicketCreateWithoutCreatorInput[] | TicketUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatorInput | TicketCreateOrConnectWithoutCreatorInput[]
    createMany?: TicketCreateManyCreatorInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserAppProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAppProfileCreateWithoutUserInput, UserAppProfileUncheckedCreateWithoutUserInput> | UserAppProfileCreateWithoutUserInput[] | UserAppProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAppProfileCreateOrConnectWithoutUserInput | UserAppProfileCreateOrConnectWithoutUserInput[]
    upsert?: UserAppProfileUpsertWithWhereUniqueWithoutUserInput | UserAppProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAppProfileCreateManyUserInputEnvelope
    set?: UserAppProfileWhereUniqueInput | UserAppProfileWhereUniqueInput[]
    disconnect?: UserAppProfileWhereUniqueInput | UserAppProfileWhereUniqueInput[]
    delete?: UserAppProfileWhereUniqueInput | UserAppProfileWhereUniqueInput[]
    connect?: UserAppProfileWhereUniqueInput | UserAppProfileWhereUniqueInput[]
    update?: UserAppProfileUpdateWithWhereUniqueWithoutUserInput | UserAppProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAppProfileUpdateManyWithWhereWithoutUserInput | UserAppProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAppProfileScalarWhereInput | UserAppProfileScalarWhereInput[]
  }

  export type FestivalUpdateManyWithoutUserNestedInput = {
    create?: XOR<FestivalCreateWithoutUserInput, FestivalUncheckedCreateWithoutUserInput> | FestivalCreateWithoutUserInput[] | FestivalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutUserInput | FestivalCreateOrConnectWithoutUserInput[]
    upsert?: FestivalUpsertWithWhereUniqueWithoutUserInput | FestivalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FestivalCreateManyUserInputEnvelope
    set?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    disconnect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    delete?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    update?: FestivalUpdateWithWhereUniqueWithoutUserInput | FestivalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FestivalUpdateManyWithWhereWithoutUserInput | FestivalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FestivalScalarWhereInput | FestivalScalarWhereInput[]
  }

  export type OrisaUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrisaCreateWithoutUserInput, OrisaUncheckedCreateWithoutUserInput> | OrisaCreateWithoutUserInput[] | OrisaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrisaCreateOrConnectWithoutUserInput | OrisaCreateOrConnectWithoutUserInput[]
    upsert?: OrisaUpsertWithWhereUniqueWithoutUserInput | OrisaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrisaCreateManyUserInputEnvelope
    set?: OrisaWhereUniqueInput | OrisaWhereUniqueInput[]
    disconnect?: OrisaWhereUniqueInput | OrisaWhereUniqueInput[]
    delete?: OrisaWhereUniqueInput | OrisaWhereUniqueInput[]
    connect?: OrisaWhereUniqueInput | OrisaWhereUniqueInput[]
    update?: OrisaUpdateWithWhereUniqueWithoutUserInput | OrisaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrisaUpdateManyWithWhereWithoutUserInput | OrisaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrisaScalarWhereInput | OrisaScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TicketCreateWithoutCreatorInput, TicketUncheckedCreateWithoutCreatorInput> | TicketCreateWithoutCreatorInput[] | TicketUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatorInput | TicketCreateOrConnectWithoutCreatorInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreatorInput | TicketUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TicketCreateManyCreatorInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreatorInput | TicketUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreatorInput | TicketUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserAppProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAppProfileCreateWithoutUserInput, UserAppProfileUncheckedCreateWithoutUserInput> | UserAppProfileCreateWithoutUserInput[] | UserAppProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAppProfileCreateOrConnectWithoutUserInput | UserAppProfileCreateOrConnectWithoutUserInput[]
    upsert?: UserAppProfileUpsertWithWhereUniqueWithoutUserInput | UserAppProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAppProfileCreateManyUserInputEnvelope
    set?: UserAppProfileWhereUniqueInput | UserAppProfileWhereUniqueInput[]
    disconnect?: UserAppProfileWhereUniqueInput | UserAppProfileWhereUniqueInput[]
    delete?: UserAppProfileWhereUniqueInput | UserAppProfileWhereUniqueInput[]
    connect?: UserAppProfileWhereUniqueInput | UserAppProfileWhereUniqueInput[]
    update?: UserAppProfileUpdateWithWhereUniqueWithoutUserInput | UserAppProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAppProfileUpdateManyWithWhereWithoutUserInput | UserAppProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAppProfileScalarWhereInput | UserAppProfileScalarWhereInput[]
  }

  export type FestivalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FestivalCreateWithoutUserInput, FestivalUncheckedCreateWithoutUserInput> | FestivalCreateWithoutUserInput[] | FestivalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutUserInput | FestivalCreateOrConnectWithoutUserInput[]
    upsert?: FestivalUpsertWithWhereUniqueWithoutUserInput | FestivalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FestivalCreateManyUserInputEnvelope
    set?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    disconnect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    delete?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    update?: FestivalUpdateWithWhereUniqueWithoutUserInput | FestivalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FestivalUpdateManyWithWhereWithoutUserInput | FestivalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FestivalScalarWhereInput | FestivalScalarWhereInput[]
  }

  export type OrisaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrisaCreateWithoutUserInput, OrisaUncheckedCreateWithoutUserInput> | OrisaCreateWithoutUserInput[] | OrisaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrisaCreateOrConnectWithoutUserInput | OrisaCreateOrConnectWithoutUserInput[]
    upsert?: OrisaUpsertWithWhereUniqueWithoutUserInput | OrisaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrisaCreateManyUserInputEnvelope
    set?: OrisaWhereUniqueInput | OrisaWhereUniqueInput[]
    disconnect?: OrisaWhereUniqueInput | OrisaWhereUniqueInput[]
    delete?: OrisaWhereUniqueInput | OrisaWhereUniqueInput[]
    connect?: OrisaWhereUniqueInput | OrisaWhereUniqueInput[]
    update?: OrisaUpdateWithWhereUniqueWithoutUserInput | OrisaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrisaUpdateManyWithWhereWithoutUserInput | OrisaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrisaScalarWhereInput | OrisaScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TicketCreateWithoutCreatorInput, TicketUncheckedCreateWithoutCreatorInput> | TicketCreateWithoutCreatorInput[] | TicketUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatorInput | TicketCreateOrConnectWithoutCreatorInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreatorInput | TicketUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TicketCreateManyCreatorInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreatorInput | TicketUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreatorInput | TicketUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type EnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type EnumAppFieldUpdateOperationsInput = {
    set?: $Enums.App
  }

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    upsert?: UserUpsertWithoutRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRolesInput, UserUpdateWithoutRolesInput>, UserUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutUserAppProfilesInput = {
    create?: XOR<UserCreateWithoutUserAppProfilesInput, UserUncheckedCreateWithoutUserAppProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAppProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type UserUpdateOneRequiredWithoutUserAppProfilesNestedInput = {
    create?: XOR<UserCreateWithoutUserAppProfilesInput, UserUncheckedCreateWithoutUserAppProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAppProfilesInput
    upsert?: UserUpsertWithoutUserAppProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAppProfilesInput, UserUpdateWithoutUserAppProfilesInput>, UserUncheckedUpdateWithoutUserAppProfilesInput>
  }

  export type UserCreateNestedOneWithoutOrisasInput = {
    create?: XOR<UserCreateWithoutOrisasInput, UserUncheckedCreateWithoutOrisasInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrisasInput
    connect?: UserWhereUniqueInput
  }

  export type FestivalCreateNestedManyWithoutOrisaInput = {
    create?: XOR<FestivalCreateWithoutOrisaInput, FestivalUncheckedCreateWithoutOrisaInput> | FestivalCreateWithoutOrisaInput[] | FestivalUncheckedCreateWithoutOrisaInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutOrisaInput | FestivalCreateOrConnectWithoutOrisaInput[]
    createMany?: FestivalCreateManyOrisaInputEnvelope
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
  }

  export type FestivalUncheckedCreateNestedManyWithoutOrisaInput = {
    create?: XOR<FestivalCreateWithoutOrisaInput, FestivalUncheckedCreateWithoutOrisaInput> | FestivalCreateWithoutOrisaInput[] | FestivalUncheckedCreateWithoutOrisaInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutOrisaInput | FestivalCreateOrConnectWithoutOrisaInput[]
    createMany?: FestivalCreateManyOrisaInputEnvelope
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutOrisasNestedInput = {
    create?: XOR<UserCreateWithoutOrisasInput, UserUncheckedCreateWithoutOrisasInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrisasInput
    upsert?: UserUpsertWithoutOrisasInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrisasInput, UserUpdateWithoutOrisasInput>, UserUncheckedUpdateWithoutOrisasInput>
  }

  export type FestivalUpdateManyWithoutOrisaNestedInput = {
    create?: XOR<FestivalCreateWithoutOrisaInput, FestivalUncheckedCreateWithoutOrisaInput> | FestivalCreateWithoutOrisaInput[] | FestivalUncheckedCreateWithoutOrisaInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutOrisaInput | FestivalCreateOrConnectWithoutOrisaInput[]
    upsert?: FestivalUpsertWithWhereUniqueWithoutOrisaInput | FestivalUpsertWithWhereUniqueWithoutOrisaInput[]
    createMany?: FestivalCreateManyOrisaInputEnvelope
    set?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    disconnect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    delete?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    update?: FestivalUpdateWithWhereUniqueWithoutOrisaInput | FestivalUpdateWithWhereUniqueWithoutOrisaInput[]
    updateMany?: FestivalUpdateManyWithWhereWithoutOrisaInput | FestivalUpdateManyWithWhereWithoutOrisaInput[]
    deleteMany?: FestivalScalarWhereInput | FestivalScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FestivalUncheckedUpdateManyWithoutOrisaNestedInput = {
    create?: XOR<FestivalCreateWithoutOrisaInput, FestivalUncheckedCreateWithoutOrisaInput> | FestivalCreateWithoutOrisaInput[] | FestivalUncheckedCreateWithoutOrisaInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutOrisaInput | FestivalCreateOrConnectWithoutOrisaInput[]
    upsert?: FestivalUpsertWithWhereUniqueWithoutOrisaInput | FestivalUpsertWithWhereUniqueWithoutOrisaInput[]
    createMany?: FestivalCreateManyOrisaInputEnvelope
    set?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    disconnect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    delete?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    update?: FestivalUpdateWithWhereUniqueWithoutOrisaInput | FestivalUpdateWithWhereUniqueWithoutOrisaInput[]
    updateMany?: FestivalUpdateManyWithWhereWithoutOrisaInput | FestivalUpdateManyWithWhereWithoutOrisaInput[]
    deleteMany?: FestivalScalarWhereInput | FestivalScalarWhereInput[]
  }

  export type OrisaCreateNestedOneWithoutFestivalsInput = {
    create?: XOR<OrisaCreateWithoutFestivalsInput, OrisaUncheckedCreateWithoutFestivalsInput>
    connectOrCreate?: OrisaCreateOrConnectWithoutFestivalsInput
    connect?: OrisaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFestivalsInput = {
    create?: XOR<UserCreateWithoutFestivalsInput, UserUncheckedCreateWithoutFestivalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFestivalsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutFestivalInput = {
    create?: XOR<TicketCreateWithoutFestivalInput, TicketUncheckedCreateWithoutFestivalInput> | TicketCreateWithoutFestivalInput[] | TicketUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutFestivalInput | TicketCreateOrConnectWithoutFestivalInput[]
    createMany?: TicketCreateManyFestivalInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutFestivalInput = {
    create?: XOR<TicketCreateWithoutFestivalInput, TicketUncheckedCreateWithoutFestivalInput> | TicketCreateWithoutFestivalInput[] | TicketUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutFestivalInput | TicketCreateOrConnectWithoutFestivalInput[]
    createMany?: TicketCreateManyFestivalInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrisaUpdateOneRequiredWithoutFestivalsNestedInput = {
    create?: XOR<OrisaCreateWithoutFestivalsInput, OrisaUncheckedCreateWithoutFestivalsInput>
    connectOrCreate?: OrisaCreateOrConnectWithoutFestivalsInput
    upsert?: OrisaUpsertWithoutFestivalsInput
    connect?: OrisaWhereUniqueInput
    update?: XOR<XOR<OrisaUpdateToOneWithWhereWithoutFestivalsInput, OrisaUpdateWithoutFestivalsInput>, OrisaUncheckedUpdateWithoutFestivalsInput>
  }

  export type UserUpdateOneRequiredWithoutFestivalsNestedInput = {
    create?: XOR<UserCreateWithoutFestivalsInput, UserUncheckedCreateWithoutFestivalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFestivalsInput
    upsert?: UserUpsertWithoutFestivalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFestivalsInput, UserUpdateWithoutFestivalsInput>, UserUncheckedUpdateWithoutFestivalsInput>
  }

  export type TicketUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<TicketCreateWithoutFestivalInput, TicketUncheckedCreateWithoutFestivalInput> | TicketCreateWithoutFestivalInput[] | TicketUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutFestivalInput | TicketCreateOrConnectWithoutFestivalInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutFestivalInput | TicketUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: TicketCreateManyFestivalInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutFestivalInput | TicketUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutFestivalInput | TicketUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<TicketCreateWithoutFestivalInput, TicketUncheckedCreateWithoutFestivalInput> | TicketCreateWithoutFestivalInput[] | TicketUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutFestivalInput | TicketCreateOrConnectWithoutFestivalInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutFestivalInput | TicketUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: TicketCreateManyFestivalInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutFestivalInput | TicketUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutFestivalInput | TicketUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type FestivalCreateNestedOneWithoutTicketsInput = {
    create?: XOR<FestivalCreateWithoutTicketsInput, FestivalUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutTicketsInput
    connect?: FestivalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FestivalUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<FestivalCreateWithoutTicketsInput, FestivalUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutTicketsInput
    upsert?: FestivalUpsertWithoutTicketsInput
    connect?: FestivalWhereUniqueInput
    update?: XOR<XOR<FestivalUpdateToOneWithWhereWithoutTicketsInput, FestivalUpdateWithoutTicketsInput>, FestivalUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type NestedEnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type NestedEnumAppFilter<$PrismaModel = never> = {
    equals?: $Enums.App | EnumAppFieldRefInput<$PrismaModel>
    in?: $Enums.App[] | ListEnumAppFieldRefInput<$PrismaModel>
    notIn?: $Enums.App[] | ListEnumAppFieldRefInput<$PrismaModel>
    not?: NestedEnumAppFilter<$PrismaModel> | $Enums.App
  }

  export type NestedEnumAppWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.App | EnumAppFieldRefInput<$PrismaModel>
    in?: $Enums.App[] | ListEnumAppFieldRefInput<$PrismaModel>
    notIn?: $Enums.App[] | ListEnumAppFieldRefInput<$PrismaModel>
    not?: NestedEnumAppWithAggregatesFilter<$PrismaModel> | $Enums.App
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppFilter<$PrismaModel>
    _max?: NestedEnumAppFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type UserRoleCreateWithoutUserInput = {
    id?: string
    app: $Enums.App
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    id?: string
    roleId: string
    app: $Enums.App
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAppProfileCreateWithoutUserInput = {
    id?: string
    app: $Enums.App
    type: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAppProfileUncheckedCreateWithoutUserInput = {
    id?: string
    app: $Enums.App
    type: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAppProfileCreateOrConnectWithoutUserInput = {
    where: UserAppProfileWhereUniqueInput
    create: XOR<UserAppProfileCreateWithoutUserInput, UserAppProfileUncheckedCreateWithoutUserInput>
  }

  export type UserAppProfileCreateManyUserInputEnvelope = {
    data: UserAppProfileCreateManyUserInput | UserAppProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FestivalCreateWithoutUserInput = {
    title: string
    description: string
    country: string
    eventType: string
    location?: string | null
    eventLink?: string | null
    timezone: string
    startDate: Date | string
    startTime?: string | null
    endDate: Date | string
    endTime?: string | null
    ticketType: string
    image?: string | null
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orisa: OrisaCreateNestedOneWithoutFestivalsInput
    tickets?: TicketCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    orisaId: number
    country: string
    eventType: string
    location?: string | null
    eventLink?: string | null
    timezone: string
    startDate: Date | string
    startTime?: string | null
    endDate: Date | string
    endTime?: string | null
    ticketType: string
    image?: string | null
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalCreateOrConnectWithoutUserInput = {
    where: FestivalWhereUniqueInput
    create: XOR<FestivalCreateWithoutUserInput, FestivalUncheckedCreateWithoutUserInput>
  }

  export type FestivalCreateManyUserInputEnvelope = {
    data: FestivalCreateManyUserInput | FestivalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrisaCreateWithoutUserInput = {
    name: string
    festivals?: FestivalCreateNestedManyWithoutOrisaInput
  }

  export type OrisaUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    festivals?: FestivalUncheckedCreateNestedManyWithoutOrisaInput
  }

  export type OrisaCreateOrConnectWithoutUserInput = {
    where: OrisaWhereUniqueInput
    create: XOR<OrisaCreateWithoutUserInput, OrisaUncheckedCreateWithoutUserInput>
  }

  export type OrisaCreateManyUserInputEnvelope = {
    data: OrisaCreateManyUserInput | OrisaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutCreatorInput = {
    name: string
    type: string
    isFree: boolean
    price?: number | null
    quantity: number
    maxPerGroup?: number | null
    sold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutCreatorInput = {
    id?: number
    festivalId: number
    name: string
    type: string
    isFree: boolean
    price?: number | null
    quantity: number
    maxPerGroup?: number | null
    sold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutCreatorInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCreatorInput, TicketUncheckedCreateWithoutCreatorInput>
  }

  export type TicketCreateManyCreatorInputEnvelope = {
    data: TicketCreateManyCreatorInput | TicketCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    id?: StringFilter<"UserRole"> | string
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    app?: EnumAppFilter<"UserRole"> | $Enums.App
  }

  export type UserAppProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAppProfileWhereUniqueInput
    update: XOR<UserAppProfileUpdateWithoutUserInput, UserAppProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserAppProfileCreateWithoutUserInput, UserAppProfileUncheckedCreateWithoutUserInput>
  }

  export type UserAppProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAppProfileWhereUniqueInput
    data: XOR<UserAppProfileUpdateWithoutUserInput, UserAppProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserAppProfileUpdateManyWithWhereWithoutUserInput = {
    where: UserAppProfileScalarWhereInput
    data: XOR<UserAppProfileUpdateManyMutationInput, UserAppProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAppProfileScalarWhereInput = {
    AND?: UserAppProfileScalarWhereInput | UserAppProfileScalarWhereInput[]
    OR?: UserAppProfileScalarWhereInput[]
    NOT?: UserAppProfileScalarWhereInput | UserAppProfileScalarWhereInput[]
    id?: StringFilter<"UserAppProfile"> | string
    userId?: StringFilter<"UserAppProfile"> | string
    app?: EnumAppFilter<"UserAppProfile"> | $Enums.App
    type?: EnumUserTypeFilter<"UserAppProfile"> | $Enums.UserType
    createdAt?: DateTimeFilter<"UserAppProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserAppProfile"> | Date | string
  }

  export type FestivalUpsertWithWhereUniqueWithoutUserInput = {
    where: FestivalWhereUniqueInput
    update: XOR<FestivalUpdateWithoutUserInput, FestivalUncheckedUpdateWithoutUserInput>
    create: XOR<FestivalCreateWithoutUserInput, FestivalUncheckedCreateWithoutUserInput>
  }

  export type FestivalUpdateWithWhereUniqueWithoutUserInput = {
    where: FestivalWhereUniqueInput
    data: XOR<FestivalUpdateWithoutUserInput, FestivalUncheckedUpdateWithoutUserInput>
  }

  export type FestivalUpdateManyWithWhereWithoutUserInput = {
    where: FestivalScalarWhereInput
    data: XOR<FestivalUpdateManyMutationInput, FestivalUncheckedUpdateManyWithoutUserInput>
  }

  export type FestivalScalarWhereInput = {
    AND?: FestivalScalarWhereInput | FestivalScalarWhereInput[]
    OR?: FestivalScalarWhereInput[]
    NOT?: FestivalScalarWhereInput | FestivalScalarWhereInput[]
    id?: IntFilter<"Festival"> | number
    title?: StringFilter<"Festival"> | string
    description?: StringFilter<"Festival"> | string
    orisaId?: IntFilter<"Festival"> | number
    userId?: StringFilter<"Festival"> | string
    country?: StringFilter<"Festival"> | string
    eventType?: StringFilter<"Festival"> | string
    location?: StringNullableFilter<"Festival"> | string | null
    eventLink?: StringNullableFilter<"Festival"> | string | null
    timezone?: StringFilter<"Festival"> | string
    startDate?: DateTimeFilter<"Festival"> | Date | string
    startTime?: StringNullableFilter<"Festival"> | string | null
    endDate?: DateTimeFilter<"Festival"> | Date | string
    endTime?: StringNullableFilter<"Festival"> | string | null
    ticketType?: StringFilter<"Festival"> | string
    image?: StringNullableFilter<"Festival"> | string | null
    banner?: StringNullableFilter<"Festival"> | string | null
    createdAt?: DateTimeFilter<"Festival"> | Date | string
    updatedAt?: DateTimeFilter<"Festival"> | Date | string
  }

  export type OrisaUpsertWithWhereUniqueWithoutUserInput = {
    where: OrisaWhereUniqueInput
    update: XOR<OrisaUpdateWithoutUserInput, OrisaUncheckedUpdateWithoutUserInput>
    create: XOR<OrisaCreateWithoutUserInput, OrisaUncheckedCreateWithoutUserInput>
  }

  export type OrisaUpdateWithWhereUniqueWithoutUserInput = {
    where: OrisaWhereUniqueInput
    data: XOR<OrisaUpdateWithoutUserInput, OrisaUncheckedUpdateWithoutUserInput>
  }

  export type OrisaUpdateManyWithWhereWithoutUserInput = {
    where: OrisaScalarWhereInput
    data: XOR<OrisaUpdateManyMutationInput, OrisaUncheckedUpdateManyWithoutUserInput>
  }

  export type OrisaScalarWhereInput = {
    AND?: OrisaScalarWhereInput | OrisaScalarWhereInput[]
    OR?: OrisaScalarWhereInput[]
    NOT?: OrisaScalarWhereInput | OrisaScalarWhereInput[]
    id?: IntFilter<"Orisa"> | number
    name?: StringFilter<"Orisa"> | string
    userId?: StringNullableFilter<"Orisa"> | string | null
  }

  export type TicketUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCreatorInput, TicketUncheckedUpdateWithoutCreatorInput>
    create: XOR<TicketCreateWithoutCreatorInput, TicketUncheckedCreateWithoutCreatorInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCreatorInput, TicketUncheckedUpdateWithoutCreatorInput>
  }

  export type TicketUpdateManyWithWhereWithoutCreatorInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    festivalId?: IntFilter<"Ticket"> | number
    creatorId?: StringFilter<"Ticket"> | string
    name?: StringFilter<"Ticket"> | string
    type?: StringFilter<"Ticket"> | string
    isFree?: BoolFilter<"Ticket"> | boolean
    price?: FloatNullableFilter<"Ticket"> | number | null
    quantity?: IntFilter<"Ticket"> | number
    maxPerGroup?: IntNullableFilter<"Ticket"> | number | null
    sold?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type UserRoleCreateWithoutRoleInput = {
    id?: string
    app: $Enums.App
    user: UserCreateNestedOneWithoutRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    id?: string
    userId: string
    app: $Enums.App
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userAppProfiles?: UserAppProfileCreateNestedManyWithoutUserInput
    festivals?: FestivalCreateNestedManyWithoutUserInput
    orisas?: OrisaCreateNestedManyWithoutUserInput
    tickets?: TicketCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userAppProfiles?: UserAppProfileUncheckedCreateNestedManyWithoutUserInput
    festivals?: FestivalUncheckedCreateNestedManyWithoutUserInput
    orisas?: OrisaUncheckedCreateNestedManyWithoutUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: $Enums.RoleName
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: $Enums.RoleName
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutRolesInput = {
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAppProfiles?: UserAppProfileUpdateManyWithoutUserNestedInput
    festivals?: FestivalUpdateManyWithoutUserNestedInput
    orisas?: OrisaUpdateManyWithoutUserNestedInput
    tickets?: TicketUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAppProfiles?: UserAppProfileUncheckedUpdateManyWithoutUserNestedInput
    festivals?: FestivalUncheckedUpdateManyWithoutUserNestedInput
    orisas?: OrisaUncheckedUpdateManyWithoutUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type UserCreateWithoutUserAppProfilesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    festivals?: FestivalCreateNestedManyWithoutUserInput
    orisas?: OrisaCreateNestedManyWithoutUserInput
    tickets?: TicketCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutUserAppProfilesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    festivals?: FestivalUncheckedCreateNestedManyWithoutUserInput
    orisas?: OrisaUncheckedCreateNestedManyWithoutUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutUserAppProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAppProfilesInput, UserUncheckedCreateWithoutUserAppProfilesInput>
  }

  export type UserUpsertWithoutUserAppProfilesInput = {
    update: XOR<UserUpdateWithoutUserAppProfilesInput, UserUncheckedUpdateWithoutUserAppProfilesInput>
    create: XOR<UserCreateWithoutUserAppProfilesInput, UserUncheckedCreateWithoutUserAppProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAppProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAppProfilesInput, UserUncheckedUpdateWithoutUserAppProfilesInput>
  }

  export type UserUpdateWithoutUserAppProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    festivals?: FestivalUpdateManyWithoutUserNestedInput
    orisas?: OrisaUpdateManyWithoutUserNestedInput
    tickets?: TicketUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAppProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    festivals?: FestivalUncheckedUpdateManyWithoutUserNestedInput
    orisas?: OrisaUncheckedUpdateManyWithoutUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateWithoutOrisasInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    userAppProfiles?: UserAppProfileCreateNestedManyWithoutUserInput
    festivals?: FestivalCreateNestedManyWithoutUserInput
    tickets?: TicketCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutOrisasInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    userAppProfiles?: UserAppProfileUncheckedCreateNestedManyWithoutUserInput
    festivals?: FestivalUncheckedCreateNestedManyWithoutUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutOrisasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrisasInput, UserUncheckedCreateWithoutOrisasInput>
  }

  export type FestivalCreateWithoutOrisaInput = {
    title: string
    description: string
    country: string
    eventType: string
    location?: string | null
    eventLink?: string | null
    timezone: string
    startDate: Date | string
    startTime?: string | null
    endDate: Date | string
    endTime?: string | null
    ticketType: string
    image?: string | null
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFestivalsInput
    tickets?: TicketCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateWithoutOrisaInput = {
    id?: number
    title: string
    description: string
    userId: string
    country: string
    eventType: string
    location?: string | null
    eventLink?: string | null
    timezone: string
    startDate: Date | string
    startTime?: string | null
    endDate: Date | string
    endTime?: string | null
    ticketType: string
    image?: string | null
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalCreateOrConnectWithoutOrisaInput = {
    where: FestivalWhereUniqueInput
    create: XOR<FestivalCreateWithoutOrisaInput, FestivalUncheckedCreateWithoutOrisaInput>
  }

  export type FestivalCreateManyOrisaInputEnvelope = {
    data: FestivalCreateManyOrisaInput | FestivalCreateManyOrisaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrisasInput = {
    update: XOR<UserUpdateWithoutOrisasInput, UserUncheckedUpdateWithoutOrisasInput>
    create: XOR<UserCreateWithoutOrisasInput, UserUncheckedCreateWithoutOrisasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrisasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrisasInput, UserUncheckedUpdateWithoutOrisasInput>
  }

  export type UserUpdateWithoutOrisasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    userAppProfiles?: UserAppProfileUpdateManyWithoutUserNestedInput
    festivals?: FestivalUpdateManyWithoutUserNestedInput
    tickets?: TicketUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutOrisasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    userAppProfiles?: UserAppProfileUncheckedUpdateManyWithoutUserNestedInput
    festivals?: FestivalUncheckedUpdateManyWithoutUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type FestivalUpsertWithWhereUniqueWithoutOrisaInput = {
    where: FestivalWhereUniqueInput
    update: XOR<FestivalUpdateWithoutOrisaInput, FestivalUncheckedUpdateWithoutOrisaInput>
    create: XOR<FestivalCreateWithoutOrisaInput, FestivalUncheckedCreateWithoutOrisaInput>
  }

  export type FestivalUpdateWithWhereUniqueWithoutOrisaInput = {
    where: FestivalWhereUniqueInput
    data: XOR<FestivalUpdateWithoutOrisaInput, FestivalUncheckedUpdateWithoutOrisaInput>
  }

  export type FestivalUpdateManyWithWhereWithoutOrisaInput = {
    where: FestivalScalarWhereInput
    data: XOR<FestivalUpdateManyMutationInput, FestivalUncheckedUpdateManyWithoutOrisaInput>
  }

  export type OrisaCreateWithoutFestivalsInput = {
    name: string
    user?: UserCreateNestedOneWithoutOrisasInput
  }

  export type OrisaUncheckedCreateWithoutFestivalsInput = {
    id?: number
    name: string
    userId?: string | null
  }

  export type OrisaCreateOrConnectWithoutFestivalsInput = {
    where: OrisaWhereUniqueInput
    create: XOR<OrisaCreateWithoutFestivalsInput, OrisaUncheckedCreateWithoutFestivalsInput>
  }

  export type UserCreateWithoutFestivalsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    userAppProfiles?: UserAppProfileCreateNestedManyWithoutUserInput
    orisas?: OrisaCreateNestedManyWithoutUserInput
    tickets?: TicketCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutFestivalsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    userAppProfiles?: UserAppProfileUncheckedCreateNestedManyWithoutUserInput
    orisas?: OrisaUncheckedCreateNestedManyWithoutUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutFestivalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFestivalsInput, UserUncheckedCreateWithoutFestivalsInput>
  }

  export type TicketCreateWithoutFestivalInput = {
    name: string
    type: string
    isFree: boolean
    price?: number | null
    quantity: number
    maxPerGroup?: number | null
    sold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutFestivalInput = {
    id?: number
    creatorId: string
    name: string
    type: string
    isFree: boolean
    price?: number | null
    quantity: number
    maxPerGroup?: number | null
    sold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutFestivalInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutFestivalInput, TicketUncheckedCreateWithoutFestivalInput>
  }

  export type TicketCreateManyFestivalInputEnvelope = {
    data: TicketCreateManyFestivalInput | TicketCreateManyFestivalInput[]
    skipDuplicates?: boolean
  }

  export type OrisaUpsertWithoutFestivalsInput = {
    update: XOR<OrisaUpdateWithoutFestivalsInput, OrisaUncheckedUpdateWithoutFestivalsInput>
    create: XOR<OrisaCreateWithoutFestivalsInput, OrisaUncheckedCreateWithoutFestivalsInput>
    where?: OrisaWhereInput
  }

  export type OrisaUpdateToOneWithWhereWithoutFestivalsInput = {
    where?: OrisaWhereInput
    data: XOR<OrisaUpdateWithoutFestivalsInput, OrisaUncheckedUpdateWithoutFestivalsInput>
  }

  export type OrisaUpdateWithoutFestivalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutOrisasNestedInput
  }

  export type OrisaUncheckedUpdateWithoutFestivalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutFestivalsInput = {
    update: XOR<UserUpdateWithoutFestivalsInput, UserUncheckedUpdateWithoutFestivalsInput>
    create: XOR<UserCreateWithoutFestivalsInput, UserUncheckedCreateWithoutFestivalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFestivalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFestivalsInput, UserUncheckedUpdateWithoutFestivalsInput>
  }

  export type UserUpdateWithoutFestivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    userAppProfiles?: UserAppProfileUpdateManyWithoutUserNestedInput
    orisas?: OrisaUpdateManyWithoutUserNestedInput
    tickets?: TicketUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutFestivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    userAppProfiles?: UserAppProfileUncheckedUpdateManyWithoutUserNestedInput
    orisas?: OrisaUncheckedUpdateManyWithoutUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutFestivalInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutFestivalInput, TicketUncheckedUpdateWithoutFestivalInput>
    create: XOR<TicketCreateWithoutFestivalInput, TicketUncheckedCreateWithoutFestivalInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutFestivalInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutFestivalInput, TicketUncheckedUpdateWithoutFestivalInput>
  }

  export type TicketUpdateManyWithWhereWithoutFestivalInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutFestivalInput>
  }

  export type FestivalCreateWithoutTicketsInput = {
    title: string
    description: string
    country: string
    eventType: string
    location?: string | null
    eventLink?: string | null
    timezone: string
    startDate: Date | string
    startTime?: string | null
    endDate: Date | string
    endTime?: string | null
    ticketType: string
    image?: string | null
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orisa: OrisaCreateNestedOneWithoutFestivalsInput
    user: UserCreateNestedOneWithoutFestivalsInput
  }

  export type FestivalUncheckedCreateWithoutTicketsInput = {
    id?: number
    title: string
    description: string
    orisaId: number
    userId: string
    country: string
    eventType: string
    location?: string | null
    eventLink?: string | null
    timezone: string
    startDate: Date | string
    startTime?: string | null
    endDate: Date | string
    endTime?: string | null
    ticketType: string
    image?: string | null
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalCreateOrConnectWithoutTicketsInput = {
    where: FestivalWhereUniqueInput
    create: XOR<FestivalCreateWithoutTicketsInput, FestivalUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutTicketsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    userAppProfiles?: UserAppProfileCreateNestedManyWithoutUserInput
    festivals?: FestivalCreateNestedManyWithoutUserInput
    orisas?: OrisaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    userAppProfiles?: UserAppProfileUncheckedCreateNestedManyWithoutUserInput
    festivals?: FestivalUncheckedCreateNestedManyWithoutUserInput
    orisas?: OrisaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type FestivalUpsertWithoutTicketsInput = {
    update: XOR<FestivalUpdateWithoutTicketsInput, FestivalUncheckedUpdateWithoutTicketsInput>
    create: XOR<FestivalCreateWithoutTicketsInput, FestivalUncheckedCreateWithoutTicketsInput>
    where?: FestivalWhereInput
  }

  export type FestivalUpdateToOneWithWhereWithoutTicketsInput = {
    where?: FestivalWhereInput
    data: XOR<FestivalUpdateWithoutTicketsInput, FestivalUncheckedUpdateWithoutTicketsInput>
  }

  export type FestivalUpdateWithoutTicketsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orisa?: OrisaUpdateOneRequiredWithoutFestivalsNestedInput
    user?: UserUpdateOneRequiredWithoutFestivalsNestedInput
  }

  export type FestivalUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    orisaId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    userAppProfiles?: UserAppProfileUpdateManyWithoutUserNestedInput
    festivals?: FestivalUpdateManyWithoutUserNestedInput
    orisas?: OrisaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    userAppProfiles?: UserAppProfileUncheckedUpdateManyWithoutUserNestedInput
    festivals?: FestivalUncheckedUpdateManyWithoutUserNestedInput
    orisas?: OrisaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserRoleCreateManyUserInput = {
    id?: string
    roleId: string
    app: $Enums.App
  }

  export type UserAppProfileCreateManyUserInput = {
    id?: string
    app: $Enums.App
    type: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalCreateManyUserInput = {
    id?: number
    title: string
    description: string
    orisaId: number
    country: string
    eventType: string
    location?: string | null
    eventLink?: string | null
    timezone: string
    startDate: Date | string
    startTime?: string | null
    endDate: Date | string
    endTime?: string | null
    ticketType: string
    image?: string | null
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrisaCreateManyUserInput = {
    id?: number
    name: string
  }

  export type TicketCreateManyCreatorInput = {
    id?: number
    festivalId: number
    name: string
    type: string
    isFree: boolean
    price?: number | null
    quantity: number
    maxPerGroup?: number | null
    sold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
  }

  export type UserAppProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAppProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAppProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orisa?: OrisaUpdateOneRequiredWithoutFestivalsNestedInput
    tickets?: TicketUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    orisaId?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    orisaId?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrisaUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    festivals?: FestivalUpdateManyWithoutOrisaNestedInput
  }

  export type OrisaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    festivals?: FestivalUncheckedUpdateManyWithoutOrisaNestedInput
  }

  export type OrisaUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TicketUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    maxPerGroup?: NullableIntFieldUpdateOperationsInput | number | null
    sold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    festivalId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    maxPerGroup?: NullableIntFieldUpdateOperationsInput | number | null
    sold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    festivalId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    maxPerGroup?: NullableIntFieldUpdateOperationsInput | number | null
    sold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyRoleInput = {
    id?: string
    userId: string
    app: $Enums.App
  }

  export type UserRoleUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    app?: EnumAppFieldUpdateOperationsInput | $Enums.App
  }

  export type FestivalCreateManyOrisaInput = {
    id?: number
    title: string
    description: string
    userId: string
    country: string
    eventType: string
    location?: string | null
    eventLink?: string | null
    timezone: string
    startDate: Date | string
    startTime?: string | null
    endDate: Date | string
    endTime?: string | null
    ticketType: string
    image?: string | null
    banner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalUpdateWithoutOrisaInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFestivalsNestedInput
    tickets?: TicketUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateWithoutOrisaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateManyWithoutOrisaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventLink?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyFestivalInput = {
    id?: number
    creatorId: string
    name: string
    type: string
    isFree: boolean
    price?: number | null
    quantity: number
    maxPerGroup?: number | null
    sold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutFestivalInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    maxPerGroup?: NullableIntFieldUpdateOperationsInput | number | null
    sold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutFestivalInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    maxPerGroup?: NullableIntFieldUpdateOperationsInput | number | null
    sold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutFestivalInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isFree?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    maxPerGroup?: NullableIntFieldUpdateOperationsInput | number | null
    sold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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