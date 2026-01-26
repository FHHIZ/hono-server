
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model student_class
 * 
 */
export type student_class = $Result.DefaultSelection<Prisma.$student_classPayload>
/**
 * Model absences
 * 
 */
export type absences = $Result.DefaultSelection<Prisma.$absencesPayload>
/**
 * Model todo_lists
 * 
 */
export type todo_lists = $Result.DefaultSelection<Prisma.$todo_listsPayload>
/**
 * Model classes
 * 
 */
export type classes = $Result.DefaultSelection<Prisma.$classesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  teacher: 'teacher',
  student: 'student',
  unregistered: 'unregistered'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  present: 'present',
  onLeave: 'onLeave',
  ill: 'ill',
  unexcused: 'unexcused'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student_class`: Exposes CRUD operations for the **student_class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Student_classes
    * const student_classes = await prisma.student_class.findMany()
    * ```
    */
  get student_class(): Prisma.student_classDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.absences`: Exposes CRUD operations for the **absences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Absences
    * const absences = await prisma.absences.findMany()
    * ```
    */
  get absences(): Prisma.absencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todo_lists`: Exposes CRUD operations for the **todo_lists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todo_lists
    * const todo_lists = await prisma.todo_lists.findMany()
    * ```
    */
  get todo_lists(): Prisma.todo_listsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classes`: Exposes CRUD operations for the **classes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classes.findMany()
    * ```
    */
  get classes(): Prisma.classesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    users: 'users',
    student_class: 'student_class',
    absences: 'absences',
    todo_lists: 'todo_lists',
    classes: 'classes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "student_class" | "absences" | "todo_lists" | "classes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      student_class: {
        payload: Prisma.$student_classPayload<ExtArgs>
        fields: Prisma.student_classFieldRefs
        operations: {
          findUnique: {
            args: Prisma.student_classFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_classPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.student_classFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_classPayload>
          }
          findFirst: {
            args: Prisma.student_classFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_classPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.student_classFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_classPayload>
          }
          findMany: {
            args: Prisma.student_classFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_classPayload>[]
          }
          create: {
            args: Prisma.student_classCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_classPayload>
          }
          createMany: {
            args: Prisma.student_classCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.student_classDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_classPayload>
          }
          update: {
            args: Prisma.student_classUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_classPayload>
          }
          deleteMany: {
            args: Prisma.student_classDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.student_classUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.student_classUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_classPayload>
          }
          aggregate: {
            args: Prisma.Student_classAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent_class>
          }
          groupBy: {
            args: Prisma.student_classGroupByArgs<ExtArgs>
            result: $Utils.Optional<Student_classGroupByOutputType>[]
          }
          count: {
            args: Prisma.student_classCountArgs<ExtArgs>
            result: $Utils.Optional<Student_classCountAggregateOutputType> | number
          }
        }
      }
      absences: {
        payload: Prisma.$absencesPayload<ExtArgs>
        fields: Prisma.absencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.absencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.absencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencesPayload>
          }
          findFirst: {
            args: Prisma.absencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.absencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencesPayload>
          }
          findMany: {
            args: Prisma.absencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencesPayload>[]
          }
          create: {
            args: Prisma.absencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencesPayload>
          }
          createMany: {
            args: Prisma.absencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.absencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencesPayload>
          }
          update: {
            args: Prisma.absencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencesPayload>
          }
          deleteMany: {
            args: Prisma.absencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.absencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.absencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$absencesPayload>
          }
          aggregate: {
            args: Prisma.AbsencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbsences>
          }
          groupBy: {
            args: Prisma.absencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbsencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.absencesCountArgs<ExtArgs>
            result: $Utils.Optional<AbsencesCountAggregateOutputType> | number
          }
        }
      }
      todo_lists: {
        payload: Prisma.$todo_listsPayload<ExtArgs>
        fields: Prisma.todo_listsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.todo_listsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todo_listsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.todo_listsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todo_listsPayload>
          }
          findFirst: {
            args: Prisma.todo_listsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todo_listsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.todo_listsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todo_listsPayload>
          }
          findMany: {
            args: Prisma.todo_listsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todo_listsPayload>[]
          }
          create: {
            args: Prisma.todo_listsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todo_listsPayload>
          }
          createMany: {
            args: Prisma.todo_listsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.todo_listsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todo_listsPayload>
          }
          update: {
            args: Prisma.todo_listsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todo_listsPayload>
          }
          deleteMany: {
            args: Prisma.todo_listsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.todo_listsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.todo_listsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todo_listsPayload>
          }
          aggregate: {
            args: Prisma.Todo_listsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodo_lists>
          }
          groupBy: {
            args: Prisma.todo_listsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Todo_listsGroupByOutputType>[]
          }
          count: {
            args: Prisma.todo_listsCountArgs<ExtArgs>
            result: $Utils.Optional<Todo_listsCountAggregateOutputType> | number
          }
        }
      }
      classes: {
        payload: Prisma.$classesPayload<ExtArgs>
        fields: Prisma.classesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.classesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.classesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          findFirst: {
            args: Prisma.classesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.classesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          findMany: {
            args: Prisma.classesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>[]
          }
          create: {
            args: Prisma.classesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          createMany: {
            args: Prisma.classesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.classesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          update: {
            args: Prisma.classesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          deleteMany: {
            args: Prisma.classesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.classesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.classesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          aggregate: {
            args: Prisma.ClassesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasses>
          }
          groupBy: {
            args: Prisma.classesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassesGroupByOutputType>[]
          }
          count: {
            args: Prisma.classesCountArgs<ExtArgs>
            result: $Utils.Optional<ClassesCountAggregateOutputType> | number
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    student_class?: student_classOmit
    absences?: absencesOmit
    todo_lists?: todo_listsOmit
    classes?: classesOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    studentClasses: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentClasses?: boolean | UsersCountOutputTypeCountStudentClassesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountStudentClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_classWhereInput
  }


  /**
   * Count Type Student_classCountOutputType
   */

  export type Student_classCountOutputType = {
    absences: number
    todos: number
  }

  export type Student_classCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absences?: boolean | Student_classCountOutputTypeCountAbsencesArgs
    todos?: boolean | Student_classCountOutputTypeCountTodosArgs
  }

  // Custom InputTypes
  /**
   * Student_classCountOutputType without action
   */
  export type Student_classCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_classCountOutputType
     */
    select?: Student_classCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Student_classCountOutputType without action
   */
  export type Student_classCountOutputTypeCountAbsencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: absencesWhereInput
  }

  /**
   * Student_classCountOutputType without action
   */
  export type Student_classCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: todo_listsWhereInput
  }


  /**
   * Count Type ClassesCountOutputType
   */

  export type ClassesCountOutputType = {
    studentClasses: number
  }

  export type ClassesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentClasses?: boolean | ClassesCountOutputTypeCountStudentClassesArgs
  }

  // Custom InputTypes
  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassesCountOutputType
     */
    select?: ClassesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeCountStudentClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_classWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified_at: Date | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified_at: Date | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    email_verified_at: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    email_verified_at: Date | null
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified_at?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentClasses?: boolean | users$studentClassesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified_at?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "email_verified_at" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentClasses?: boolean | users$studentClassesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      studentClasses: Prisma.$student_classPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      email_verified_at: Date | null
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentClasses<T extends users$studentClassesArgs<ExtArgs> = {}>(args?: Subset<T, users$studentClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly email_verified_at: FieldRef<"users", 'DateTime'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Role'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.studentClasses
   */
  export type users$studentClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
    where?: student_classWhereInput
    orderBy?: student_classOrderByWithRelationInput | student_classOrderByWithRelationInput[]
    cursor?: student_classWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_classScalarFieldEnum | Student_classScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model student_class
   */

  export type AggregateStudent_class = {
    _count: Student_classCountAggregateOutputType | null
    _avg: Student_classAvgAggregateOutputType | null
    _sum: Student_classSumAggregateOutputType | null
    _min: Student_classMinAggregateOutputType | null
    _max: Student_classMaxAggregateOutputType | null
  }

  export type Student_classAvgAggregateOutputType = {
    nis: number | null
  }

  export type Student_classSumAggregateOutputType = {
    nis: number | null
  }

  export type Student_classMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    class_id: string | null
    nis: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Student_classMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    class_id: string | null
    nis: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Student_classCountAggregateOutputType = {
    id: number
    user_id: number
    class_id: number
    nis: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Student_classAvgAggregateInputType = {
    nis?: true
  }

  export type Student_classSumAggregateInputType = {
    nis?: true
  }

  export type Student_classMinAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    nis?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Student_classMaxAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    nis?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Student_classCountAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    nis?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Student_classAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_class to aggregate.
     */
    where?: student_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_classes to fetch.
     */
    orderBy?: student_classOrderByWithRelationInput | student_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: student_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned student_classes
    **/
    _count?: true | Student_classCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Student_classAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Student_classSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Student_classMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Student_classMaxAggregateInputType
  }

  export type GetStudent_classAggregateType<T extends Student_classAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent_class]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent_class[P]>
      : GetScalarType<T[P], AggregateStudent_class[P]>
  }




  export type student_classGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_classWhereInput
    orderBy?: student_classOrderByWithAggregationInput | student_classOrderByWithAggregationInput[]
    by: Student_classScalarFieldEnum[] | Student_classScalarFieldEnum
    having?: student_classScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Student_classCountAggregateInputType | true
    _avg?: Student_classAvgAggregateInputType
    _sum?: Student_classSumAggregateInputType
    _min?: Student_classMinAggregateInputType
    _max?: Student_classMaxAggregateInputType
  }

  export type Student_classGroupByOutputType = {
    id: string
    user_id: string
    class_id: string
    nis: number
    createdAt: Date
    updatedAt: Date
    _count: Student_classCountAggregateOutputType | null
    _avg: Student_classAvgAggregateOutputType | null
    _sum: Student_classSumAggregateOutputType | null
    _min: Student_classMinAggregateOutputType | null
    _max: Student_classMaxAggregateOutputType | null
  }

  type GetStudent_classGroupByPayload<T extends student_classGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Student_classGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Student_classGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Student_classGroupByOutputType[P]>
            : GetScalarType<T[P], Student_classGroupByOutputType[P]>
        }
      >
    >


  export type student_classSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    nis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    absences?: boolean | student_class$absencesArgs<ExtArgs>
    todos?: boolean | student_class$todosArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    class?: boolean | classesDefaultArgs<ExtArgs>
    _count?: boolean | Student_classCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_class"]>



  export type student_classSelectScalar = {
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    nis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type student_classOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "class_id" | "nis" | "createdAt" | "updatedAt", ExtArgs["result"]["student_class"]>
  export type student_classInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absences?: boolean | student_class$absencesArgs<ExtArgs>
    todos?: boolean | student_class$todosArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    class?: boolean | classesDefaultArgs<ExtArgs>
    _count?: boolean | Student_classCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $student_classPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student_class"
    objects: {
      absences: Prisma.$absencesPayload<ExtArgs>[]
      todos: Prisma.$todo_listsPayload<ExtArgs>[]
      user: Prisma.$usersPayload<ExtArgs>
      class: Prisma.$classesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      class_id: string
      nis: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student_class"]>
    composites: {}
  }

  type student_classGetPayload<S extends boolean | null | undefined | student_classDefaultArgs> = $Result.GetResult<Prisma.$student_classPayload, S>

  type student_classCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<student_classFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Student_classCountAggregateInputType | true
    }

  export interface student_classDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student_class'], meta: { name: 'student_class' } }
    /**
     * Find zero or one Student_class that matches the filter.
     * @param {student_classFindUniqueArgs} args - Arguments to find a Student_class
     * @example
     * // Get one Student_class
     * const student_class = await prisma.student_class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends student_classFindUniqueArgs>(args: SelectSubset<T, student_classFindUniqueArgs<ExtArgs>>): Prisma__student_classClient<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student_class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {student_classFindUniqueOrThrowArgs} args - Arguments to find a Student_class
     * @example
     * // Get one Student_class
     * const student_class = await prisma.student_class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends student_classFindUniqueOrThrowArgs>(args: SelectSubset<T, student_classFindUniqueOrThrowArgs<ExtArgs>>): Prisma__student_classClient<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_classFindFirstArgs} args - Arguments to find a Student_class
     * @example
     * // Get one Student_class
     * const student_class = await prisma.student_class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends student_classFindFirstArgs>(args?: SelectSubset<T, student_classFindFirstArgs<ExtArgs>>): Prisma__student_classClient<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_classFindFirstOrThrowArgs} args - Arguments to find a Student_class
     * @example
     * // Get one Student_class
     * const student_class = await prisma.student_class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends student_classFindFirstOrThrowArgs>(args?: SelectSubset<T, student_classFindFirstOrThrowArgs<ExtArgs>>): Prisma__student_classClient<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Student_classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_classFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_classes
     * const student_classes = await prisma.student_class.findMany()
     * 
     * // Get first 10 Student_classes
     * const student_classes = await prisma.student_class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const student_classWithIdOnly = await prisma.student_class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends student_classFindManyArgs>(args?: SelectSubset<T, student_classFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student_class.
     * @param {student_classCreateArgs} args - Arguments to create a Student_class.
     * @example
     * // Create one Student_class
     * const Student_class = await prisma.student_class.create({
     *   data: {
     *     // ... data to create a Student_class
     *   }
     * })
     * 
     */
    create<T extends student_classCreateArgs>(args: SelectSubset<T, student_classCreateArgs<ExtArgs>>): Prisma__student_classClient<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Student_classes.
     * @param {student_classCreateManyArgs} args - Arguments to create many Student_classes.
     * @example
     * // Create many Student_classes
     * const student_class = await prisma.student_class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends student_classCreateManyArgs>(args?: SelectSubset<T, student_classCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student_class.
     * @param {student_classDeleteArgs} args - Arguments to delete one Student_class.
     * @example
     * // Delete one Student_class
     * const Student_class = await prisma.student_class.delete({
     *   where: {
     *     // ... filter to delete one Student_class
     *   }
     * })
     * 
     */
    delete<T extends student_classDeleteArgs>(args: SelectSubset<T, student_classDeleteArgs<ExtArgs>>): Prisma__student_classClient<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student_class.
     * @param {student_classUpdateArgs} args - Arguments to update one Student_class.
     * @example
     * // Update one Student_class
     * const student_class = await prisma.student_class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends student_classUpdateArgs>(args: SelectSubset<T, student_classUpdateArgs<ExtArgs>>): Prisma__student_classClient<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Student_classes.
     * @param {student_classDeleteManyArgs} args - Arguments to filter Student_classes to delete.
     * @example
     * // Delete a few Student_classes
     * const { count } = await prisma.student_class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends student_classDeleteManyArgs>(args?: SelectSubset<T, student_classDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_classUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_classes
     * const student_class = await prisma.student_class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends student_classUpdateManyArgs>(args: SelectSubset<T, student_classUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student_class.
     * @param {student_classUpsertArgs} args - Arguments to update or create a Student_class.
     * @example
     * // Update or create a Student_class
     * const student_class = await prisma.student_class.upsert({
     *   create: {
     *     // ... data to create a Student_class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_class we want to update
     *   }
     * })
     */
    upsert<T extends student_classUpsertArgs>(args: SelectSubset<T, student_classUpsertArgs<ExtArgs>>): Prisma__student_classClient<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Student_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_classCountArgs} args - Arguments to filter Student_classes to count.
     * @example
     * // Count the number of Student_classes
     * const count = await prisma.student_class.count({
     *   where: {
     *     // ... the filter for the Student_classes we want to count
     *   }
     * })
    **/
    count<T extends student_classCountArgs>(
      args?: Subset<T, student_classCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Student_classCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student_class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_classAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Student_classAggregateArgs>(args: Subset<T, Student_classAggregateArgs>): Prisma.PrismaPromise<GetStudent_classAggregateType<T>>

    /**
     * Group by Student_class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_classGroupByArgs} args - Group by arguments.
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
      T extends student_classGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: student_classGroupByArgs['orderBy'] }
        : { orderBy?: student_classGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, student_classGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_classGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student_class model
   */
  readonly fields: student_classFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student_class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__student_classClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    absences<T extends student_class$absencesArgs<ExtArgs> = {}>(args?: Subset<T, student_class$absencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$absencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    todos<T extends student_class$todosArgs<ExtArgs> = {}>(args?: Subset<T, student_class$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$todo_listsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends classesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, classesDefaultArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the student_class model
   */
  interface student_classFieldRefs {
    readonly id: FieldRef<"student_class", 'String'>
    readonly user_id: FieldRef<"student_class", 'String'>
    readonly class_id: FieldRef<"student_class", 'String'>
    readonly nis: FieldRef<"student_class", 'Int'>
    readonly createdAt: FieldRef<"student_class", 'DateTime'>
    readonly updatedAt: FieldRef<"student_class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * student_class findUnique
   */
  export type student_classFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
    /**
     * Filter, which student_class to fetch.
     */
    where: student_classWhereUniqueInput
  }

  /**
   * student_class findUniqueOrThrow
   */
  export type student_classFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
    /**
     * Filter, which student_class to fetch.
     */
    where: student_classWhereUniqueInput
  }

  /**
   * student_class findFirst
   */
  export type student_classFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
    /**
     * Filter, which student_class to fetch.
     */
    where?: student_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_classes to fetch.
     */
    orderBy?: student_classOrderByWithRelationInput | student_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_classes.
     */
    cursor?: student_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_classes.
     */
    distinct?: Student_classScalarFieldEnum | Student_classScalarFieldEnum[]
  }

  /**
   * student_class findFirstOrThrow
   */
  export type student_classFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
    /**
     * Filter, which student_class to fetch.
     */
    where?: student_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_classes to fetch.
     */
    orderBy?: student_classOrderByWithRelationInput | student_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_classes.
     */
    cursor?: student_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_classes.
     */
    distinct?: Student_classScalarFieldEnum | Student_classScalarFieldEnum[]
  }

  /**
   * student_class findMany
   */
  export type student_classFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
    /**
     * Filter, which student_classes to fetch.
     */
    where?: student_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_classes to fetch.
     */
    orderBy?: student_classOrderByWithRelationInput | student_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing student_classes.
     */
    cursor?: student_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_classes.
     */
    skip?: number
    distinct?: Student_classScalarFieldEnum | Student_classScalarFieldEnum[]
  }

  /**
   * student_class create
   */
  export type student_classCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
    /**
     * The data needed to create a student_class.
     */
    data: XOR<student_classCreateInput, student_classUncheckedCreateInput>
  }

  /**
   * student_class createMany
   */
  export type student_classCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many student_classes.
     */
    data: student_classCreateManyInput | student_classCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student_class update
   */
  export type student_classUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
    /**
     * The data needed to update a student_class.
     */
    data: XOR<student_classUpdateInput, student_classUncheckedUpdateInput>
    /**
     * Choose, which student_class to update.
     */
    where: student_classWhereUniqueInput
  }

  /**
   * student_class updateMany
   */
  export type student_classUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update student_classes.
     */
    data: XOR<student_classUpdateManyMutationInput, student_classUncheckedUpdateManyInput>
    /**
     * Filter which student_classes to update
     */
    where?: student_classWhereInput
    /**
     * Limit how many student_classes to update.
     */
    limit?: number
  }

  /**
   * student_class upsert
   */
  export type student_classUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
    /**
     * The filter to search for the student_class to update in case it exists.
     */
    where: student_classWhereUniqueInput
    /**
     * In case the student_class found by the `where` argument doesn't exist, create a new student_class with this data.
     */
    create: XOR<student_classCreateInput, student_classUncheckedCreateInput>
    /**
     * In case the student_class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<student_classUpdateInput, student_classUncheckedUpdateInput>
  }

  /**
   * student_class delete
   */
  export type student_classDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
    /**
     * Filter which student_class to delete.
     */
    where: student_classWhereUniqueInput
  }

  /**
   * student_class deleteMany
   */
  export type student_classDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_classes to delete
     */
    where?: student_classWhereInput
    /**
     * Limit how many student_classes to delete.
     */
    limit?: number
  }

  /**
   * student_class.absences
   */
  export type student_class$absencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absences
     */
    select?: absencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absences
     */
    omit?: absencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absencesInclude<ExtArgs> | null
    where?: absencesWhereInput
    orderBy?: absencesOrderByWithRelationInput | absencesOrderByWithRelationInput[]
    cursor?: absencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsencesScalarFieldEnum | AbsencesScalarFieldEnum[]
  }

  /**
   * student_class.todos
   */
  export type student_class$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todo_lists
     */
    select?: todo_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todo_lists
     */
    omit?: todo_listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todo_listsInclude<ExtArgs> | null
    where?: todo_listsWhereInput
    orderBy?: todo_listsOrderByWithRelationInput | todo_listsOrderByWithRelationInput[]
    cursor?: todo_listsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Todo_listsScalarFieldEnum | Todo_listsScalarFieldEnum[]
  }

  /**
   * student_class without action
   */
  export type student_classDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
  }


  /**
   * Model absences
   */

  export type AggregateAbsences = {
    _count: AbsencesCountAggregateOutputType | null
    _min: AbsencesMinAggregateOutputType | null
    _max: AbsencesMaxAggregateOutputType | null
  }

  export type AbsencesMinAggregateOutputType = {
    id: string | null
    student_class_id: string | null
    date: Date | null
    absence_time: Date | null
    status: $Enums.Status | null
    has_todo: boolean | null
  }

  export type AbsencesMaxAggregateOutputType = {
    id: string | null
    student_class_id: string | null
    date: Date | null
    absence_time: Date | null
    status: $Enums.Status | null
    has_todo: boolean | null
  }

  export type AbsencesCountAggregateOutputType = {
    id: number
    student_class_id: number
    date: number
    absence_time: number
    status: number
    has_todo: number
    _all: number
  }


  export type AbsencesMinAggregateInputType = {
    id?: true
    student_class_id?: true
    date?: true
    absence_time?: true
    status?: true
    has_todo?: true
  }

  export type AbsencesMaxAggregateInputType = {
    id?: true
    student_class_id?: true
    date?: true
    absence_time?: true
    status?: true
    has_todo?: true
  }

  export type AbsencesCountAggregateInputType = {
    id?: true
    student_class_id?: true
    date?: true
    absence_time?: true
    status?: true
    has_todo?: true
    _all?: true
  }

  export type AbsencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which absences to aggregate.
     */
    where?: absencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of absences to fetch.
     */
    orderBy?: absencesOrderByWithRelationInput | absencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: absencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` absences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned absences
    **/
    _count?: true | AbsencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsencesMaxAggregateInputType
  }

  export type GetAbsencesAggregateType<T extends AbsencesAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsences[P]>
      : GetScalarType<T[P], AggregateAbsences[P]>
  }




  export type absencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: absencesWhereInput
    orderBy?: absencesOrderByWithAggregationInput | absencesOrderByWithAggregationInput[]
    by: AbsencesScalarFieldEnum[] | AbsencesScalarFieldEnum
    having?: absencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsencesCountAggregateInputType | true
    _min?: AbsencesMinAggregateInputType
    _max?: AbsencesMaxAggregateInputType
  }

  export type AbsencesGroupByOutputType = {
    id: string
    student_class_id: string
    date: Date
    absence_time: Date
    status: $Enums.Status
    has_todo: boolean
    _count: AbsencesCountAggregateOutputType | null
    _min: AbsencesMinAggregateOutputType | null
    _max: AbsencesMaxAggregateOutputType | null
  }

  type GetAbsencesGroupByPayload<T extends absencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsencesGroupByOutputType[P]>
            : GetScalarType<T[P], AbsencesGroupByOutputType[P]>
        }
      >
    >


  export type absencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_class_id?: boolean
    date?: boolean
    absence_time?: boolean
    status?: boolean
    has_todo?: boolean
    studentClass?: boolean | student_classDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absences"]>



  export type absencesSelectScalar = {
    id?: boolean
    student_class_id?: boolean
    date?: boolean
    absence_time?: boolean
    status?: boolean
    has_todo?: boolean
  }

  export type absencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_class_id" | "date" | "absence_time" | "status" | "has_todo", ExtArgs["result"]["absences"]>
  export type absencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentClass?: boolean | student_classDefaultArgs<ExtArgs>
  }

  export type $absencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "absences"
    objects: {
      studentClass: Prisma.$student_classPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_class_id: string
      date: Date
      absence_time: Date
      status: $Enums.Status
      has_todo: boolean
    }, ExtArgs["result"]["absences"]>
    composites: {}
  }

  type absencesGetPayload<S extends boolean | null | undefined | absencesDefaultArgs> = $Result.GetResult<Prisma.$absencesPayload, S>

  type absencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<absencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbsencesCountAggregateInputType | true
    }

  export interface absencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['absences'], meta: { name: 'absences' } }
    /**
     * Find zero or one Absences that matches the filter.
     * @param {absencesFindUniqueArgs} args - Arguments to find a Absences
     * @example
     * // Get one Absences
     * const absences = await prisma.absences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends absencesFindUniqueArgs>(args: SelectSubset<T, absencesFindUniqueArgs<ExtArgs>>): Prisma__absencesClient<$Result.GetResult<Prisma.$absencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Absences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {absencesFindUniqueOrThrowArgs} args - Arguments to find a Absences
     * @example
     * // Get one Absences
     * const absences = await prisma.absences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends absencesFindUniqueOrThrowArgs>(args: SelectSubset<T, absencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__absencesClient<$Result.GetResult<Prisma.$absencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absencesFindFirstArgs} args - Arguments to find a Absences
     * @example
     * // Get one Absences
     * const absences = await prisma.absences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends absencesFindFirstArgs>(args?: SelectSubset<T, absencesFindFirstArgs<ExtArgs>>): Prisma__absencesClient<$Result.GetResult<Prisma.$absencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absencesFindFirstOrThrowArgs} args - Arguments to find a Absences
     * @example
     * // Get one Absences
     * const absences = await prisma.absences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends absencesFindFirstOrThrowArgs>(args?: SelectSubset<T, absencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__absencesClient<$Result.GetResult<Prisma.$absencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Absences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Absences
     * const absences = await prisma.absences.findMany()
     * 
     * // Get first 10 Absences
     * const absences = await prisma.absences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absencesWithIdOnly = await prisma.absences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends absencesFindManyArgs>(args?: SelectSubset<T, absencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$absencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Absences.
     * @param {absencesCreateArgs} args - Arguments to create a Absences.
     * @example
     * // Create one Absences
     * const Absences = await prisma.absences.create({
     *   data: {
     *     // ... data to create a Absences
     *   }
     * })
     * 
     */
    create<T extends absencesCreateArgs>(args: SelectSubset<T, absencesCreateArgs<ExtArgs>>): Prisma__absencesClient<$Result.GetResult<Prisma.$absencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Absences.
     * @param {absencesCreateManyArgs} args - Arguments to create many Absences.
     * @example
     * // Create many Absences
     * const absences = await prisma.absences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends absencesCreateManyArgs>(args?: SelectSubset<T, absencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Absences.
     * @param {absencesDeleteArgs} args - Arguments to delete one Absences.
     * @example
     * // Delete one Absences
     * const Absences = await prisma.absences.delete({
     *   where: {
     *     // ... filter to delete one Absences
     *   }
     * })
     * 
     */
    delete<T extends absencesDeleteArgs>(args: SelectSubset<T, absencesDeleteArgs<ExtArgs>>): Prisma__absencesClient<$Result.GetResult<Prisma.$absencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Absences.
     * @param {absencesUpdateArgs} args - Arguments to update one Absences.
     * @example
     * // Update one Absences
     * const absences = await prisma.absences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends absencesUpdateArgs>(args: SelectSubset<T, absencesUpdateArgs<ExtArgs>>): Prisma__absencesClient<$Result.GetResult<Prisma.$absencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Absences.
     * @param {absencesDeleteManyArgs} args - Arguments to filter Absences to delete.
     * @example
     * // Delete a few Absences
     * const { count } = await prisma.absences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends absencesDeleteManyArgs>(args?: SelectSubset<T, absencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Absences
     * const absences = await prisma.absences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends absencesUpdateManyArgs>(args: SelectSubset<T, absencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Absences.
     * @param {absencesUpsertArgs} args - Arguments to update or create a Absences.
     * @example
     * // Update or create a Absences
     * const absences = await prisma.absences.upsert({
     *   create: {
     *     // ... data to create a Absences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Absences we want to update
     *   }
     * })
     */
    upsert<T extends absencesUpsertArgs>(args: SelectSubset<T, absencesUpsertArgs<ExtArgs>>): Prisma__absencesClient<$Result.GetResult<Prisma.$absencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Absences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absencesCountArgs} args - Arguments to filter Absences to count.
     * @example
     * // Count the number of Absences
     * const count = await prisma.absences.count({
     *   where: {
     *     // ... the filter for the Absences we want to count
     *   }
     * })
    **/
    count<T extends absencesCountArgs>(
      args?: Subset<T, absencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Absences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AbsencesAggregateArgs>(args: Subset<T, AbsencesAggregateArgs>): Prisma.PrismaPromise<GetAbsencesAggregateType<T>>

    /**
     * Group by Absences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {absencesGroupByArgs} args - Group by arguments.
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
      T extends absencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: absencesGroupByArgs['orderBy'] }
        : { orderBy?: absencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, absencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the absences model
   */
  readonly fields: absencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for absences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__absencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentClass<T extends student_classDefaultArgs<ExtArgs> = {}>(args?: Subset<T, student_classDefaultArgs<ExtArgs>>): Prisma__student_classClient<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the absences model
   */
  interface absencesFieldRefs {
    readonly id: FieldRef<"absences", 'String'>
    readonly student_class_id: FieldRef<"absences", 'String'>
    readonly date: FieldRef<"absences", 'DateTime'>
    readonly absence_time: FieldRef<"absences", 'DateTime'>
    readonly status: FieldRef<"absences", 'Status'>
    readonly has_todo: FieldRef<"absences", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * absences findUnique
   */
  export type absencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absences
     */
    select?: absencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absences
     */
    omit?: absencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absencesInclude<ExtArgs> | null
    /**
     * Filter, which absences to fetch.
     */
    where: absencesWhereUniqueInput
  }

  /**
   * absences findUniqueOrThrow
   */
  export type absencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absences
     */
    select?: absencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absences
     */
    omit?: absencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absencesInclude<ExtArgs> | null
    /**
     * Filter, which absences to fetch.
     */
    where: absencesWhereUniqueInput
  }

  /**
   * absences findFirst
   */
  export type absencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absences
     */
    select?: absencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absences
     */
    omit?: absencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absencesInclude<ExtArgs> | null
    /**
     * Filter, which absences to fetch.
     */
    where?: absencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of absences to fetch.
     */
    orderBy?: absencesOrderByWithRelationInput | absencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for absences.
     */
    cursor?: absencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` absences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of absences.
     */
    distinct?: AbsencesScalarFieldEnum | AbsencesScalarFieldEnum[]
  }

  /**
   * absences findFirstOrThrow
   */
  export type absencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absences
     */
    select?: absencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absences
     */
    omit?: absencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absencesInclude<ExtArgs> | null
    /**
     * Filter, which absences to fetch.
     */
    where?: absencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of absences to fetch.
     */
    orderBy?: absencesOrderByWithRelationInput | absencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for absences.
     */
    cursor?: absencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` absences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of absences.
     */
    distinct?: AbsencesScalarFieldEnum | AbsencesScalarFieldEnum[]
  }

  /**
   * absences findMany
   */
  export type absencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absences
     */
    select?: absencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absences
     */
    omit?: absencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absencesInclude<ExtArgs> | null
    /**
     * Filter, which absences to fetch.
     */
    where?: absencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of absences to fetch.
     */
    orderBy?: absencesOrderByWithRelationInput | absencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing absences.
     */
    cursor?: absencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` absences.
     */
    skip?: number
    distinct?: AbsencesScalarFieldEnum | AbsencesScalarFieldEnum[]
  }

  /**
   * absences create
   */
  export type absencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absences
     */
    select?: absencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absences
     */
    omit?: absencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absencesInclude<ExtArgs> | null
    /**
     * The data needed to create a absences.
     */
    data: XOR<absencesCreateInput, absencesUncheckedCreateInput>
  }

  /**
   * absences createMany
   */
  export type absencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many absences.
     */
    data: absencesCreateManyInput | absencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * absences update
   */
  export type absencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absences
     */
    select?: absencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absences
     */
    omit?: absencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absencesInclude<ExtArgs> | null
    /**
     * The data needed to update a absences.
     */
    data: XOR<absencesUpdateInput, absencesUncheckedUpdateInput>
    /**
     * Choose, which absences to update.
     */
    where: absencesWhereUniqueInput
  }

  /**
   * absences updateMany
   */
  export type absencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update absences.
     */
    data: XOR<absencesUpdateManyMutationInput, absencesUncheckedUpdateManyInput>
    /**
     * Filter which absences to update
     */
    where?: absencesWhereInput
    /**
     * Limit how many absences to update.
     */
    limit?: number
  }

  /**
   * absences upsert
   */
  export type absencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absences
     */
    select?: absencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absences
     */
    omit?: absencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absencesInclude<ExtArgs> | null
    /**
     * The filter to search for the absences to update in case it exists.
     */
    where: absencesWhereUniqueInput
    /**
     * In case the absences found by the `where` argument doesn't exist, create a new absences with this data.
     */
    create: XOR<absencesCreateInput, absencesUncheckedCreateInput>
    /**
     * In case the absences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<absencesUpdateInput, absencesUncheckedUpdateInput>
  }

  /**
   * absences delete
   */
  export type absencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absences
     */
    select?: absencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absences
     */
    omit?: absencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absencesInclude<ExtArgs> | null
    /**
     * Filter which absences to delete.
     */
    where: absencesWhereUniqueInput
  }

  /**
   * absences deleteMany
   */
  export type absencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which absences to delete
     */
    where?: absencesWhereInput
    /**
     * Limit how many absences to delete.
     */
    limit?: number
  }

  /**
   * absences without action
   */
  export type absencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the absences
     */
    select?: absencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the absences
     */
    omit?: absencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: absencesInclude<ExtArgs> | null
  }


  /**
   * Model todo_lists
   */

  export type AggregateTodo_lists = {
    _count: Todo_listsCountAggregateOutputType | null
    _min: Todo_listsMinAggregateOutputType | null
    _max: Todo_listsMaxAggregateOutputType | null
  }

  export type Todo_listsMinAggregateOutputType = {
    id: string | null
    student_class_id: string | null
    date: Date | null
    activity: string | null
    submitted_at: Date | null
  }

  export type Todo_listsMaxAggregateOutputType = {
    id: string | null
    student_class_id: string | null
    date: Date | null
    activity: string | null
    submitted_at: Date | null
  }

  export type Todo_listsCountAggregateOutputType = {
    id: number
    student_class_id: number
    date: number
    activity: number
    submitted_at: number
    _all: number
  }


  export type Todo_listsMinAggregateInputType = {
    id?: true
    student_class_id?: true
    date?: true
    activity?: true
    submitted_at?: true
  }

  export type Todo_listsMaxAggregateInputType = {
    id?: true
    student_class_id?: true
    date?: true
    activity?: true
    submitted_at?: true
  }

  export type Todo_listsCountAggregateInputType = {
    id?: true
    student_class_id?: true
    date?: true
    activity?: true
    submitted_at?: true
    _all?: true
  }

  export type Todo_listsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which todo_lists to aggregate.
     */
    where?: todo_listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of todo_lists to fetch.
     */
    orderBy?: todo_listsOrderByWithRelationInput | todo_listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: todo_listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` todo_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` todo_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned todo_lists
    **/
    _count?: true | Todo_listsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Todo_listsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Todo_listsMaxAggregateInputType
  }

  export type GetTodo_listsAggregateType<T extends Todo_listsAggregateArgs> = {
        [P in keyof T & keyof AggregateTodo_lists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodo_lists[P]>
      : GetScalarType<T[P], AggregateTodo_lists[P]>
  }




  export type todo_listsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: todo_listsWhereInput
    orderBy?: todo_listsOrderByWithAggregationInput | todo_listsOrderByWithAggregationInput[]
    by: Todo_listsScalarFieldEnum[] | Todo_listsScalarFieldEnum
    having?: todo_listsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Todo_listsCountAggregateInputType | true
    _min?: Todo_listsMinAggregateInputType
    _max?: Todo_listsMaxAggregateInputType
  }

  export type Todo_listsGroupByOutputType = {
    id: string
    student_class_id: string
    date: Date
    activity: string
    submitted_at: Date | null
    _count: Todo_listsCountAggregateOutputType | null
    _min: Todo_listsMinAggregateOutputType | null
    _max: Todo_listsMaxAggregateOutputType | null
  }

  type GetTodo_listsGroupByPayload<T extends todo_listsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Todo_listsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Todo_listsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Todo_listsGroupByOutputType[P]>
            : GetScalarType<T[P], Todo_listsGroupByOutputType[P]>
        }
      >
    >


  export type todo_listsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_class_id?: boolean
    date?: boolean
    activity?: boolean
    submitted_at?: boolean
    studentClass?: boolean | student_classDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo_lists"]>



  export type todo_listsSelectScalar = {
    id?: boolean
    student_class_id?: boolean
    date?: boolean
    activity?: boolean
    submitted_at?: boolean
  }

  export type todo_listsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_class_id" | "date" | "activity" | "submitted_at", ExtArgs["result"]["todo_lists"]>
  export type todo_listsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentClass?: boolean | student_classDefaultArgs<ExtArgs>
  }

  export type $todo_listsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "todo_lists"
    objects: {
      studentClass: Prisma.$student_classPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_class_id: string
      date: Date
      activity: string
      submitted_at: Date | null
    }, ExtArgs["result"]["todo_lists"]>
    composites: {}
  }

  type todo_listsGetPayload<S extends boolean | null | undefined | todo_listsDefaultArgs> = $Result.GetResult<Prisma.$todo_listsPayload, S>

  type todo_listsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<todo_listsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Todo_listsCountAggregateInputType | true
    }

  export interface todo_listsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['todo_lists'], meta: { name: 'todo_lists' } }
    /**
     * Find zero or one Todo_lists that matches the filter.
     * @param {todo_listsFindUniqueArgs} args - Arguments to find a Todo_lists
     * @example
     * // Get one Todo_lists
     * const todo_lists = await prisma.todo_lists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends todo_listsFindUniqueArgs>(args: SelectSubset<T, todo_listsFindUniqueArgs<ExtArgs>>): Prisma__todo_listsClient<$Result.GetResult<Prisma.$todo_listsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Todo_lists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {todo_listsFindUniqueOrThrowArgs} args - Arguments to find a Todo_lists
     * @example
     * // Get one Todo_lists
     * const todo_lists = await prisma.todo_lists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends todo_listsFindUniqueOrThrowArgs>(args: SelectSubset<T, todo_listsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__todo_listsClient<$Result.GetResult<Prisma.$todo_listsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todo_listsFindFirstArgs} args - Arguments to find a Todo_lists
     * @example
     * // Get one Todo_lists
     * const todo_lists = await prisma.todo_lists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends todo_listsFindFirstArgs>(args?: SelectSubset<T, todo_listsFindFirstArgs<ExtArgs>>): Prisma__todo_listsClient<$Result.GetResult<Prisma.$todo_listsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo_lists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todo_listsFindFirstOrThrowArgs} args - Arguments to find a Todo_lists
     * @example
     * // Get one Todo_lists
     * const todo_lists = await prisma.todo_lists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends todo_listsFindFirstOrThrowArgs>(args?: SelectSubset<T, todo_listsFindFirstOrThrowArgs<ExtArgs>>): Prisma__todo_listsClient<$Result.GetResult<Prisma.$todo_listsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Todo_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todo_listsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todo_lists
     * const todo_lists = await prisma.todo_lists.findMany()
     * 
     * // Get first 10 Todo_lists
     * const todo_lists = await prisma.todo_lists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todo_listsWithIdOnly = await prisma.todo_lists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends todo_listsFindManyArgs>(args?: SelectSubset<T, todo_listsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$todo_listsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Todo_lists.
     * @param {todo_listsCreateArgs} args - Arguments to create a Todo_lists.
     * @example
     * // Create one Todo_lists
     * const Todo_lists = await prisma.todo_lists.create({
     *   data: {
     *     // ... data to create a Todo_lists
     *   }
     * })
     * 
     */
    create<T extends todo_listsCreateArgs>(args: SelectSubset<T, todo_listsCreateArgs<ExtArgs>>): Prisma__todo_listsClient<$Result.GetResult<Prisma.$todo_listsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Todo_lists.
     * @param {todo_listsCreateManyArgs} args - Arguments to create many Todo_lists.
     * @example
     * // Create many Todo_lists
     * const todo_lists = await prisma.todo_lists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends todo_listsCreateManyArgs>(args?: SelectSubset<T, todo_listsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Todo_lists.
     * @param {todo_listsDeleteArgs} args - Arguments to delete one Todo_lists.
     * @example
     * // Delete one Todo_lists
     * const Todo_lists = await prisma.todo_lists.delete({
     *   where: {
     *     // ... filter to delete one Todo_lists
     *   }
     * })
     * 
     */
    delete<T extends todo_listsDeleteArgs>(args: SelectSubset<T, todo_listsDeleteArgs<ExtArgs>>): Prisma__todo_listsClient<$Result.GetResult<Prisma.$todo_listsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Todo_lists.
     * @param {todo_listsUpdateArgs} args - Arguments to update one Todo_lists.
     * @example
     * // Update one Todo_lists
     * const todo_lists = await prisma.todo_lists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends todo_listsUpdateArgs>(args: SelectSubset<T, todo_listsUpdateArgs<ExtArgs>>): Prisma__todo_listsClient<$Result.GetResult<Prisma.$todo_listsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Todo_lists.
     * @param {todo_listsDeleteManyArgs} args - Arguments to filter Todo_lists to delete.
     * @example
     * // Delete a few Todo_lists
     * const { count } = await prisma.todo_lists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends todo_listsDeleteManyArgs>(args?: SelectSubset<T, todo_listsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todo_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todo_listsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todo_lists
     * const todo_lists = await prisma.todo_lists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends todo_listsUpdateManyArgs>(args: SelectSubset<T, todo_listsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Todo_lists.
     * @param {todo_listsUpsertArgs} args - Arguments to update or create a Todo_lists.
     * @example
     * // Update or create a Todo_lists
     * const todo_lists = await prisma.todo_lists.upsert({
     *   create: {
     *     // ... data to create a Todo_lists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todo_lists we want to update
     *   }
     * })
     */
    upsert<T extends todo_listsUpsertArgs>(args: SelectSubset<T, todo_listsUpsertArgs<ExtArgs>>): Prisma__todo_listsClient<$Result.GetResult<Prisma.$todo_listsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Todo_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todo_listsCountArgs} args - Arguments to filter Todo_lists to count.
     * @example
     * // Count the number of Todo_lists
     * const count = await prisma.todo_lists.count({
     *   where: {
     *     // ... the filter for the Todo_lists we want to count
     *   }
     * })
    **/
    count<T extends todo_listsCountArgs>(
      args?: Subset<T, todo_listsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Todo_listsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todo_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Todo_listsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Todo_listsAggregateArgs>(args: Subset<T, Todo_listsAggregateArgs>): Prisma.PrismaPromise<GetTodo_listsAggregateType<T>>

    /**
     * Group by Todo_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todo_listsGroupByArgs} args - Group by arguments.
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
      T extends todo_listsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: todo_listsGroupByArgs['orderBy'] }
        : { orderBy?: todo_listsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, todo_listsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodo_listsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the todo_lists model
   */
  readonly fields: todo_listsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for todo_lists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__todo_listsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentClass<T extends student_classDefaultArgs<ExtArgs> = {}>(args?: Subset<T, student_classDefaultArgs<ExtArgs>>): Prisma__student_classClient<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the todo_lists model
   */
  interface todo_listsFieldRefs {
    readonly id: FieldRef<"todo_lists", 'String'>
    readonly student_class_id: FieldRef<"todo_lists", 'String'>
    readonly date: FieldRef<"todo_lists", 'DateTime'>
    readonly activity: FieldRef<"todo_lists", 'String'>
    readonly submitted_at: FieldRef<"todo_lists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * todo_lists findUnique
   */
  export type todo_listsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todo_lists
     */
    select?: todo_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todo_lists
     */
    omit?: todo_listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todo_listsInclude<ExtArgs> | null
    /**
     * Filter, which todo_lists to fetch.
     */
    where: todo_listsWhereUniqueInput
  }

  /**
   * todo_lists findUniqueOrThrow
   */
  export type todo_listsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todo_lists
     */
    select?: todo_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todo_lists
     */
    omit?: todo_listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todo_listsInclude<ExtArgs> | null
    /**
     * Filter, which todo_lists to fetch.
     */
    where: todo_listsWhereUniqueInput
  }

  /**
   * todo_lists findFirst
   */
  export type todo_listsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todo_lists
     */
    select?: todo_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todo_lists
     */
    omit?: todo_listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todo_listsInclude<ExtArgs> | null
    /**
     * Filter, which todo_lists to fetch.
     */
    where?: todo_listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of todo_lists to fetch.
     */
    orderBy?: todo_listsOrderByWithRelationInput | todo_listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for todo_lists.
     */
    cursor?: todo_listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` todo_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` todo_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of todo_lists.
     */
    distinct?: Todo_listsScalarFieldEnum | Todo_listsScalarFieldEnum[]
  }

  /**
   * todo_lists findFirstOrThrow
   */
  export type todo_listsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todo_lists
     */
    select?: todo_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todo_lists
     */
    omit?: todo_listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todo_listsInclude<ExtArgs> | null
    /**
     * Filter, which todo_lists to fetch.
     */
    where?: todo_listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of todo_lists to fetch.
     */
    orderBy?: todo_listsOrderByWithRelationInput | todo_listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for todo_lists.
     */
    cursor?: todo_listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` todo_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` todo_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of todo_lists.
     */
    distinct?: Todo_listsScalarFieldEnum | Todo_listsScalarFieldEnum[]
  }

  /**
   * todo_lists findMany
   */
  export type todo_listsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todo_lists
     */
    select?: todo_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todo_lists
     */
    omit?: todo_listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todo_listsInclude<ExtArgs> | null
    /**
     * Filter, which todo_lists to fetch.
     */
    where?: todo_listsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of todo_lists to fetch.
     */
    orderBy?: todo_listsOrderByWithRelationInput | todo_listsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing todo_lists.
     */
    cursor?: todo_listsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` todo_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` todo_lists.
     */
    skip?: number
    distinct?: Todo_listsScalarFieldEnum | Todo_listsScalarFieldEnum[]
  }

  /**
   * todo_lists create
   */
  export type todo_listsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todo_lists
     */
    select?: todo_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todo_lists
     */
    omit?: todo_listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todo_listsInclude<ExtArgs> | null
    /**
     * The data needed to create a todo_lists.
     */
    data: XOR<todo_listsCreateInput, todo_listsUncheckedCreateInput>
  }

  /**
   * todo_lists createMany
   */
  export type todo_listsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many todo_lists.
     */
    data: todo_listsCreateManyInput | todo_listsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * todo_lists update
   */
  export type todo_listsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todo_lists
     */
    select?: todo_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todo_lists
     */
    omit?: todo_listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todo_listsInclude<ExtArgs> | null
    /**
     * The data needed to update a todo_lists.
     */
    data: XOR<todo_listsUpdateInput, todo_listsUncheckedUpdateInput>
    /**
     * Choose, which todo_lists to update.
     */
    where: todo_listsWhereUniqueInput
  }

  /**
   * todo_lists updateMany
   */
  export type todo_listsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update todo_lists.
     */
    data: XOR<todo_listsUpdateManyMutationInput, todo_listsUncheckedUpdateManyInput>
    /**
     * Filter which todo_lists to update
     */
    where?: todo_listsWhereInput
    /**
     * Limit how many todo_lists to update.
     */
    limit?: number
  }

  /**
   * todo_lists upsert
   */
  export type todo_listsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todo_lists
     */
    select?: todo_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todo_lists
     */
    omit?: todo_listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todo_listsInclude<ExtArgs> | null
    /**
     * The filter to search for the todo_lists to update in case it exists.
     */
    where: todo_listsWhereUniqueInput
    /**
     * In case the todo_lists found by the `where` argument doesn't exist, create a new todo_lists with this data.
     */
    create: XOR<todo_listsCreateInput, todo_listsUncheckedCreateInput>
    /**
     * In case the todo_lists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<todo_listsUpdateInput, todo_listsUncheckedUpdateInput>
  }

  /**
   * todo_lists delete
   */
  export type todo_listsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todo_lists
     */
    select?: todo_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todo_lists
     */
    omit?: todo_listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todo_listsInclude<ExtArgs> | null
    /**
     * Filter which todo_lists to delete.
     */
    where: todo_listsWhereUniqueInput
  }

  /**
   * todo_lists deleteMany
   */
  export type todo_listsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which todo_lists to delete
     */
    where?: todo_listsWhereInput
    /**
     * Limit how many todo_lists to delete.
     */
    limit?: number
  }

  /**
   * todo_lists without action
   */
  export type todo_listsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todo_lists
     */
    select?: todo_listsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todo_lists
     */
    omit?: todo_listsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todo_listsInclude<ExtArgs> | null
  }


  /**
   * Model classes
   */

  export type AggregateClasses = {
    _count: ClassesCountAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  export type ClassesMinAggregateOutputType = {
    id: string | null
    className: string | null
    academicYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassesMaxAggregateOutputType = {
    id: string | null
    className: string | null
    academicYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassesCountAggregateOutputType = {
    id: number
    className: number
    academicYear: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassesMinAggregateInputType = {
    id?: true
    className?: true
    academicYear?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassesMaxAggregateInputType = {
    id?: true
    className?: true
    academicYear?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassesCountAggregateInputType = {
    id?: true
    className?: true
    academicYear?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classes to aggregate.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned classes
    **/
    _count?: true | ClassesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassesMaxAggregateInputType
  }

  export type GetClassesAggregateType<T extends ClassesAggregateArgs> = {
        [P in keyof T & keyof AggregateClasses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasses[P]>
      : GetScalarType<T[P], AggregateClasses[P]>
  }




  export type classesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classesWhereInput
    orderBy?: classesOrderByWithAggregationInput | classesOrderByWithAggregationInput[]
    by: ClassesScalarFieldEnum[] | ClassesScalarFieldEnum
    having?: classesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassesCountAggregateInputType | true
    _min?: ClassesMinAggregateInputType
    _max?: ClassesMaxAggregateInputType
  }

  export type ClassesGroupByOutputType = {
    id: string
    className: string
    academicYear: string
    createdAt: Date
    updatedAt: Date
    _count: ClassesCountAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  type GetClassesGroupByPayload<T extends classesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassesGroupByOutputType[P]>
            : GetScalarType<T[P], ClassesGroupByOutputType[P]>
        }
      >
    >


  export type classesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    academicYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentClasses?: boolean | classes$studentClassesArgs<ExtArgs>
    _count?: boolean | ClassesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classes"]>



  export type classesSelectScalar = {
    id?: boolean
    className?: boolean
    academicYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type classesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "className" | "academicYear" | "createdAt" | "updatedAt", ExtArgs["result"]["classes"]>
  export type classesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentClasses?: boolean | classes$studentClassesArgs<ExtArgs>
    _count?: boolean | ClassesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $classesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "classes"
    objects: {
      studentClasses: Prisma.$student_classPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      className: string
      academicYear: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classes"]>
    composites: {}
  }

  type classesGetPayload<S extends boolean | null | undefined | classesDefaultArgs> = $Result.GetResult<Prisma.$classesPayload, S>

  type classesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<classesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassesCountAggregateInputType | true
    }

  export interface classesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['classes'], meta: { name: 'classes' } }
    /**
     * Find zero or one Classes that matches the filter.
     * @param {classesFindUniqueArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends classesFindUniqueArgs>(args: SelectSubset<T, classesFindUniqueArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {classesFindUniqueOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends classesFindUniqueOrThrowArgs>(args: SelectSubset<T, classesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindFirstArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends classesFindFirstArgs>(args?: SelectSubset<T, classesFindFirstArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindFirstOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends classesFindFirstOrThrowArgs>(args?: SelectSubset<T, classesFindFirstOrThrowArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classes.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classesWithIdOnly = await prisma.classes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends classesFindManyArgs>(args?: SelectSubset<T, classesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classes.
     * @param {classesCreateArgs} args - Arguments to create a Classes.
     * @example
     * // Create one Classes
     * const Classes = await prisma.classes.create({
     *   data: {
     *     // ... data to create a Classes
     *   }
     * })
     * 
     */
    create<T extends classesCreateArgs>(args: SelectSubset<T, classesCreateArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {classesCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends classesCreateManyArgs>(args?: SelectSubset<T, classesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Classes.
     * @param {classesDeleteArgs} args - Arguments to delete one Classes.
     * @example
     * // Delete one Classes
     * const Classes = await prisma.classes.delete({
     *   where: {
     *     // ... filter to delete one Classes
     *   }
     * })
     * 
     */
    delete<T extends classesDeleteArgs>(args: SelectSubset<T, classesDeleteArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classes.
     * @param {classesUpdateArgs} args - Arguments to update one Classes.
     * @example
     * // Update one Classes
     * const classes = await prisma.classes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends classesUpdateArgs>(args: SelectSubset<T, classesUpdateArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {classesDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends classesDeleteManyArgs>(args?: SelectSubset<T, classesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends classesUpdateManyArgs>(args: SelectSubset<T, classesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Classes.
     * @param {classesUpsertArgs} args - Arguments to update or create a Classes.
     * @example
     * // Update or create a Classes
     * const classes = await prisma.classes.upsert({
     *   create: {
     *     // ... data to create a Classes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classes we want to update
     *   }
     * })
     */
    upsert<T extends classesUpsertArgs>(args: SelectSubset<T, classesUpsertArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classes.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends classesCountArgs>(
      args?: Subset<T, classesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassesAggregateArgs>(args: Subset<T, ClassesAggregateArgs>): Prisma.PrismaPromise<GetClassesAggregateType<T>>

    /**
     * Group by Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesGroupByArgs} args - Group by arguments.
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
      T extends classesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: classesGroupByArgs['orderBy'] }
        : { orderBy?: classesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, classesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the classes model
   */
  readonly fields: classesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for classes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__classesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentClasses<T extends classes$studentClassesArgs<ExtArgs> = {}>(args?: Subset<T, classes$studentClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_classPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the classes model
   */
  interface classesFieldRefs {
    readonly id: FieldRef<"classes", 'String'>
    readonly className: FieldRef<"classes", 'String'>
    readonly academicYear: FieldRef<"classes", 'String'>
    readonly createdAt: FieldRef<"classes", 'DateTime'>
    readonly updatedAt: FieldRef<"classes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * classes findUnique
   */
  export type classesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes findUniqueOrThrow
   */
  export type classesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes findFirst
   */
  export type classesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes findFirstOrThrow
   */
  export type classesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes findMany
   */
  export type classesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes create
   */
  export type classesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * The data needed to create a classes.
     */
    data: XOR<classesCreateInput, classesUncheckedCreateInput>
  }

  /**
   * classes createMany
   */
  export type classesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many classes.
     */
    data: classesCreateManyInput | classesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * classes update
   */
  export type classesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * The data needed to update a classes.
     */
    data: XOR<classesUpdateInput, classesUncheckedUpdateInput>
    /**
     * Choose, which classes to update.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes updateMany
   */
  export type classesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update classes.
     */
    data: XOR<classesUpdateManyMutationInput, classesUncheckedUpdateManyInput>
    /**
     * Filter which classes to update
     */
    where?: classesWhereInput
    /**
     * Limit how many classes to update.
     */
    limit?: number
  }

  /**
   * classes upsert
   */
  export type classesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * The filter to search for the classes to update in case it exists.
     */
    where: classesWhereUniqueInput
    /**
     * In case the classes found by the `where` argument doesn't exist, create a new classes with this data.
     */
    create: XOR<classesCreateInput, classesUncheckedCreateInput>
    /**
     * In case the classes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<classesUpdateInput, classesUncheckedUpdateInput>
  }

  /**
   * classes delete
   */
  export type classesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter which classes to delete.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes deleteMany
   */
  export type classesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classes to delete
     */
    where?: classesWhereInput
    /**
     * Limit how many classes to delete.
     */
    limit?: number
  }

  /**
   * classes.studentClasses
   */
  export type classes$studentClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_class
     */
    select?: student_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_class
     */
    omit?: student_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_classInclude<ExtArgs> | null
    where?: student_classWhereInput
    orderBy?: student_classOrderByWithRelationInput | student_classOrderByWithRelationInput[]
    cursor?: student_classWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_classScalarFieldEnum | Student_classScalarFieldEnum[]
  }

  /**
   * classes without action
   */
  export type classesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    email_verified_at: 'email_verified_at',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Student_classScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    class_id: 'class_id',
    nis: 'nis',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Student_classScalarFieldEnum = (typeof Student_classScalarFieldEnum)[keyof typeof Student_classScalarFieldEnum]


  export const AbsencesScalarFieldEnum: {
    id: 'id',
    student_class_id: 'student_class_id',
    date: 'date',
    absence_time: 'absence_time',
    status: 'status',
    has_todo: 'has_todo'
  };

  export type AbsencesScalarFieldEnum = (typeof AbsencesScalarFieldEnum)[keyof typeof AbsencesScalarFieldEnum]


  export const Todo_listsScalarFieldEnum: {
    id: 'id',
    student_class_id: 'student_class_id',
    date: 'date',
    activity: 'activity',
    submitted_at: 'submitted_at'
  };

  export type Todo_listsScalarFieldEnum = (typeof Todo_listsScalarFieldEnum)[keyof typeof Todo_listsScalarFieldEnum]


  export const ClassesScalarFieldEnum: {
    id: 'id',
    className: 'className',
    academicYear: 'academicYear',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassesScalarFieldEnum = (typeof ClassesScalarFieldEnum)[keyof typeof ClassesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const usersOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const student_classOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    class_id: 'class_id'
  };

  export type student_classOrderByRelevanceFieldEnum = (typeof student_classOrderByRelevanceFieldEnum)[keyof typeof student_classOrderByRelevanceFieldEnum]


  export const absencesOrderByRelevanceFieldEnum: {
    id: 'id',
    student_class_id: 'student_class_id'
  };

  export type absencesOrderByRelevanceFieldEnum = (typeof absencesOrderByRelevanceFieldEnum)[keyof typeof absencesOrderByRelevanceFieldEnum]


  export const todo_listsOrderByRelevanceFieldEnum: {
    id: 'id',
    student_class_id: 'student_class_id',
    activity: 'activity'
  };

  export type todo_listsOrderByRelevanceFieldEnum = (typeof todo_listsOrderByRelevanceFieldEnum)[keyof typeof todo_listsOrderByRelevanceFieldEnum]


  export const classesOrderByRelevanceFieldEnum: {
    id: 'id',
    className: 'className',
    academicYear: 'academicYear'
  };

  export type classesOrderByRelevanceFieldEnum = (typeof classesOrderByRelevanceFieldEnum)[keyof typeof classesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    studentClasses?: Student_classListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentClasses?: student_classOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    studentClasses?: Student_classListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    email_verified_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type student_classWhereInput = {
    AND?: student_classWhereInput | student_classWhereInput[]
    OR?: student_classWhereInput[]
    NOT?: student_classWhereInput | student_classWhereInput[]
    id?: StringFilter<"student_class"> | string
    user_id?: StringFilter<"student_class"> | string
    class_id?: StringFilter<"student_class"> | string
    nis?: IntFilter<"student_class"> | number
    createdAt?: DateTimeFilter<"student_class"> | Date | string
    updatedAt?: DateTimeFilter<"student_class"> | Date | string
    absences?: AbsencesListRelationFilter
    todos?: Todo_listsListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    class?: XOR<ClassesScalarRelationFilter, classesWhereInput>
  }

  export type student_classOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    nis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    absences?: absencesOrderByRelationAggregateInput
    todos?: todo_listsOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
    class?: classesOrderByWithRelationInput
    _relevance?: student_classOrderByRelevanceInput
  }

  export type student_classWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: student_classWhereInput | student_classWhereInput[]
    OR?: student_classWhereInput[]
    NOT?: student_classWhereInput | student_classWhereInput[]
    user_id?: StringFilter<"student_class"> | string
    class_id?: StringFilter<"student_class"> | string
    nis?: IntFilter<"student_class"> | number
    createdAt?: DateTimeFilter<"student_class"> | Date | string
    updatedAt?: DateTimeFilter<"student_class"> | Date | string
    absences?: AbsencesListRelationFilter
    todos?: Todo_listsListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    class?: XOR<ClassesScalarRelationFilter, classesWhereInput>
  }, "id">

  export type student_classOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    nis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: student_classCountOrderByAggregateInput
    _avg?: student_classAvgOrderByAggregateInput
    _max?: student_classMaxOrderByAggregateInput
    _min?: student_classMinOrderByAggregateInput
    _sum?: student_classSumOrderByAggregateInput
  }

  export type student_classScalarWhereWithAggregatesInput = {
    AND?: student_classScalarWhereWithAggregatesInput | student_classScalarWhereWithAggregatesInput[]
    OR?: student_classScalarWhereWithAggregatesInput[]
    NOT?: student_classScalarWhereWithAggregatesInput | student_classScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"student_class"> | string
    user_id?: StringWithAggregatesFilter<"student_class"> | string
    class_id?: StringWithAggregatesFilter<"student_class"> | string
    nis?: IntWithAggregatesFilter<"student_class"> | number
    createdAt?: DateTimeWithAggregatesFilter<"student_class"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"student_class"> | Date | string
  }

  export type absencesWhereInput = {
    AND?: absencesWhereInput | absencesWhereInput[]
    OR?: absencesWhereInput[]
    NOT?: absencesWhereInput | absencesWhereInput[]
    id?: StringFilter<"absences"> | string
    student_class_id?: StringFilter<"absences"> | string
    date?: DateTimeFilter<"absences"> | Date | string
    absence_time?: DateTimeFilter<"absences"> | Date | string
    status?: EnumStatusFilter<"absences"> | $Enums.Status
    has_todo?: BoolFilter<"absences"> | boolean
    studentClass?: XOR<Student_classScalarRelationFilter, student_classWhereInput>
  }

  export type absencesOrderByWithRelationInput = {
    id?: SortOrder
    student_class_id?: SortOrder
    date?: SortOrder
    absence_time?: SortOrder
    status?: SortOrder
    has_todo?: SortOrder
    studentClass?: student_classOrderByWithRelationInput
    _relevance?: absencesOrderByRelevanceInput
  }

  export type absencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: absencesWhereInput | absencesWhereInput[]
    OR?: absencesWhereInput[]
    NOT?: absencesWhereInput | absencesWhereInput[]
    student_class_id?: StringFilter<"absences"> | string
    date?: DateTimeFilter<"absences"> | Date | string
    absence_time?: DateTimeFilter<"absences"> | Date | string
    status?: EnumStatusFilter<"absences"> | $Enums.Status
    has_todo?: BoolFilter<"absences"> | boolean
    studentClass?: XOR<Student_classScalarRelationFilter, student_classWhereInput>
  }, "id">

  export type absencesOrderByWithAggregationInput = {
    id?: SortOrder
    student_class_id?: SortOrder
    date?: SortOrder
    absence_time?: SortOrder
    status?: SortOrder
    has_todo?: SortOrder
    _count?: absencesCountOrderByAggregateInput
    _max?: absencesMaxOrderByAggregateInput
    _min?: absencesMinOrderByAggregateInput
  }

  export type absencesScalarWhereWithAggregatesInput = {
    AND?: absencesScalarWhereWithAggregatesInput | absencesScalarWhereWithAggregatesInput[]
    OR?: absencesScalarWhereWithAggregatesInput[]
    NOT?: absencesScalarWhereWithAggregatesInput | absencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"absences"> | string
    student_class_id?: StringWithAggregatesFilter<"absences"> | string
    date?: DateTimeWithAggregatesFilter<"absences"> | Date | string
    absence_time?: DateTimeWithAggregatesFilter<"absences"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"absences"> | $Enums.Status
    has_todo?: BoolWithAggregatesFilter<"absences"> | boolean
  }

  export type todo_listsWhereInput = {
    AND?: todo_listsWhereInput | todo_listsWhereInput[]
    OR?: todo_listsWhereInput[]
    NOT?: todo_listsWhereInput | todo_listsWhereInput[]
    id?: StringFilter<"todo_lists"> | string
    student_class_id?: StringFilter<"todo_lists"> | string
    date?: DateTimeFilter<"todo_lists"> | Date | string
    activity?: StringFilter<"todo_lists"> | string
    submitted_at?: DateTimeNullableFilter<"todo_lists"> | Date | string | null
    studentClass?: XOR<Student_classScalarRelationFilter, student_classWhereInput>
  }

  export type todo_listsOrderByWithRelationInput = {
    id?: SortOrder
    student_class_id?: SortOrder
    date?: SortOrder
    activity?: SortOrder
    submitted_at?: SortOrderInput | SortOrder
    studentClass?: student_classOrderByWithRelationInput
    _relevance?: todo_listsOrderByRelevanceInput
  }

  export type todo_listsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: todo_listsWhereInput | todo_listsWhereInput[]
    OR?: todo_listsWhereInput[]
    NOT?: todo_listsWhereInput | todo_listsWhereInput[]
    student_class_id?: StringFilter<"todo_lists"> | string
    date?: DateTimeFilter<"todo_lists"> | Date | string
    activity?: StringFilter<"todo_lists"> | string
    submitted_at?: DateTimeNullableFilter<"todo_lists"> | Date | string | null
    studentClass?: XOR<Student_classScalarRelationFilter, student_classWhereInput>
  }, "id">

  export type todo_listsOrderByWithAggregationInput = {
    id?: SortOrder
    student_class_id?: SortOrder
    date?: SortOrder
    activity?: SortOrder
    submitted_at?: SortOrderInput | SortOrder
    _count?: todo_listsCountOrderByAggregateInput
    _max?: todo_listsMaxOrderByAggregateInput
    _min?: todo_listsMinOrderByAggregateInput
  }

  export type todo_listsScalarWhereWithAggregatesInput = {
    AND?: todo_listsScalarWhereWithAggregatesInput | todo_listsScalarWhereWithAggregatesInput[]
    OR?: todo_listsScalarWhereWithAggregatesInput[]
    NOT?: todo_listsScalarWhereWithAggregatesInput | todo_listsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"todo_lists"> | string
    student_class_id?: StringWithAggregatesFilter<"todo_lists"> | string
    date?: DateTimeWithAggregatesFilter<"todo_lists"> | Date | string
    activity?: StringWithAggregatesFilter<"todo_lists"> | string
    submitted_at?: DateTimeNullableWithAggregatesFilter<"todo_lists"> | Date | string | null
  }

  export type classesWhereInput = {
    AND?: classesWhereInput | classesWhereInput[]
    OR?: classesWhereInput[]
    NOT?: classesWhereInput | classesWhereInput[]
    id?: StringFilter<"classes"> | string
    className?: StringFilter<"classes"> | string
    academicYear?: StringFilter<"classes"> | string
    createdAt?: DateTimeFilter<"classes"> | Date | string
    updatedAt?: DateTimeFilter<"classes"> | Date | string
    studentClasses?: Student_classListRelationFilter
  }

  export type classesOrderByWithRelationInput = {
    id?: SortOrder
    className?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentClasses?: student_classOrderByRelationAggregateInput
    _relevance?: classesOrderByRelevanceInput
  }

  export type classesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: classesWhereInput | classesWhereInput[]
    OR?: classesWhereInput[]
    NOT?: classesWhereInput | classesWhereInput[]
    className?: StringFilter<"classes"> | string
    academicYear?: StringFilter<"classes"> | string
    createdAt?: DateTimeFilter<"classes"> | Date | string
    updatedAt?: DateTimeFilter<"classes"> | Date | string
    studentClasses?: Student_classListRelationFilter
  }, "id">

  export type classesOrderByWithAggregationInput = {
    id?: SortOrder
    className?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: classesCountOrderByAggregateInput
    _max?: classesMaxOrderByAggregateInput
    _min?: classesMinOrderByAggregateInput
  }

  export type classesScalarWhereWithAggregatesInput = {
    AND?: classesScalarWhereWithAggregatesInput | classesScalarWhereWithAggregatesInput[]
    OR?: classesScalarWhereWithAggregatesInput[]
    NOT?: classesScalarWhereWithAggregatesInput | classesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"classes"> | string
    className?: StringWithAggregatesFilter<"classes"> | string
    academicYear?: StringWithAggregatesFilter<"classes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"classes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"classes"> | Date | string
  }

  export type usersCreateInput = {
    id?: string
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    studentClasses?: student_classCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    studentClasses?: student_classUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentClasses?: student_classUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentClasses?: student_classUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type student_classCreateInput = {
    id?: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
    absences?: absencesCreateNestedManyWithoutStudentClassInput
    todos?: todo_listsCreateNestedManyWithoutStudentClassInput
    user: usersCreateNestedOneWithoutStudentClassesInput
    class: classesCreateNestedOneWithoutStudentClassesInput
  }

  export type student_classUncheckedCreateInput = {
    id?: string
    user_id: string
    class_id: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
    absences?: absencesUncheckedCreateNestedManyWithoutStudentClassInput
    todos?: todo_listsUncheckedCreateNestedManyWithoutStudentClassInput
  }

  export type student_classUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absences?: absencesUpdateManyWithoutStudentClassNestedInput
    todos?: todo_listsUpdateManyWithoutStudentClassNestedInput
    user?: usersUpdateOneRequiredWithoutStudentClassesNestedInput
    class?: classesUpdateOneRequiredWithoutStudentClassesNestedInput
  }

  export type student_classUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absences?: absencesUncheckedUpdateManyWithoutStudentClassNestedInput
    todos?: todo_listsUncheckedUpdateManyWithoutStudentClassNestedInput
  }

  export type student_classCreateManyInput = {
    id?: string
    user_id: string
    class_id: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type student_classUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type student_classUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type absencesCreateInput = {
    id?: string
    date: Date | string
    absence_time: Date | string
    status?: $Enums.Status
    has_todo?: boolean
    studentClass: student_classCreateNestedOneWithoutAbsencesInput
  }

  export type absencesUncheckedCreateInput = {
    id?: string
    student_class_id: string
    date: Date | string
    absence_time: Date | string
    status?: $Enums.Status
    has_todo?: boolean
  }

  export type absencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    absence_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    has_todo?: BoolFieldUpdateOperationsInput | boolean
    studentClass?: student_classUpdateOneRequiredWithoutAbsencesNestedInput
  }

  export type absencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_class_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    absence_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    has_todo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type absencesCreateManyInput = {
    id?: string
    student_class_id: string
    date: Date | string
    absence_time: Date | string
    status?: $Enums.Status
    has_todo?: boolean
  }

  export type absencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    absence_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    has_todo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type absencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_class_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    absence_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    has_todo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type todo_listsCreateInput = {
    id?: string
    date: Date | string
    activity: string
    submitted_at?: Date | string | null
    studentClass: student_classCreateNestedOneWithoutTodosInput
  }

  export type todo_listsUncheckedCreateInput = {
    id?: string
    student_class_id: string
    date: Date | string
    activity: string
    submitted_at?: Date | string | null
  }

  export type todo_listsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: StringFieldUpdateOperationsInput | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentClass?: student_classUpdateOneRequiredWithoutTodosNestedInput
  }

  export type todo_listsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_class_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: StringFieldUpdateOperationsInput | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type todo_listsCreateManyInput = {
    id?: string
    student_class_id: string
    date: Date | string
    activity: string
    submitted_at?: Date | string | null
  }

  export type todo_listsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: StringFieldUpdateOperationsInput | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type todo_listsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_class_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: StringFieldUpdateOperationsInput | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type classesCreateInput = {
    id?: string
    className: string
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentClasses?: student_classCreateNestedManyWithoutClassInput
  }

  export type classesUncheckedCreateInput = {
    id?: string
    className: string
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentClasses?: student_classUncheckedCreateNestedManyWithoutClassInput
  }

  export type classesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentClasses?: student_classUpdateManyWithoutClassNestedInput
  }

  export type classesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentClasses?: student_classUncheckedUpdateManyWithoutClassNestedInput
  }

  export type classesCreateManyInput = {
    id?: string
    className: string
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type classesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type classesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Student_classListRelationFilter = {
    every?: student_classWhereInput
    some?: student_classWhereInput
    none?: student_classWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type student_classOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AbsencesListRelationFilter = {
    every?: absencesWhereInput
    some?: absencesWhereInput
    none?: absencesWhereInput
  }

  export type Todo_listsListRelationFilter = {
    every?: todo_listsWhereInput
    some?: todo_listsWhereInput
    none?: todo_listsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type ClassesScalarRelationFilter = {
    is?: classesWhereInput
    isNot?: classesWhereInput
  }

  export type absencesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type todo_listsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type student_classOrderByRelevanceInput = {
    fields: student_classOrderByRelevanceFieldEnum | student_classOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type student_classCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    nis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type student_classAvgOrderByAggregateInput = {
    nis?: SortOrder
  }

  export type student_classMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    nis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type student_classMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    nis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type student_classSumOrderByAggregateInput = {
    nis?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Student_classScalarRelationFilter = {
    is?: student_classWhereInput
    isNot?: student_classWhereInput
  }

  export type absencesOrderByRelevanceInput = {
    fields: absencesOrderByRelevanceFieldEnum | absencesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type absencesCountOrderByAggregateInput = {
    id?: SortOrder
    student_class_id?: SortOrder
    date?: SortOrder
    absence_time?: SortOrder
    status?: SortOrder
    has_todo?: SortOrder
  }

  export type absencesMaxOrderByAggregateInput = {
    id?: SortOrder
    student_class_id?: SortOrder
    date?: SortOrder
    absence_time?: SortOrder
    status?: SortOrder
    has_todo?: SortOrder
  }

  export type absencesMinOrderByAggregateInput = {
    id?: SortOrder
    student_class_id?: SortOrder
    date?: SortOrder
    absence_time?: SortOrder
    status?: SortOrder
    has_todo?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type todo_listsOrderByRelevanceInput = {
    fields: todo_listsOrderByRelevanceFieldEnum | todo_listsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type todo_listsCountOrderByAggregateInput = {
    id?: SortOrder
    student_class_id?: SortOrder
    date?: SortOrder
    activity?: SortOrder
    submitted_at?: SortOrder
  }

  export type todo_listsMaxOrderByAggregateInput = {
    id?: SortOrder
    student_class_id?: SortOrder
    date?: SortOrder
    activity?: SortOrder
    submitted_at?: SortOrder
  }

  export type todo_listsMinOrderByAggregateInput = {
    id?: SortOrder
    student_class_id?: SortOrder
    date?: SortOrder
    activity?: SortOrder
    submitted_at?: SortOrder
  }

  export type classesOrderByRelevanceInput = {
    fields: classesOrderByRelevanceFieldEnum | classesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type classesCountOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type classesMaxOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type classesMinOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type student_classCreateNestedManyWithoutUserInput = {
    create?: XOR<student_classCreateWithoutUserInput, student_classUncheckedCreateWithoutUserInput> | student_classCreateWithoutUserInput[] | student_classUncheckedCreateWithoutUserInput[]
    connectOrCreate?: student_classCreateOrConnectWithoutUserInput | student_classCreateOrConnectWithoutUserInput[]
    createMany?: student_classCreateManyUserInputEnvelope
    connect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
  }

  export type student_classUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<student_classCreateWithoutUserInput, student_classUncheckedCreateWithoutUserInput> | student_classCreateWithoutUserInput[] | student_classUncheckedCreateWithoutUserInput[]
    connectOrCreate?: student_classCreateOrConnectWithoutUserInput | student_classCreateOrConnectWithoutUserInput[]
    createMany?: student_classCreateManyUserInputEnvelope
    connect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type student_classUpdateManyWithoutUserNestedInput = {
    create?: XOR<student_classCreateWithoutUserInput, student_classUncheckedCreateWithoutUserInput> | student_classCreateWithoutUserInput[] | student_classUncheckedCreateWithoutUserInput[]
    connectOrCreate?: student_classCreateOrConnectWithoutUserInput | student_classCreateOrConnectWithoutUserInput[]
    upsert?: student_classUpsertWithWhereUniqueWithoutUserInput | student_classUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: student_classCreateManyUserInputEnvelope
    set?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    disconnect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    delete?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    connect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    update?: student_classUpdateWithWhereUniqueWithoutUserInput | student_classUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: student_classUpdateManyWithWhereWithoutUserInput | student_classUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: student_classScalarWhereInput | student_classScalarWhereInput[]
  }

  export type student_classUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<student_classCreateWithoutUserInput, student_classUncheckedCreateWithoutUserInput> | student_classCreateWithoutUserInput[] | student_classUncheckedCreateWithoutUserInput[]
    connectOrCreate?: student_classCreateOrConnectWithoutUserInput | student_classCreateOrConnectWithoutUserInput[]
    upsert?: student_classUpsertWithWhereUniqueWithoutUserInput | student_classUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: student_classCreateManyUserInputEnvelope
    set?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    disconnect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    delete?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    connect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    update?: student_classUpdateWithWhereUniqueWithoutUserInput | student_classUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: student_classUpdateManyWithWhereWithoutUserInput | student_classUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: student_classScalarWhereInput | student_classScalarWhereInput[]
  }

  export type absencesCreateNestedManyWithoutStudentClassInput = {
    create?: XOR<absencesCreateWithoutStudentClassInput, absencesUncheckedCreateWithoutStudentClassInput> | absencesCreateWithoutStudentClassInput[] | absencesUncheckedCreateWithoutStudentClassInput[]
    connectOrCreate?: absencesCreateOrConnectWithoutStudentClassInput | absencesCreateOrConnectWithoutStudentClassInput[]
    createMany?: absencesCreateManyStudentClassInputEnvelope
    connect?: absencesWhereUniqueInput | absencesWhereUniqueInput[]
  }

  export type todo_listsCreateNestedManyWithoutStudentClassInput = {
    create?: XOR<todo_listsCreateWithoutStudentClassInput, todo_listsUncheckedCreateWithoutStudentClassInput> | todo_listsCreateWithoutStudentClassInput[] | todo_listsUncheckedCreateWithoutStudentClassInput[]
    connectOrCreate?: todo_listsCreateOrConnectWithoutStudentClassInput | todo_listsCreateOrConnectWithoutStudentClassInput[]
    createMany?: todo_listsCreateManyStudentClassInputEnvelope
    connect?: todo_listsWhereUniqueInput | todo_listsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutStudentClassesInput = {
    create?: XOR<usersCreateWithoutStudentClassesInput, usersUncheckedCreateWithoutStudentClassesInput>
    connectOrCreate?: usersCreateOrConnectWithoutStudentClassesInput
    connect?: usersWhereUniqueInput
  }

  export type classesCreateNestedOneWithoutStudentClassesInput = {
    create?: XOR<classesCreateWithoutStudentClassesInput, classesUncheckedCreateWithoutStudentClassesInput>
    connectOrCreate?: classesCreateOrConnectWithoutStudentClassesInput
    connect?: classesWhereUniqueInput
  }

  export type absencesUncheckedCreateNestedManyWithoutStudentClassInput = {
    create?: XOR<absencesCreateWithoutStudentClassInput, absencesUncheckedCreateWithoutStudentClassInput> | absencesCreateWithoutStudentClassInput[] | absencesUncheckedCreateWithoutStudentClassInput[]
    connectOrCreate?: absencesCreateOrConnectWithoutStudentClassInput | absencesCreateOrConnectWithoutStudentClassInput[]
    createMany?: absencesCreateManyStudentClassInputEnvelope
    connect?: absencesWhereUniqueInput | absencesWhereUniqueInput[]
  }

  export type todo_listsUncheckedCreateNestedManyWithoutStudentClassInput = {
    create?: XOR<todo_listsCreateWithoutStudentClassInput, todo_listsUncheckedCreateWithoutStudentClassInput> | todo_listsCreateWithoutStudentClassInput[] | todo_listsUncheckedCreateWithoutStudentClassInput[]
    connectOrCreate?: todo_listsCreateOrConnectWithoutStudentClassInput | todo_listsCreateOrConnectWithoutStudentClassInput[]
    createMany?: todo_listsCreateManyStudentClassInputEnvelope
    connect?: todo_listsWhereUniqueInput | todo_listsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type absencesUpdateManyWithoutStudentClassNestedInput = {
    create?: XOR<absencesCreateWithoutStudentClassInput, absencesUncheckedCreateWithoutStudentClassInput> | absencesCreateWithoutStudentClassInput[] | absencesUncheckedCreateWithoutStudentClassInput[]
    connectOrCreate?: absencesCreateOrConnectWithoutStudentClassInput | absencesCreateOrConnectWithoutStudentClassInput[]
    upsert?: absencesUpsertWithWhereUniqueWithoutStudentClassInput | absencesUpsertWithWhereUniqueWithoutStudentClassInput[]
    createMany?: absencesCreateManyStudentClassInputEnvelope
    set?: absencesWhereUniqueInput | absencesWhereUniqueInput[]
    disconnect?: absencesWhereUniqueInput | absencesWhereUniqueInput[]
    delete?: absencesWhereUniqueInput | absencesWhereUniqueInput[]
    connect?: absencesWhereUniqueInput | absencesWhereUniqueInput[]
    update?: absencesUpdateWithWhereUniqueWithoutStudentClassInput | absencesUpdateWithWhereUniqueWithoutStudentClassInput[]
    updateMany?: absencesUpdateManyWithWhereWithoutStudentClassInput | absencesUpdateManyWithWhereWithoutStudentClassInput[]
    deleteMany?: absencesScalarWhereInput | absencesScalarWhereInput[]
  }

  export type todo_listsUpdateManyWithoutStudentClassNestedInput = {
    create?: XOR<todo_listsCreateWithoutStudentClassInput, todo_listsUncheckedCreateWithoutStudentClassInput> | todo_listsCreateWithoutStudentClassInput[] | todo_listsUncheckedCreateWithoutStudentClassInput[]
    connectOrCreate?: todo_listsCreateOrConnectWithoutStudentClassInput | todo_listsCreateOrConnectWithoutStudentClassInput[]
    upsert?: todo_listsUpsertWithWhereUniqueWithoutStudentClassInput | todo_listsUpsertWithWhereUniqueWithoutStudentClassInput[]
    createMany?: todo_listsCreateManyStudentClassInputEnvelope
    set?: todo_listsWhereUniqueInput | todo_listsWhereUniqueInput[]
    disconnect?: todo_listsWhereUniqueInput | todo_listsWhereUniqueInput[]
    delete?: todo_listsWhereUniqueInput | todo_listsWhereUniqueInput[]
    connect?: todo_listsWhereUniqueInput | todo_listsWhereUniqueInput[]
    update?: todo_listsUpdateWithWhereUniqueWithoutStudentClassInput | todo_listsUpdateWithWhereUniqueWithoutStudentClassInput[]
    updateMany?: todo_listsUpdateManyWithWhereWithoutStudentClassInput | todo_listsUpdateManyWithWhereWithoutStudentClassInput[]
    deleteMany?: todo_listsScalarWhereInput | todo_listsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutStudentClassesNestedInput = {
    create?: XOR<usersCreateWithoutStudentClassesInput, usersUncheckedCreateWithoutStudentClassesInput>
    connectOrCreate?: usersCreateOrConnectWithoutStudentClassesInput
    upsert?: usersUpsertWithoutStudentClassesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutStudentClassesInput, usersUpdateWithoutStudentClassesInput>, usersUncheckedUpdateWithoutStudentClassesInput>
  }

  export type classesUpdateOneRequiredWithoutStudentClassesNestedInput = {
    create?: XOR<classesCreateWithoutStudentClassesInput, classesUncheckedCreateWithoutStudentClassesInput>
    connectOrCreate?: classesCreateOrConnectWithoutStudentClassesInput
    upsert?: classesUpsertWithoutStudentClassesInput
    connect?: classesWhereUniqueInput
    update?: XOR<XOR<classesUpdateToOneWithWhereWithoutStudentClassesInput, classesUpdateWithoutStudentClassesInput>, classesUncheckedUpdateWithoutStudentClassesInput>
  }

  export type absencesUncheckedUpdateManyWithoutStudentClassNestedInput = {
    create?: XOR<absencesCreateWithoutStudentClassInput, absencesUncheckedCreateWithoutStudentClassInput> | absencesCreateWithoutStudentClassInput[] | absencesUncheckedCreateWithoutStudentClassInput[]
    connectOrCreate?: absencesCreateOrConnectWithoutStudentClassInput | absencesCreateOrConnectWithoutStudentClassInput[]
    upsert?: absencesUpsertWithWhereUniqueWithoutStudentClassInput | absencesUpsertWithWhereUniqueWithoutStudentClassInput[]
    createMany?: absencesCreateManyStudentClassInputEnvelope
    set?: absencesWhereUniqueInput | absencesWhereUniqueInput[]
    disconnect?: absencesWhereUniqueInput | absencesWhereUniqueInput[]
    delete?: absencesWhereUniqueInput | absencesWhereUniqueInput[]
    connect?: absencesWhereUniqueInput | absencesWhereUniqueInput[]
    update?: absencesUpdateWithWhereUniqueWithoutStudentClassInput | absencesUpdateWithWhereUniqueWithoutStudentClassInput[]
    updateMany?: absencesUpdateManyWithWhereWithoutStudentClassInput | absencesUpdateManyWithWhereWithoutStudentClassInput[]
    deleteMany?: absencesScalarWhereInput | absencesScalarWhereInput[]
  }

  export type todo_listsUncheckedUpdateManyWithoutStudentClassNestedInput = {
    create?: XOR<todo_listsCreateWithoutStudentClassInput, todo_listsUncheckedCreateWithoutStudentClassInput> | todo_listsCreateWithoutStudentClassInput[] | todo_listsUncheckedCreateWithoutStudentClassInput[]
    connectOrCreate?: todo_listsCreateOrConnectWithoutStudentClassInput | todo_listsCreateOrConnectWithoutStudentClassInput[]
    upsert?: todo_listsUpsertWithWhereUniqueWithoutStudentClassInput | todo_listsUpsertWithWhereUniqueWithoutStudentClassInput[]
    createMany?: todo_listsCreateManyStudentClassInputEnvelope
    set?: todo_listsWhereUniqueInput | todo_listsWhereUniqueInput[]
    disconnect?: todo_listsWhereUniqueInput | todo_listsWhereUniqueInput[]
    delete?: todo_listsWhereUniqueInput | todo_listsWhereUniqueInput[]
    connect?: todo_listsWhereUniqueInput | todo_listsWhereUniqueInput[]
    update?: todo_listsUpdateWithWhereUniqueWithoutStudentClassInput | todo_listsUpdateWithWhereUniqueWithoutStudentClassInput[]
    updateMany?: todo_listsUpdateManyWithWhereWithoutStudentClassInput | todo_listsUpdateManyWithWhereWithoutStudentClassInput[]
    deleteMany?: todo_listsScalarWhereInput | todo_listsScalarWhereInput[]
  }

  export type student_classCreateNestedOneWithoutAbsencesInput = {
    create?: XOR<student_classCreateWithoutAbsencesInput, student_classUncheckedCreateWithoutAbsencesInput>
    connectOrCreate?: student_classCreateOrConnectWithoutAbsencesInput
    connect?: student_classWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type student_classUpdateOneRequiredWithoutAbsencesNestedInput = {
    create?: XOR<student_classCreateWithoutAbsencesInput, student_classUncheckedCreateWithoutAbsencesInput>
    connectOrCreate?: student_classCreateOrConnectWithoutAbsencesInput
    upsert?: student_classUpsertWithoutAbsencesInput
    connect?: student_classWhereUniqueInput
    update?: XOR<XOR<student_classUpdateToOneWithWhereWithoutAbsencesInput, student_classUpdateWithoutAbsencesInput>, student_classUncheckedUpdateWithoutAbsencesInput>
  }

  export type student_classCreateNestedOneWithoutTodosInput = {
    create?: XOR<student_classCreateWithoutTodosInput, student_classUncheckedCreateWithoutTodosInput>
    connectOrCreate?: student_classCreateOrConnectWithoutTodosInput
    connect?: student_classWhereUniqueInput
  }

  export type student_classUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<student_classCreateWithoutTodosInput, student_classUncheckedCreateWithoutTodosInput>
    connectOrCreate?: student_classCreateOrConnectWithoutTodosInput
    upsert?: student_classUpsertWithoutTodosInput
    connect?: student_classWhereUniqueInput
    update?: XOR<XOR<student_classUpdateToOneWithWhereWithoutTodosInput, student_classUpdateWithoutTodosInput>, student_classUncheckedUpdateWithoutTodosInput>
  }

  export type student_classCreateNestedManyWithoutClassInput = {
    create?: XOR<student_classCreateWithoutClassInput, student_classUncheckedCreateWithoutClassInput> | student_classCreateWithoutClassInput[] | student_classUncheckedCreateWithoutClassInput[]
    connectOrCreate?: student_classCreateOrConnectWithoutClassInput | student_classCreateOrConnectWithoutClassInput[]
    createMany?: student_classCreateManyClassInputEnvelope
    connect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
  }

  export type student_classUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<student_classCreateWithoutClassInput, student_classUncheckedCreateWithoutClassInput> | student_classCreateWithoutClassInput[] | student_classUncheckedCreateWithoutClassInput[]
    connectOrCreate?: student_classCreateOrConnectWithoutClassInput | student_classCreateOrConnectWithoutClassInput[]
    createMany?: student_classCreateManyClassInputEnvelope
    connect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
  }

  export type student_classUpdateManyWithoutClassNestedInput = {
    create?: XOR<student_classCreateWithoutClassInput, student_classUncheckedCreateWithoutClassInput> | student_classCreateWithoutClassInput[] | student_classUncheckedCreateWithoutClassInput[]
    connectOrCreate?: student_classCreateOrConnectWithoutClassInput | student_classCreateOrConnectWithoutClassInput[]
    upsert?: student_classUpsertWithWhereUniqueWithoutClassInput | student_classUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: student_classCreateManyClassInputEnvelope
    set?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    disconnect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    delete?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    connect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    update?: student_classUpdateWithWhereUniqueWithoutClassInput | student_classUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: student_classUpdateManyWithWhereWithoutClassInput | student_classUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: student_classScalarWhereInput | student_classScalarWhereInput[]
  }

  export type student_classUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<student_classCreateWithoutClassInput, student_classUncheckedCreateWithoutClassInput> | student_classCreateWithoutClassInput[] | student_classUncheckedCreateWithoutClassInput[]
    connectOrCreate?: student_classCreateOrConnectWithoutClassInput | student_classCreateOrConnectWithoutClassInput[]
    upsert?: student_classUpsertWithWhereUniqueWithoutClassInput | student_classUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: student_classCreateManyClassInputEnvelope
    set?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    disconnect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    delete?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    connect?: student_classWhereUniqueInput | student_classWhereUniqueInput[]
    update?: student_classUpdateWithWhereUniqueWithoutClassInput | student_classUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: student_classUpdateManyWithWhereWithoutClassInput | student_classUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: student_classScalarWhereInput | student_classScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type student_classCreateWithoutUserInput = {
    id?: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
    absences?: absencesCreateNestedManyWithoutStudentClassInput
    todos?: todo_listsCreateNestedManyWithoutStudentClassInput
    class: classesCreateNestedOneWithoutStudentClassesInput
  }

  export type student_classUncheckedCreateWithoutUserInput = {
    id?: string
    class_id: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
    absences?: absencesUncheckedCreateNestedManyWithoutStudentClassInput
    todos?: todo_listsUncheckedCreateNestedManyWithoutStudentClassInput
  }

  export type student_classCreateOrConnectWithoutUserInput = {
    where: student_classWhereUniqueInput
    create: XOR<student_classCreateWithoutUserInput, student_classUncheckedCreateWithoutUserInput>
  }

  export type student_classCreateManyUserInputEnvelope = {
    data: student_classCreateManyUserInput | student_classCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type student_classUpsertWithWhereUniqueWithoutUserInput = {
    where: student_classWhereUniqueInput
    update: XOR<student_classUpdateWithoutUserInput, student_classUncheckedUpdateWithoutUserInput>
    create: XOR<student_classCreateWithoutUserInput, student_classUncheckedCreateWithoutUserInput>
  }

  export type student_classUpdateWithWhereUniqueWithoutUserInput = {
    where: student_classWhereUniqueInput
    data: XOR<student_classUpdateWithoutUserInput, student_classUncheckedUpdateWithoutUserInput>
  }

  export type student_classUpdateManyWithWhereWithoutUserInput = {
    where: student_classScalarWhereInput
    data: XOR<student_classUpdateManyMutationInput, student_classUncheckedUpdateManyWithoutUserInput>
  }

  export type student_classScalarWhereInput = {
    AND?: student_classScalarWhereInput | student_classScalarWhereInput[]
    OR?: student_classScalarWhereInput[]
    NOT?: student_classScalarWhereInput | student_classScalarWhereInput[]
    id?: StringFilter<"student_class"> | string
    user_id?: StringFilter<"student_class"> | string
    class_id?: StringFilter<"student_class"> | string
    nis?: IntFilter<"student_class"> | number
    createdAt?: DateTimeFilter<"student_class"> | Date | string
    updatedAt?: DateTimeFilter<"student_class"> | Date | string
  }

  export type absencesCreateWithoutStudentClassInput = {
    id?: string
    date: Date | string
    absence_time: Date | string
    status?: $Enums.Status
    has_todo?: boolean
  }

  export type absencesUncheckedCreateWithoutStudentClassInput = {
    id?: string
    date: Date | string
    absence_time: Date | string
    status?: $Enums.Status
    has_todo?: boolean
  }

  export type absencesCreateOrConnectWithoutStudentClassInput = {
    where: absencesWhereUniqueInput
    create: XOR<absencesCreateWithoutStudentClassInput, absencesUncheckedCreateWithoutStudentClassInput>
  }

  export type absencesCreateManyStudentClassInputEnvelope = {
    data: absencesCreateManyStudentClassInput | absencesCreateManyStudentClassInput[]
    skipDuplicates?: boolean
  }

  export type todo_listsCreateWithoutStudentClassInput = {
    id?: string
    date: Date | string
    activity: string
    submitted_at?: Date | string | null
  }

  export type todo_listsUncheckedCreateWithoutStudentClassInput = {
    id?: string
    date: Date | string
    activity: string
    submitted_at?: Date | string | null
  }

  export type todo_listsCreateOrConnectWithoutStudentClassInput = {
    where: todo_listsWhereUniqueInput
    create: XOR<todo_listsCreateWithoutStudentClassInput, todo_listsUncheckedCreateWithoutStudentClassInput>
  }

  export type todo_listsCreateManyStudentClassInputEnvelope = {
    data: todo_listsCreateManyStudentClassInput | todo_listsCreateManyStudentClassInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutStudentClassesInput = {
    id?: string
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUncheckedCreateWithoutStudentClassesInput = {
    id?: string
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersCreateOrConnectWithoutStudentClassesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutStudentClassesInput, usersUncheckedCreateWithoutStudentClassesInput>
  }

  export type classesCreateWithoutStudentClassesInput = {
    id?: string
    className: string
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type classesUncheckedCreateWithoutStudentClassesInput = {
    id?: string
    className: string
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type classesCreateOrConnectWithoutStudentClassesInput = {
    where: classesWhereUniqueInput
    create: XOR<classesCreateWithoutStudentClassesInput, classesUncheckedCreateWithoutStudentClassesInput>
  }

  export type absencesUpsertWithWhereUniqueWithoutStudentClassInput = {
    where: absencesWhereUniqueInput
    update: XOR<absencesUpdateWithoutStudentClassInput, absencesUncheckedUpdateWithoutStudentClassInput>
    create: XOR<absencesCreateWithoutStudentClassInput, absencesUncheckedCreateWithoutStudentClassInput>
  }

  export type absencesUpdateWithWhereUniqueWithoutStudentClassInput = {
    where: absencesWhereUniqueInput
    data: XOR<absencesUpdateWithoutStudentClassInput, absencesUncheckedUpdateWithoutStudentClassInput>
  }

  export type absencesUpdateManyWithWhereWithoutStudentClassInput = {
    where: absencesScalarWhereInput
    data: XOR<absencesUpdateManyMutationInput, absencesUncheckedUpdateManyWithoutStudentClassInput>
  }

  export type absencesScalarWhereInput = {
    AND?: absencesScalarWhereInput | absencesScalarWhereInput[]
    OR?: absencesScalarWhereInput[]
    NOT?: absencesScalarWhereInput | absencesScalarWhereInput[]
    id?: StringFilter<"absences"> | string
    student_class_id?: StringFilter<"absences"> | string
    date?: DateTimeFilter<"absences"> | Date | string
    absence_time?: DateTimeFilter<"absences"> | Date | string
    status?: EnumStatusFilter<"absences"> | $Enums.Status
    has_todo?: BoolFilter<"absences"> | boolean
  }

  export type todo_listsUpsertWithWhereUniqueWithoutStudentClassInput = {
    where: todo_listsWhereUniqueInput
    update: XOR<todo_listsUpdateWithoutStudentClassInput, todo_listsUncheckedUpdateWithoutStudentClassInput>
    create: XOR<todo_listsCreateWithoutStudentClassInput, todo_listsUncheckedCreateWithoutStudentClassInput>
  }

  export type todo_listsUpdateWithWhereUniqueWithoutStudentClassInput = {
    where: todo_listsWhereUniqueInput
    data: XOR<todo_listsUpdateWithoutStudentClassInput, todo_listsUncheckedUpdateWithoutStudentClassInput>
  }

  export type todo_listsUpdateManyWithWhereWithoutStudentClassInput = {
    where: todo_listsScalarWhereInput
    data: XOR<todo_listsUpdateManyMutationInput, todo_listsUncheckedUpdateManyWithoutStudentClassInput>
  }

  export type todo_listsScalarWhereInput = {
    AND?: todo_listsScalarWhereInput | todo_listsScalarWhereInput[]
    OR?: todo_listsScalarWhereInput[]
    NOT?: todo_listsScalarWhereInput | todo_listsScalarWhereInput[]
    id?: StringFilter<"todo_lists"> | string
    student_class_id?: StringFilter<"todo_lists"> | string
    date?: DateTimeFilter<"todo_lists"> | Date | string
    activity?: StringFilter<"todo_lists"> | string
    submitted_at?: DateTimeNullableFilter<"todo_lists"> | Date | string | null
  }

  export type usersUpsertWithoutStudentClassesInput = {
    update: XOR<usersUpdateWithoutStudentClassesInput, usersUncheckedUpdateWithoutStudentClassesInput>
    create: XOR<usersCreateWithoutStudentClassesInput, usersUncheckedCreateWithoutStudentClassesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutStudentClassesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutStudentClassesInput, usersUncheckedUpdateWithoutStudentClassesInput>
  }

  export type usersUpdateWithoutStudentClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutStudentClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type classesUpsertWithoutStudentClassesInput = {
    update: XOR<classesUpdateWithoutStudentClassesInput, classesUncheckedUpdateWithoutStudentClassesInput>
    create: XOR<classesCreateWithoutStudentClassesInput, classesUncheckedCreateWithoutStudentClassesInput>
    where?: classesWhereInput
  }

  export type classesUpdateToOneWithWhereWithoutStudentClassesInput = {
    where?: classesWhereInput
    data: XOR<classesUpdateWithoutStudentClassesInput, classesUncheckedUpdateWithoutStudentClassesInput>
  }

  export type classesUpdateWithoutStudentClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type classesUncheckedUpdateWithoutStudentClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type student_classCreateWithoutAbsencesInput = {
    id?: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: todo_listsCreateNestedManyWithoutStudentClassInput
    user: usersCreateNestedOneWithoutStudentClassesInput
    class: classesCreateNestedOneWithoutStudentClassesInput
  }

  export type student_classUncheckedCreateWithoutAbsencesInput = {
    id?: string
    user_id: string
    class_id: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
    todos?: todo_listsUncheckedCreateNestedManyWithoutStudentClassInput
  }

  export type student_classCreateOrConnectWithoutAbsencesInput = {
    where: student_classWhereUniqueInput
    create: XOR<student_classCreateWithoutAbsencesInput, student_classUncheckedCreateWithoutAbsencesInput>
  }

  export type student_classUpsertWithoutAbsencesInput = {
    update: XOR<student_classUpdateWithoutAbsencesInput, student_classUncheckedUpdateWithoutAbsencesInput>
    create: XOR<student_classCreateWithoutAbsencesInput, student_classUncheckedCreateWithoutAbsencesInput>
    where?: student_classWhereInput
  }

  export type student_classUpdateToOneWithWhereWithoutAbsencesInput = {
    where?: student_classWhereInput
    data: XOR<student_classUpdateWithoutAbsencesInput, student_classUncheckedUpdateWithoutAbsencesInput>
  }

  export type student_classUpdateWithoutAbsencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: todo_listsUpdateManyWithoutStudentClassNestedInput
    user?: usersUpdateOneRequiredWithoutStudentClassesNestedInput
    class?: classesUpdateOneRequiredWithoutStudentClassesNestedInput
  }

  export type student_classUncheckedUpdateWithoutAbsencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todos?: todo_listsUncheckedUpdateManyWithoutStudentClassNestedInput
  }

  export type student_classCreateWithoutTodosInput = {
    id?: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
    absences?: absencesCreateNestedManyWithoutStudentClassInput
    user: usersCreateNestedOneWithoutStudentClassesInput
    class: classesCreateNestedOneWithoutStudentClassesInput
  }

  export type student_classUncheckedCreateWithoutTodosInput = {
    id?: string
    user_id: string
    class_id: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
    absences?: absencesUncheckedCreateNestedManyWithoutStudentClassInput
  }

  export type student_classCreateOrConnectWithoutTodosInput = {
    where: student_classWhereUniqueInput
    create: XOR<student_classCreateWithoutTodosInput, student_classUncheckedCreateWithoutTodosInput>
  }

  export type student_classUpsertWithoutTodosInput = {
    update: XOR<student_classUpdateWithoutTodosInput, student_classUncheckedUpdateWithoutTodosInput>
    create: XOR<student_classCreateWithoutTodosInput, student_classUncheckedCreateWithoutTodosInput>
    where?: student_classWhereInput
  }

  export type student_classUpdateToOneWithWhereWithoutTodosInput = {
    where?: student_classWhereInput
    data: XOR<student_classUpdateWithoutTodosInput, student_classUncheckedUpdateWithoutTodosInput>
  }

  export type student_classUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absences?: absencesUpdateManyWithoutStudentClassNestedInput
    user?: usersUpdateOneRequiredWithoutStudentClassesNestedInput
    class?: classesUpdateOneRequiredWithoutStudentClassesNestedInput
  }

  export type student_classUncheckedUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absences?: absencesUncheckedUpdateManyWithoutStudentClassNestedInput
  }

  export type student_classCreateWithoutClassInput = {
    id?: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
    absences?: absencesCreateNestedManyWithoutStudentClassInput
    todos?: todo_listsCreateNestedManyWithoutStudentClassInput
    user: usersCreateNestedOneWithoutStudentClassesInput
  }

  export type student_classUncheckedCreateWithoutClassInput = {
    id?: string
    user_id: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
    absences?: absencesUncheckedCreateNestedManyWithoutStudentClassInput
    todos?: todo_listsUncheckedCreateNestedManyWithoutStudentClassInput
  }

  export type student_classCreateOrConnectWithoutClassInput = {
    where: student_classWhereUniqueInput
    create: XOR<student_classCreateWithoutClassInput, student_classUncheckedCreateWithoutClassInput>
  }

  export type student_classCreateManyClassInputEnvelope = {
    data: student_classCreateManyClassInput | student_classCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type student_classUpsertWithWhereUniqueWithoutClassInput = {
    where: student_classWhereUniqueInput
    update: XOR<student_classUpdateWithoutClassInput, student_classUncheckedUpdateWithoutClassInput>
    create: XOR<student_classCreateWithoutClassInput, student_classUncheckedCreateWithoutClassInput>
  }

  export type student_classUpdateWithWhereUniqueWithoutClassInput = {
    where: student_classWhereUniqueInput
    data: XOR<student_classUpdateWithoutClassInput, student_classUncheckedUpdateWithoutClassInput>
  }

  export type student_classUpdateManyWithWhereWithoutClassInput = {
    where: student_classScalarWhereInput
    data: XOR<student_classUpdateManyMutationInput, student_classUncheckedUpdateManyWithoutClassInput>
  }

  export type student_classCreateManyUserInput = {
    id?: string
    class_id: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type student_classUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absences?: absencesUpdateManyWithoutStudentClassNestedInput
    todos?: todo_listsUpdateManyWithoutStudentClassNestedInput
    class?: classesUpdateOneRequiredWithoutStudentClassesNestedInput
  }

  export type student_classUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absences?: absencesUncheckedUpdateManyWithoutStudentClassNestedInput
    todos?: todo_listsUncheckedUpdateManyWithoutStudentClassNestedInput
  }

  export type student_classUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type absencesCreateManyStudentClassInput = {
    id?: string
    date: Date | string
    absence_time: Date | string
    status?: $Enums.Status
    has_todo?: boolean
  }

  export type todo_listsCreateManyStudentClassInput = {
    id?: string
    date: Date | string
    activity: string
    submitted_at?: Date | string | null
  }

  export type absencesUpdateWithoutStudentClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    absence_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    has_todo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type absencesUncheckedUpdateWithoutStudentClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    absence_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    has_todo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type absencesUncheckedUpdateManyWithoutStudentClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    absence_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    has_todo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type todo_listsUpdateWithoutStudentClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: StringFieldUpdateOperationsInput | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type todo_listsUncheckedUpdateWithoutStudentClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: StringFieldUpdateOperationsInput | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type todo_listsUncheckedUpdateManyWithoutStudentClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: StringFieldUpdateOperationsInput | string
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_classCreateManyClassInput = {
    id?: string
    user_id: string
    nis: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type student_classUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absences?: absencesUpdateManyWithoutStudentClassNestedInput
    todos?: todo_listsUpdateManyWithoutStudentClassNestedInput
    user?: usersUpdateOneRequiredWithoutStudentClassesNestedInput
  }

  export type student_classUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absences?: absencesUncheckedUpdateManyWithoutStudentClassNestedInput
    todos?: todo_listsUncheckedUpdateManyWithoutStudentClassNestedInput
  }

  export type student_classUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
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