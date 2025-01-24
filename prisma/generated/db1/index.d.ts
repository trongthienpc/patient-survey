
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
 * Model Survey
 * 
 */
export type Survey = $Result.DefaultSelection<Prisma.$SurveyPayload>
/**
 * Model SurveySection
 * 
 */
export type SurveySection = $Result.DefaultSelection<Prisma.$SurveySectionPayload>
/**
 * Model DissatisfiedReason
 * 
 */
export type DissatisfiedReason = $Result.DefaultSelection<Prisma.$DissatisfiedReasonPayload>
/**
 * Model SatisfiedReason
 * 
 */
export type SatisfiedReason = $Result.DefaultSelection<Prisma.$SatisfiedReasonPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Surveys
 * const surveys = await prisma.survey.findMany()
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
   * // Fetch zero or more Surveys
   * const surveys = await prisma.survey.findMany()
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
   * `prisma.survey`: Exposes CRUD operations for the **Survey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surveys
    * const surveys = await prisma.survey.findMany()
    * ```
    */
  get survey(): Prisma.SurveyDelegate<ExtArgs>;

  /**
   * `prisma.surveySection`: Exposes CRUD operations for the **SurveySection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurveySections
    * const surveySections = await prisma.surveySection.findMany()
    * ```
    */
  get surveySection(): Prisma.SurveySectionDelegate<ExtArgs>;

  /**
   * `prisma.dissatisfiedReason`: Exposes CRUD operations for the **DissatisfiedReason** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DissatisfiedReasons
    * const dissatisfiedReasons = await prisma.dissatisfiedReason.findMany()
    * ```
    */
  get dissatisfiedReason(): Prisma.DissatisfiedReasonDelegate<ExtArgs>;

  /**
   * `prisma.satisfiedReason`: Exposes CRUD operations for the **SatisfiedReason** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SatisfiedReasons
    * const satisfiedReasons = await prisma.satisfiedReason.findMany()
    * ```
    */
  get satisfiedReason(): Prisma.SatisfiedReasonDelegate<ExtArgs>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    Survey: 'Survey',
    SurveySection: 'SurveySection',
    DissatisfiedReason: 'DissatisfiedReason',
    SatisfiedReason: 'SatisfiedReason',
    Doctor: 'Doctor',
    Department: 'Department'
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
      modelProps: "survey" | "surveySection" | "dissatisfiedReason" | "satisfiedReason" | "doctor" | "department"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Survey: {
        payload: Prisma.$SurveyPayload<ExtArgs>
        fields: Prisma.SurveyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findFirst: {
            args: Prisma.SurveyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findMany: {
            args: Prisma.SurveyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>[]
          }
          create: {
            args: Prisma.SurveyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          createMany: {
            args: Prisma.SurveyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurveyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>[]
          }
          delete: {
            args: Prisma.SurveyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          update: {
            args: Prisma.SurveyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          deleteMany: {
            args: Prisma.SurveyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SurveyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          aggregate: {
            args: Prisma.SurveyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurvey>
          }
          groupBy: {
            args: Prisma.SurveyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurveyCountArgs<ExtArgs>
            result: $Utils.Optional<SurveyCountAggregateOutputType> | number
          }
        }
      }
      SurveySection: {
        payload: Prisma.$SurveySectionPayload<ExtArgs>
        fields: Prisma.SurveySectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveySectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveySectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveySectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveySectionPayload>
          }
          findFirst: {
            args: Prisma.SurveySectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveySectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveySectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveySectionPayload>
          }
          findMany: {
            args: Prisma.SurveySectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveySectionPayload>[]
          }
          create: {
            args: Prisma.SurveySectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveySectionPayload>
          }
          createMany: {
            args: Prisma.SurveySectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurveySectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveySectionPayload>[]
          }
          delete: {
            args: Prisma.SurveySectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveySectionPayload>
          }
          update: {
            args: Prisma.SurveySectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveySectionPayload>
          }
          deleteMany: {
            args: Prisma.SurveySectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveySectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SurveySectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveySectionPayload>
          }
          aggregate: {
            args: Prisma.SurveySectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurveySection>
          }
          groupBy: {
            args: Prisma.SurveySectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveySectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurveySectionCountArgs<ExtArgs>
            result: $Utils.Optional<SurveySectionCountAggregateOutputType> | number
          }
        }
      }
      DissatisfiedReason: {
        payload: Prisma.$DissatisfiedReasonPayload<ExtArgs>
        fields: Prisma.DissatisfiedReasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DissatisfiedReasonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DissatisfiedReasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DissatisfiedReasonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DissatisfiedReasonPayload>
          }
          findFirst: {
            args: Prisma.DissatisfiedReasonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DissatisfiedReasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DissatisfiedReasonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DissatisfiedReasonPayload>
          }
          findMany: {
            args: Prisma.DissatisfiedReasonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DissatisfiedReasonPayload>[]
          }
          create: {
            args: Prisma.DissatisfiedReasonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DissatisfiedReasonPayload>
          }
          createMany: {
            args: Prisma.DissatisfiedReasonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DissatisfiedReasonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DissatisfiedReasonPayload>[]
          }
          delete: {
            args: Prisma.DissatisfiedReasonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DissatisfiedReasonPayload>
          }
          update: {
            args: Prisma.DissatisfiedReasonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DissatisfiedReasonPayload>
          }
          deleteMany: {
            args: Prisma.DissatisfiedReasonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DissatisfiedReasonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DissatisfiedReasonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DissatisfiedReasonPayload>
          }
          aggregate: {
            args: Prisma.DissatisfiedReasonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDissatisfiedReason>
          }
          groupBy: {
            args: Prisma.DissatisfiedReasonGroupByArgs<ExtArgs>
            result: $Utils.Optional<DissatisfiedReasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.DissatisfiedReasonCountArgs<ExtArgs>
            result: $Utils.Optional<DissatisfiedReasonCountAggregateOutputType> | number
          }
        }
      }
      SatisfiedReason: {
        payload: Prisma.$SatisfiedReasonPayload<ExtArgs>
        fields: Prisma.SatisfiedReasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SatisfiedReasonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfiedReasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SatisfiedReasonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfiedReasonPayload>
          }
          findFirst: {
            args: Prisma.SatisfiedReasonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfiedReasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SatisfiedReasonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfiedReasonPayload>
          }
          findMany: {
            args: Prisma.SatisfiedReasonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfiedReasonPayload>[]
          }
          create: {
            args: Prisma.SatisfiedReasonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfiedReasonPayload>
          }
          createMany: {
            args: Prisma.SatisfiedReasonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SatisfiedReasonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfiedReasonPayload>[]
          }
          delete: {
            args: Prisma.SatisfiedReasonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfiedReasonPayload>
          }
          update: {
            args: Prisma.SatisfiedReasonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfiedReasonPayload>
          }
          deleteMany: {
            args: Prisma.SatisfiedReasonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SatisfiedReasonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SatisfiedReasonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatisfiedReasonPayload>
          }
          aggregate: {
            args: Prisma.SatisfiedReasonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSatisfiedReason>
          }
          groupBy: {
            args: Prisma.SatisfiedReasonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SatisfiedReasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SatisfiedReasonCountArgs<ExtArgs>
            result: $Utils.Optional<SatisfiedReasonCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
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
   * Count Type SurveySectionCountOutputType
   */

  export type SurveySectionCountOutputType = {
    dissatisfied: number
    satisfied: number
  }

  export type SurveySectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dissatisfied?: boolean | SurveySectionCountOutputTypeCountDissatisfiedArgs
    satisfied?: boolean | SurveySectionCountOutputTypeCountSatisfiedArgs
  }

  // Custom InputTypes
  /**
   * SurveySectionCountOutputType without action
   */
  export type SurveySectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySectionCountOutputType
     */
    select?: SurveySectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SurveySectionCountOutputType without action
   */
  export type SurveySectionCountOutputTypeCountDissatisfiedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DissatisfiedReasonWhereInput
  }

  /**
   * SurveySectionCountOutputType without action
   */
  export type SurveySectionCountOutputTypeCountSatisfiedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatisfiedReasonWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    SurveySection: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SurveySection?: boolean | DoctorCountOutputTypeCountSurveySectionArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountSurveySectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveySectionWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    SurveySection: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SurveySection?: boolean | DepartmentCountOutputTypeCountSurveySectionArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountSurveySectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveySectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Survey
   */

  export type AggregateSurvey = {
    _count: SurveyCountAggregateOutputType | null
    _avg: SurveyAvgAggregateOutputType | null
    _sum: SurveySumAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  export type SurveyAvgAggregateOutputType = {
    overallSatisfaction: number | null
  }

  export type SurveySumAggregateOutputType = {
    overallSatisfaction: number | null
  }

  export type SurveyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    overallSatisfaction: number | null
    doctorExaminationSectionId: string | null
    doctorUltrasoundSectionId: string | null
    customerCareSectionId: string | null
  }

  export type SurveyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    overallSatisfaction: number | null
    doctorExaminationSectionId: string | null
    doctorUltrasoundSectionId: string | null
    customerCareSectionId: string | null
  }

  export type SurveyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    overallSatisfaction: number
    doctorExaminationSectionId: number
    doctorUltrasoundSectionId: number
    customerCareSectionId: number
    _all: number
  }


  export type SurveyAvgAggregateInputType = {
    overallSatisfaction?: true
  }

  export type SurveySumAggregateInputType = {
    overallSatisfaction?: true
  }

  export type SurveyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    overallSatisfaction?: true
    doctorExaminationSectionId?: true
    doctorUltrasoundSectionId?: true
    customerCareSectionId?: true
  }

  export type SurveyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    overallSatisfaction?: true
    doctorExaminationSectionId?: true
    doctorUltrasoundSectionId?: true
    customerCareSectionId?: true
  }

  export type SurveyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    overallSatisfaction?: true
    doctorExaminationSectionId?: true
    doctorUltrasoundSectionId?: true
    customerCareSectionId?: true
    _all?: true
  }

  export type SurveyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey to aggregate.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surveys
    **/
    _count?: true | SurveyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurveyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurveySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyMaxAggregateInputType
  }

  export type GetSurveyAggregateType<T extends SurveyAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey[P]>
      : GetScalarType<T[P], AggregateSurvey[P]>
  }




  export type SurveyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyWhereInput
    orderBy?: SurveyOrderByWithAggregationInput | SurveyOrderByWithAggregationInput[]
    by: SurveyScalarFieldEnum[] | SurveyScalarFieldEnum
    having?: SurveyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyCountAggregateInputType | true
    _avg?: SurveyAvgAggregateInputType
    _sum?: SurveySumAggregateInputType
    _min?: SurveyMinAggregateInputType
    _max?: SurveyMaxAggregateInputType
  }

  export type SurveyGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    overallSatisfaction: number | null
    doctorExaminationSectionId: string
    doctorUltrasoundSectionId: string
    customerCareSectionId: string
    _count: SurveyCountAggregateOutputType | null
    _avg: SurveyAvgAggregateOutputType | null
    _sum: SurveySumAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  type GetSurveyGroupByPayload<T extends SurveyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyGroupByOutputType[P]>
        }
      >
    >


  export type SurveySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    overallSatisfaction?: boolean
    doctorExaminationSectionId?: boolean
    doctorUltrasoundSectionId?: boolean
    customerCareSectionId?: boolean
    doctorExaminationSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
    doctorUltrasoundSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
    customerCareSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey"]>

  export type SurveySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    overallSatisfaction?: boolean
    doctorExaminationSectionId?: boolean
    doctorUltrasoundSectionId?: boolean
    customerCareSectionId?: boolean
    doctorExaminationSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
    doctorUltrasoundSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
    customerCareSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey"]>

  export type SurveySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    overallSatisfaction?: boolean
    doctorExaminationSectionId?: boolean
    doctorUltrasoundSectionId?: boolean
    customerCareSectionId?: boolean
  }

  export type SurveyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorExaminationSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
    doctorUltrasoundSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
    customerCareSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }
  export type SurveyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorExaminationSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
    doctorUltrasoundSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
    customerCareSection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }

  export type $SurveyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Survey"
    objects: {
      doctorExaminationSection: Prisma.$SurveySectionPayload<ExtArgs>
      doctorUltrasoundSection: Prisma.$SurveySectionPayload<ExtArgs>
      customerCareSection: Prisma.$SurveySectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      overallSatisfaction: number | null
      doctorExaminationSectionId: string
      doctorUltrasoundSectionId: string
      customerCareSectionId: string
    }, ExtArgs["result"]["survey"]>
    composites: {}
  }

  type SurveyGetPayload<S extends boolean | null | undefined | SurveyDefaultArgs> = $Result.GetResult<Prisma.$SurveyPayload, S>

  type SurveyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SurveyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SurveyCountAggregateInputType | true
    }

  export interface SurveyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Survey'], meta: { name: 'Survey' } }
    /**
     * Find zero or one Survey that matches the filter.
     * @param {SurveyFindUniqueArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveyFindUniqueArgs>(args: SelectSubset<T, SurveyFindUniqueArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Survey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SurveyFindUniqueOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveyFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Survey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveyFindFirstArgs>(args?: SelectSubset<T, SurveyFindFirstArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Survey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveyFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surveys
     * const surveys = await prisma.survey.findMany()
     * 
     * // Get first 10 Surveys
     * const surveys = await prisma.survey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyWithIdOnly = await prisma.survey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveyFindManyArgs>(args?: SelectSubset<T, SurveyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Survey.
     * @param {SurveyCreateArgs} args - Arguments to create a Survey.
     * @example
     * // Create one Survey
     * const Survey = await prisma.survey.create({
     *   data: {
     *     // ... data to create a Survey
     *   }
     * })
     * 
     */
    create<T extends SurveyCreateArgs>(args: SelectSubset<T, SurveyCreateArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Surveys.
     * @param {SurveyCreateManyArgs} args - Arguments to create many Surveys.
     * @example
     * // Create many Surveys
     * const survey = await prisma.survey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveyCreateManyArgs>(args?: SelectSubset<T, SurveyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Surveys and returns the data saved in the database.
     * @param {SurveyCreateManyAndReturnArgs} args - Arguments to create many Surveys.
     * @example
     * // Create many Surveys
     * const survey = await prisma.survey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Surveys and only return the `id`
     * const surveyWithIdOnly = await prisma.survey.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurveyCreateManyAndReturnArgs>(args?: SelectSubset<T, SurveyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Survey.
     * @param {SurveyDeleteArgs} args - Arguments to delete one Survey.
     * @example
     * // Delete one Survey
     * const Survey = await prisma.survey.delete({
     *   where: {
     *     // ... filter to delete one Survey
     *   }
     * })
     * 
     */
    delete<T extends SurveyDeleteArgs>(args: SelectSubset<T, SurveyDeleteArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Survey.
     * @param {SurveyUpdateArgs} args - Arguments to update one Survey.
     * @example
     * // Update one Survey
     * const survey = await prisma.survey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveyUpdateArgs>(args: SelectSubset<T, SurveyUpdateArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Surveys.
     * @param {SurveyDeleteManyArgs} args - Arguments to filter Surveys to delete.
     * @example
     * // Delete a few Surveys
     * const { count } = await prisma.survey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveyDeleteManyArgs>(args?: SelectSubset<T, SurveyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surveys
     * const survey = await prisma.survey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveyUpdateManyArgs>(args: SelectSubset<T, SurveyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Survey.
     * @param {SurveyUpsertArgs} args - Arguments to update or create a Survey.
     * @example
     * // Update or create a Survey
     * const survey = await prisma.survey.upsert({
     *   create: {
     *     // ... data to create a Survey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey we want to update
     *   }
     * })
     */
    upsert<T extends SurveyUpsertArgs>(args: SelectSubset<T, SurveyUpsertArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyCountArgs} args - Arguments to filter Surveys to count.
     * @example
     * // Count the number of Surveys
     * const count = await prisma.survey.count({
     *   where: {
     *     // ... the filter for the Surveys we want to count
     *   }
     * })
    **/
    count<T extends SurveyCountArgs>(
      args?: Subset<T, SurveyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurveyAggregateArgs>(args: Subset<T, SurveyAggregateArgs>): Prisma.PrismaPromise<GetSurveyAggregateType<T>>

    /**
     * Group by Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyGroupByArgs} args - Group by arguments.
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
      T extends SurveyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyGroupByArgs['orderBy'] }
        : { orderBy?: SurveyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SurveyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Survey model
   */
  readonly fields: SurveyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Survey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorExaminationSection<T extends SurveySectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurveySectionDefaultArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    doctorUltrasoundSection<T extends SurveySectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurveySectionDefaultArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    customerCareSection<T extends SurveySectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurveySectionDefaultArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Survey model
   */ 
  interface SurveyFieldRefs {
    readonly id: FieldRef<"Survey", 'String'>
    readonly createdAt: FieldRef<"Survey", 'DateTime'>
    readonly updatedAt: FieldRef<"Survey", 'DateTime'>
    readonly overallSatisfaction: FieldRef<"Survey", 'Float'>
    readonly doctorExaminationSectionId: FieldRef<"Survey", 'String'>
    readonly doctorUltrasoundSectionId: FieldRef<"Survey", 'String'>
    readonly customerCareSectionId: FieldRef<"Survey", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Survey findUnique
   */
  export type SurveyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey findUniqueOrThrow
   */
  export type SurveyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey findFirst
   */
  export type SurveyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey findFirstOrThrow
   */
  export type SurveyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey findMany
   */
  export type SurveyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Surveys to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey create
   */
  export type SurveyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to create a Survey.
     */
    data: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
  }

  /**
   * Survey createMany
   */
  export type SurveyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surveys.
     */
    data: SurveyCreateManyInput | SurveyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Survey createManyAndReturn
   */
  export type SurveyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Surveys.
     */
    data: SurveyCreateManyInput | SurveyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Survey update
   */
  export type SurveyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to update a Survey.
     */
    data: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
    /**
     * Choose, which Survey to update.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey updateMany
   */
  export type SurveyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surveys.
     */
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyInput>
    /**
     * Filter which Surveys to update
     */
    where?: SurveyWhereInput
  }

  /**
   * Survey upsert
   */
  export type SurveyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The filter to search for the Survey to update in case it exists.
     */
    where: SurveyWhereUniqueInput
    /**
     * In case the Survey found by the `where` argument doesn't exist, create a new Survey with this data.
     */
    create: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
    /**
     * In case the Survey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
  }

  /**
   * Survey delete
   */
  export type SurveyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter which Survey to delete.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey deleteMany
   */
  export type SurveyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surveys to delete
     */
    where?: SurveyWhereInput
  }

  /**
   * Survey without action
   */
  export type SurveyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
  }


  /**
   * Model SurveySection
   */

  export type AggregateSurveySection = {
    _count: SurveySectionCountAggregateOutputType | null
    _avg: SurveySectionAvgAggregateOutputType | null
    _sum: SurveySectionSumAggregateOutputType | null
    _min: SurveySectionMinAggregateOutputType | null
    _max: SurveySectionMaxAggregateOutputType | null
  }

  export type SurveySectionAvgAggregateOutputType = {
    satisfaction: number | null
  }

  export type SurveySectionSumAggregateOutputType = {
    satisfaction: number | null
  }

  export type SurveySectionMinAggregateOutputType = {
    id: string | null
    sectionType: string | null
    satisfaction: number | null
    feedback: string | null
    doctorId: string | null
    departmentId: string | null
  }

  export type SurveySectionMaxAggregateOutputType = {
    id: string | null
    sectionType: string | null
    satisfaction: number | null
    feedback: string | null
    doctorId: string | null
    departmentId: string | null
  }

  export type SurveySectionCountAggregateOutputType = {
    id: number
    sectionType: number
    satisfaction: number
    feedback: number
    doctorId: number
    departmentId: number
    _all: number
  }


  export type SurveySectionAvgAggregateInputType = {
    satisfaction?: true
  }

  export type SurveySectionSumAggregateInputType = {
    satisfaction?: true
  }

  export type SurveySectionMinAggregateInputType = {
    id?: true
    sectionType?: true
    satisfaction?: true
    feedback?: true
    doctorId?: true
    departmentId?: true
  }

  export type SurveySectionMaxAggregateInputType = {
    id?: true
    sectionType?: true
    satisfaction?: true
    feedback?: true
    doctorId?: true
    departmentId?: true
  }

  export type SurveySectionCountAggregateInputType = {
    id?: true
    sectionType?: true
    satisfaction?: true
    feedback?: true
    doctorId?: true
    departmentId?: true
    _all?: true
  }

  export type SurveySectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveySection to aggregate.
     */
    where?: SurveySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveySections to fetch.
     */
    orderBy?: SurveySectionOrderByWithRelationInput | SurveySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveySections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurveySections
    **/
    _count?: true | SurveySectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurveySectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurveySectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveySectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveySectionMaxAggregateInputType
  }

  export type GetSurveySectionAggregateType<T extends SurveySectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSurveySection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurveySection[P]>
      : GetScalarType<T[P], AggregateSurveySection[P]>
  }




  export type SurveySectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveySectionWhereInput
    orderBy?: SurveySectionOrderByWithAggregationInput | SurveySectionOrderByWithAggregationInput[]
    by: SurveySectionScalarFieldEnum[] | SurveySectionScalarFieldEnum
    having?: SurveySectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveySectionCountAggregateInputType | true
    _avg?: SurveySectionAvgAggregateInputType
    _sum?: SurveySectionSumAggregateInputType
    _min?: SurveySectionMinAggregateInputType
    _max?: SurveySectionMaxAggregateInputType
  }

  export type SurveySectionGroupByOutputType = {
    id: string
    sectionType: string
    satisfaction: number
    feedback: string | null
    doctorId: string | null
    departmentId: string | null
    _count: SurveySectionCountAggregateOutputType | null
    _avg: SurveySectionAvgAggregateOutputType | null
    _sum: SurveySectionSumAggregateOutputType | null
    _min: SurveySectionMinAggregateOutputType | null
    _max: SurveySectionMaxAggregateOutputType | null
  }

  type GetSurveySectionGroupByPayload<T extends SurveySectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveySectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveySectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveySectionGroupByOutputType[P]>
            : GetScalarType<T[P], SurveySectionGroupByOutputType[P]>
        }
      >
    >


  export type SurveySectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionType?: boolean
    satisfaction?: boolean
    feedback?: boolean
    doctorId?: boolean
    departmentId?: boolean
    surveyDoctorExamination?: boolean | SurveySection$surveyDoctorExaminationArgs<ExtArgs>
    surveyDoctorUltrasound?: boolean | SurveySection$surveyDoctorUltrasoundArgs<ExtArgs>
    surveyCustomerCare?: boolean | SurveySection$surveyCustomerCareArgs<ExtArgs>
    dissatisfied?: boolean | SurveySection$dissatisfiedArgs<ExtArgs>
    satisfied?: boolean | SurveySection$satisfiedArgs<ExtArgs>
    doctor?: boolean | SurveySection$doctorArgs<ExtArgs>
    department?: boolean | SurveySection$departmentArgs<ExtArgs>
    _count?: boolean | SurveySectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surveySection"]>

  export type SurveySectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionType?: boolean
    satisfaction?: boolean
    feedback?: boolean
    doctorId?: boolean
    departmentId?: boolean
    doctor?: boolean | SurveySection$doctorArgs<ExtArgs>
    department?: boolean | SurveySection$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["surveySection"]>

  export type SurveySectionSelectScalar = {
    id?: boolean
    sectionType?: boolean
    satisfaction?: boolean
    feedback?: boolean
    doctorId?: boolean
    departmentId?: boolean
  }

  export type SurveySectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surveyDoctorExamination?: boolean | SurveySection$surveyDoctorExaminationArgs<ExtArgs>
    surveyDoctorUltrasound?: boolean | SurveySection$surveyDoctorUltrasoundArgs<ExtArgs>
    surveyCustomerCare?: boolean | SurveySection$surveyCustomerCareArgs<ExtArgs>
    dissatisfied?: boolean | SurveySection$dissatisfiedArgs<ExtArgs>
    satisfied?: boolean | SurveySection$satisfiedArgs<ExtArgs>
    doctor?: boolean | SurveySection$doctorArgs<ExtArgs>
    department?: boolean | SurveySection$departmentArgs<ExtArgs>
    _count?: boolean | SurveySectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SurveySectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | SurveySection$doctorArgs<ExtArgs>
    department?: boolean | SurveySection$departmentArgs<ExtArgs>
  }

  export type $SurveySectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurveySection"
    objects: {
      surveyDoctorExamination: Prisma.$SurveyPayload<ExtArgs> | null
      surveyDoctorUltrasound: Prisma.$SurveyPayload<ExtArgs> | null
      surveyCustomerCare: Prisma.$SurveyPayload<ExtArgs> | null
      dissatisfied: Prisma.$DissatisfiedReasonPayload<ExtArgs>[]
      satisfied: Prisma.$SatisfiedReasonPayload<ExtArgs>[]
      doctor: Prisma.$DoctorPayload<ExtArgs> | null
      department: Prisma.$DepartmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionType: string
      satisfaction: number
      feedback: string | null
      doctorId: string | null
      departmentId: string | null
    }, ExtArgs["result"]["surveySection"]>
    composites: {}
  }

  type SurveySectionGetPayload<S extends boolean | null | undefined | SurveySectionDefaultArgs> = $Result.GetResult<Prisma.$SurveySectionPayload, S>

  type SurveySectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SurveySectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SurveySectionCountAggregateInputType | true
    }

  export interface SurveySectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurveySection'], meta: { name: 'SurveySection' } }
    /**
     * Find zero or one SurveySection that matches the filter.
     * @param {SurveySectionFindUniqueArgs} args - Arguments to find a SurveySection
     * @example
     * // Get one SurveySection
     * const surveySection = await prisma.surveySection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveySectionFindUniqueArgs>(args: SelectSubset<T, SurveySectionFindUniqueArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SurveySection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SurveySectionFindUniqueOrThrowArgs} args - Arguments to find a SurveySection
     * @example
     * // Get one SurveySection
     * const surveySection = await prisma.surveySection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveySectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveySectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SurveySection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveySectionFindFirstArgs} args - Arguments to find a SurveySection
     * @example
     * // Get one SurveySection
     * const surveySection = await prisma.surveySection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveySectionFindFirstArgs>(args?: SelectSubset<T, SurveySectionFindFirstArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SurveySection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveySectionFindFirstOrThrowArgs} args - Arguments to find a SurveySection
     * @example
     * // Get one SurveySection
     * const surveySection = await prisma.surveySection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveySectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveySectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SurveySections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveySectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurveySections
     * const surveySections = await prisma.surveySection.findMany()
     * 
     * // Get first 10 SurveySections
     * const surveySections = await prisma.surveySection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveySectionWithIdOnly = await prisma.surveySection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveySectionFindManyArgs>(args?: SelectSubset<T, SurveySectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SurveySection.
     * @param {SurveySectionCreateArgs} args - Arguments to create a SurveySection.
     * @example
     * // Create one SurveySection
     * const SurveySection = await prisma.surveySection.create({
     *   data: {
     *     // ... data to create a SurveySection
     *   }
     * })
     * 
     */
    create<T extends SurveySectionCreateArgs>(args: SelectSubset<T, SurveySectionCreateArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SurveySections.
     * @param {SurveySectionCreateManyArgs} args - Arguments to create many SurveySections.
     * @example
     * // Create many SurveySections
     * const surveySection = await prisma.surveySection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveySectionCreateManyArgs>(args?: SelectSubset<T, SurveySectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SurveySections and returns the data saved in the database.
     * @param {SurveySectionCreateManyAndReturnArgs} args - Arguments to create many SurveySections.
     * @example
     * // Create many SurveySections
     * const surveySection = await prisma.surveySection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SurveySections and only return the `id`
     * const surveySectionWithIdOnly = await prisma.surveySection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurveySectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SurveySectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SurveySection.
     * @param {SurveySectionDeleteArgs} args - Arguments to delete one SurveySection.
     * @example
     * // Delete one SurveySection
     * const SurveySection = await prisma.surveySection.delete({
     *   where: {
     *     // ... filter to delete one SurveySection
     *   }
     * })
     * 
     */
    delete<T extends SurveySectionDeleteArgs>(args: SelectSubset<T, SurveySectionDeleteArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SurveySection.
     * @param {SurveySectionUpdateArgs} args - Arguments to update one SurveySection.
     * @example
     * // Update one SurveySection
     * const surveySection = await prisma.surveySection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveySectionUpdateArgs>(args: SelectSubset<T, SurveySectionUpdateArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SurveySections.
     * @param {SurveySectionDeleteManyArgs} args - Arguments to filter SurveySections to delete.
     * @example
     * // Delete a few SurveySections
     * const { count } = await prisma.surveySection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveySectionDeleteManyArgs>(args?: SelectSubset<T, SurveySectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveySections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveySectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurveySections
     * const surveySection = await prisma.surveySection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveySectionUpdateManyArgs>(args: SelectSubset<T, SurveySectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SurveySection.
     * @param {SurveySectionUpsertArgs} args - Arguments to update or create a SurveySection.
     * @example
     * // Update or create a SurveySection
     * const surveySection = await prisma.surveySection.upsert({
     *   create: {
     *     // ... data to create a SurveySection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurveySection we want to update
     *   }
     * })
     */
    upsert<T extends SurveySectionUpsertArgs>(args: SelectSubset<T, SurveySectionUpsertArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SurveySections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveySectionCountArgs} args - Arguments to filter SurveySections to count.
     * @example
     * // Count the number of SurveySections
     * const count = await prisma.surveySection.count({
     *   where: {
     *     // ... the filter for the SurveySections we want to count
     *   }
     * })
    **/
    count<T extends SurveySectionCountArgs>(
      args?: Subset<T, SurveySectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveySectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurveySection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveySectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurveySectionAggregateArgs>(args: Subset<T, SurveySectionAggregateArgs>): Prisma.PrismaPromise<GetSurveySectionAggregateType<T>>

    /**
     * Group by SurveySection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveySectionGroupByArgs} args - Group by arguments.
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
      T extends SurveySectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveySectionGroupByArgs['orderBy'] }
        : { orderBy?: SurveySectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SurveySectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveySectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurveySection model
   */
  readonly fields: SurveySectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurveySection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveySectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    surveyDoctorExamination<T extends SurveySection$surveyDoctorExaminationArgs<ExtArgs> = {}>(args?: Subset<T, SurveySection$surveyDoctorExaminationArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    surveyDoctorUltrasound<T extends SurveySection$surveyDoctorUltrasoundArgs<ExtArgs> = {}>(args?: Subset<T, SurveySection$surveyDoctorUltrasoundArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    surveyCustomerCare<T extends SurveySection$surveyCustomerCareArgs<ExtArgs> = {}>(args?: Subset<T, SurveySection$surveyCustomerCareArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    dissatisfied<T extends SurveySection$dissatisfiedArgs<ExtArgs> = {}>(args?: Subset<T, SurveySection$dissatisfiedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DissatisfiedReasonPayload<ExtArgs>, T, "findMany"> | Null>
    satisfied<T extends SurveySection$satisfiedArgs<ExtArgs> = {}>(args?: Subset<T, SurveySection$satisfiedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatisfiedReasonPayload<ExtArgs>, T, "findMany"> | Null>
    doctor<T extends SurveySection$doctorArgs<ExtArgs> = {}>(args?: Subset<T, SurveySection$doctorArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    department<T extends SurveySection$departmentArgs<ExtArgs> = {}>(args?: Subset<T, SurveySection$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the SurveySection model
   */ 
  interface SurveySectionFieldRefs {
    readonly id: FieldRef<"SurveySection", 'String'>
    readonly sectionType: FieldRef<"SurveySection", 'String'>
    readonly satisfaction: FieldRef<"SurveySection", 'Int'>
    readonly feedback: FieldRef<"SurveySection", 'String'>
    readonly doctorId: FieldRef<"SurveySection", 'String'>
    readonly departmentId: FieldRef<"SurveySection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SurveySection findUnique
   */
  export type SurveySectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
    /**
     * Filter, which SurveySection to fetch.
     */
    where: SurveySectionWhereUniqueInput
  }

  /**
   * SurveySection findUniqueOrThrow
   */
  export type SurveySectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
    /**
     * Filter, which SurveySection to fetch.
     */
    where: SurveySectionWhereUniqueInput
  }

  /**
   * SurveySection findFirst
   */
  export type SurveySectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
    /**
     * Filter, which SurveySection to fetch.
     */
    where?: SurveySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveySections to fetch.
     */
    orderBy?: SurveySectionOrderByWithRelationInput | SurveySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveySections.
     */
    cursor?: SurveySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveySections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveySections.
     */
    distinct?: SurveySectionScalarFieldEnum | SurveySectionScalarFieldEnum[]
  }

  /**
   * SurveySection findFirstOrThrow
   */
  export type SurveySectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
    /**
     * Filter, which SurveySection to fetch.
     */
    where?: SurveySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveySections to fetch.
     */
    orderBy?: SurveySectionOrderByWithRelationInput | SurveySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveySections.
     */
    cursor?: SurveySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveySections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveySections.
     */
    distinct?: SurveySectionScalarFieldEnum | SurveySectionScalarFieldEnum[]
  }

  /**
   * SurveySection findMany
   */
  export type SurveySectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
    /**
     * Filter, which SurveySections to fetch.
     */
    where?: SurveySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveySections to fetch.
     */
    orderBy?: SurveySectionOrderByWithRelationInput | SurveySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurveySections.
     */
    cursor?: SurveySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveySections.
     */
    skip?: number
    distinct?: SurveySectionScalarFieldEnum | SurveySectionScalarFieldEnum[]
  }

  /**
   * SurveySection create
   */
  export type SurveySectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
    /**
     * The data needed to create a SurveySection.
     */
    data: XOR<SurveySectionCreateInput, SurveySectionUncheckedCreateInput>
  }

  /**
   * SurveySection createMany
   */
  export type SurveySectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurveySections.
     */
    data: SurveySectionCreateManyInput | SurveySectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SurveySection createManyAndReturn
   */
  export type SurveySectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SurveySections.
     */
    data: SurveySectionCreateManyInput | SurveySectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SurveySection update
   */
  export type SurveySectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
    /**
     * The data needed to update a SurveySection.
     */
    data: XOR<SurveySectionUpdateInput, SurveySectionUncheckedUpdateInput>
    /**
     * Choose, which SurveySection to update.
     */
    where: SurveySectionWhereUniqueInput
  }

  /**
   * SurveySection updateMany
   */
  export type SurveySectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurveySections.
     */
    data: XOR<SurveySectionUpdateManyMutationInput, SurveySectionUncheckedUpdateManyInput>
    /**
     * Filter which SurveySections to update
     */
    where?: SurveySectionWhereInput
  }

  /**
   * SurveySection upsert
   */
  export type SurveySectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
    /**
     * The filter to search for the SurveySection to update in case it exists.
     */
    where: SurveySectionWhereUniqueInput
    /**
     * In case the SurveySection found by the `where` argument doesn't exist, create a new SurveySection with this data.
     */
    create: XOR<SurveySectionCreateInput, SurveySectionUncheckedCreateInput>
    /**
     * In case the SurveySection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveySectionUpdateInput, SurveySectionUncheckedUpdateInput>
  }

  /**
   * SurveySection delete
   */
  export type SurveySectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
    /**
     * Filter which SurveySection to delete.
     */
    where: SurveySectionWhereUniqueInput
  }

  /**
   * SurveySection deleteMany
   */
  export type SurveySectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveySections to delete
     */
    where?: SurveySectionWhereInput
  }

  /**
   * SurveySection.surveyDoctorExamination
   */
  export type SurveySection$surveyDoctorExaminationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    where?: SurveyWhereInput
  }

  /**
   * SurveySection.surveyDoctorUltrasound
   */
  export type SurveySection$surveyDoctorUltrasoundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    where?: SurveyWhereInput
  }

  /**
   * SurveySection.surveyCustomerCare
   */
  export type SurveySection$surveyCustomerCareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    where?: SurveyWhereInput
  }

  /**
   * SurveySection.dissatisfied
   */
  export type SurveySection$dissatisfiedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonInclude<ExtArgs> | null
    where?: DissatisfiedReasonWhereInput
    orderBy?: DissatisfiedReasonOrderByWithRelationInput | DissatisfiedReasonOrderByWithRelationInput[]
    cursor?: DissatisfiedReasonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DissatisfiedReasonScalarFieldEnum | DissatisfiedReasonScalarFieldEnum[]
  }

  /**
   * SurveySection.satisfied
   */
  export type SurveySection$satisfiedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonInclude<ExtArgs> | null
    where?: SatisfiedReasonWhereInput
    orderBy?: SatisfiedReasonOrderByWithRelationInput | SatisfiedReasonOrderByWithRelationInput[]
    cursor?: SatisfiedReasonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SatisfiedReasonScalarFieldEnum | SatisfiedReasonScalarFieldEnum[]
  }

  /**
   * SurveySection.doctor
   */
  export type SurveySection$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * SurveySection.department
   */
  export type SurveySection$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * SurveySection without action
   */
  export type SurveySectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
  }


  /**
   * Model DissatisfiedReason
   */

  export type AggregateDissatisfiedReason = {
    _count: DissatisfiedReasonCountAggregateOutputType | null
    _min: DissatisfiedReasonMinAggregateOutputType | null
    _max: DissatisfiedReasonMaxAggregateOutputType | null
  }

  export type DissatisfiedReasonMinAggregateOutputType = {
    id: string | null
    content: string | null
    surveySectionId: string | null
  }

  export type DissatisfiedReasonMaxAggregateOutputType = {
    id: string | null
    content: string | null
    surveySectionId: string | null
  }

  export type DissatisfiedReasonCountAggregateOutputType = {
    id: number
    content: number
    surveySectionId: number
    _all: number
  }


  export type DissatisfiedReasonMinAggregateInputType = {
    id?: true
    content?: true
    surveySectionId?: true
  }

  export type DissatisfiedReasonMaxAggregateInputType = {
    id?: true
    content?: true
    surveySectionId?: true
  }

  export type DissatisfiedReasonCountAggregateInputType = {
    id?: true
    content?: true
    surveySectionId?: true
    _all?: true
  }

  export type DissatisfiedReasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DissatisfiedReason to aggregate.
     */
    where?: DissatisfiedReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DissatisfiedReasons to fetch.
     */
    orderBy?: DissatisfiedReasonOrderByWithRelationInput | DissatisfiedReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DissatisfiedReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DissatisfiedReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DissatisfiedReasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DissatisfiedReasons
    **/
    _count?: true | DissatisfiedReasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DissatisfiedReasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DissatisfiedReasonMaxAggregateInputType
  }

  export type GetDissatisfiedReasonAggregateType<T extends DissatisfiedReasonAggregateArgs> = {
        [P in keyof T & keyof AggregateDissatisfiedReason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDissatisfiedReason[P]>
      : GetScalarType<T[P], AggregateDissatisfiedReason[P]>
  }




  export type DissatisfiedReasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DissatisfiedReasonWhereInput
    orderBy?: DissatisfiedReasonOrderByWithAggregationInput | DissatisfiedReasonOrderByWithAggregationInput[]
    by: DissatisfiedReasonScalarFieldEnum[] | DissatisfiedReasonScalarFieldEnum
    having?: DissatisfiedReasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DissatisfiedReasonCountAggregateInputType | true
    _min?: DissatisfiedReasonMinAggregateInputType
    _max?: DissatisfiedReasonMaxAggregateInputType
  }

  export type DissatisfiedReasonGroupByOutputType = {
    id: string
    content: string
    surveySectionId: string
    _count: DissatisfiedReasonCountAggregateOutputType | null
    _min: DissatisfiedReasonMinAggregateOutputType | null
    _max: DissatisfiedReasonMaxAggregateOutputType | null
  }

  type GetDissatisfiedReasonGroupByPayload<T extends DissatisfiedReasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DissatisfiedReasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DissatisfiedReasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DissatisfiedReasonGroupByOutputType[P]>
            : GetScalarType<T[P], DissatisfiedReasonGroupByOutputType[P]>
        }
      >
    >


  export type DissatisfiedReasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    surveySectionId?: boolean
    surveySection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dissatisfiedReason"]>

  export type DissatisfiedReasonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    surveySectionId?: boolean
    surveySection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dissatisfiedReason"]>

  export type DissatisfiedReasonSelectScalar = {
    id?: boolean
    content?: boolean
    surveySectionId?: boolean
  }

  export type DissatisfiedReasonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surveySection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }
  export type DissatisfiedReasonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surveySection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }

  export type $DissatisfiedReasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DissatisfiedReason"
    objects: {
      surveySection: Prisma.$SurveySectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      surveySectionId: string
    }, ExtArgs["result"]["dissatisfiedReason"]>
    composites: {}
  }

  type DissatisfiedReasonGetPayload<S extends boolean | null | undefined | DissatisfiedReasonDefaultArgs> = $Result.GetResult<Prisma.$DissatisfiedReasonPayload, S>

  type DissatisfiedReasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DissatisfiedReasonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DissatisfiedReasonCountAggregateInputType | true
    }

  export interface DissatisfiedReasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DissatisfiedReason'], meta: { name: 'DissatisfiedReason' } }
    /**
     * Find zero or one DissatisfiedReason that matches the filter.
     * @param {DissatisfiedReasonFindUniqueArgs} args - Arguments to find a DissatisfiedReason
     * @example
     * // Get one DissatisfiedReason
     * const dissatisfiedReason = await prisma.dissatisfiedReason.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DissatisfiedReasonFindUniqueArgs>(args: SelectSubset<T, DissatisfiedReasonFindUniqueArgs<ExtArgs>>): Prisma__DissatisfiedReasonClient<$Result.GetResult<Prisma.$DissatisfiedReasonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DissatisfiedReason that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DissatisfiedReasonFindUniqueOrThrowArgs} args - Arguments to find a DissatisfiedReason
     * @example
     * // Get one DissatisfiedReason
     * const dissatisfiedReason = await prisma.dissatisfiedReason.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DissatisfiedReasonFindUniqueOrThrowArgs>(args: SelectSubset<T, DissatisfiedReasonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DissatisfiedReasonClient<$Result.GetResult<Prisma.$DissatisfiedReasonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DissatisfiedReason that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DissatisfiedReasonFindFirstArgs} args - Arguments to find a DissatisfiedReason
     * @example
     * // Get one DissatisfiedReason
     * const dissatisfiedReason = await prisma.dissatisfiedReason.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DissatisfiedReasonFindFirstArgs>(args?: SelectSubset<T, DissatisfiedReasonFindFirstArgs<ExtArgs>>): Prisma__DissatisfiedReasonClient<$Result.GetResult<Prisma.$DissatisfiedReasonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DissatisfiedReason that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DissatisfiedReasonFindFirstOrThrowArgs} args - Arguments to find a DissatisfiedReason
     * @example
     * // Get one DissatisfiedReason
     * const dissatisfiedReason = await prisma.dissatisfiedReason.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DissatisfiedReasonFindFirstOrThrowArgs>(args?: SelectSubset<T, DissatisfiedReasonFindFirstOrThrowArgs<ExtArgs>>): Prisma__DissatisfiedReasonClient<$Result.GetResult<Prisma.$DissatisfiedReasonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DissatisfiedReasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DissatisfiedReasonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DissatisfiedReasons
     * const dissatisfiedReasons = await prisma.dissatisfiedReason.findMany()
     * 
     * // Get first 10 DissatisfiedReasons
     * const dissatisfiedReasons = await prisma.dissatisfiedReason.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dissatisfiedReasonWithIdOnly = await prisma.dissatisfiedReason.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DissatisfiedReasonFindManyArgs>(args?: SelectSubset<T, DissatisfiedReasonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DissatisfiedReasonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DissatisfiedReason.
     * @param {DissatisfiedReasonCreateArgs} args - Arguments to create a DissatisfiedReason.
     * @example
     * // Create one DissatisfiedReason
     * const DissatisfiedReason = await prisma.dissatisfiedReason.create({
     *   data: {
     *     // ... data to create a DissatisfiedReason
     *   }
     * })
     * 
     */
    create<T extends DissatisfiedReasonCreateArgs>(args: SelectSubset<T, DissatisfiedReasonCreateArgs<ExtArgs>>): Prisma__DissatisfiedReasonClient<$Result.GetResult<Prisma.$DissatisfiedReasonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DissatisfiedReasons.
     * @param {DissatisfiedReasonCreateManyArgs} args - Arguments to create many DissatisfiedReasons.
     * @example
     * // Create many DissatisfiedReasons
     * const dissatisfiedReason = await prisma.dissatisfiedReason.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DissatisfiedReasonCreateManyArgs>(args?: SelectSubset<T, DissatisfiedReasonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DissatisfiedReasons and returns the data saved in the database.
     * @param {DissatisfiedReasonCreateManyAndReturnArgs} args - Arguments to create many DissatisfiedReasons.
     * @example
     * // Create many DissatisfiedReasons
     * const dissatisfiedReason = await prisma.dissatisfiedReason.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DissatisfiedReasons and only return the `id`
     * const dissatisfiedReasonWithIdOnly = await prisma.dissatisfiedReason.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DissatisfiedReasonCreateManyAndReturnArgs>(args?: SelectSubset<T, DissatisfiedReasonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DissatisfiedReasonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DissatisfiedReason.
     * @param {DissatisfiedReasonDeleteArgs} args - Arguments to delete one DissatisfiedReason.
     * @example
     * // Delete one DissatisfiedReason
     * const DissatisfiedReason = await prisma.dissatisfiedReason.delete({
     *   where: {
     *     // ... filter to delete one DissatisfiedReason
     *   }
     * })
     * 
     */
    delete<T extends DissatisfiedReasonDeleteArgs>(args: SelectSubset<T, DissatisfiedReasonDeleteArgs<ExtArgs>>): Prisma__DissatisfiedReasonClient<$Result.GetResult<Prisma.$DissatisfiedReasonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DissatisfiedReason.
     * @param {DissatisfiedReasonUpdateArgs} args - Arguments to update one DissatisfiedReason.
     * @example
     * // Update one DissatisfiedReason
     * const dissatisfiedReason = await prisma.dissatisfiedReason.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DissatisfiedReasonUpdateArgs>(args: SelectSubset<T, DissatisfiedReasonUpdateArgs<ExtArgs>>): Prisma__DissatisfiedReasonClient<$Result.GetResult<Prisma.$DissatisfiedReasonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DissatisfiedReasons.
     * @param {DissatisfiedReasonDeleteManyArgs} args - Arguments to filter DissatisfiedReasons to delete.
     * @example
     * // Delete a few DissatisfiedReasons
     * const { count } = await prisma.dissatisfiedReason.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DissatisfiedReasonDeleteManyArgs>(args?: SelectSubset<T, DissatisfiedReasonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DissatisfiedReasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DissatisfiedReasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DissatisfiedReasons
     * const dissatisfiedReason = await prisma.dissatisfiedReason.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DissatisfiedReasonUpdateManyArgs>(args: SelectSubset<T, DissatisfiedReasonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DissatisfiedReason.
     * @param {DissatisfiedReasonUpsertArgs} args - Arguments to update or create a DissatisfiedReason.
     * @example
     * // Update or create a DissatisfiedReason
     * const dissatisfiedReason = await prisma.dissatisfiedReason.upsert({
     *   create: {
     *     // ... data to create a DissatisfiedReason
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DissatisfiedReason we want to update
     *   }
     * })
     */
    upsert<T extends DissatisfiedReasonUpsertArgs>(args: SelectSubset<T, DissatisfiedReasonUpsertArgs<ExtArgs>>): Prisma__DissatisfiedReasonClient<$Result.GetResult<Prisma.$DissatisfiedReasonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DissatisfiedReasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DissatisfiedReasonCountArgs} args - Arguments to filter DissatisfiedReasons to count.
     * @example
     * // Count the number of DissatisfiedReasons
     * const count = await prisma.dissatisfiedReason.count({
     *   where: {
     *     // ... the filter for the DissatisfiedReasons we want to count
     *   }
     * })
    **/
    count<T extends DissatisfiedReasonCountArgs>(
      args?: Subset<T, DissatisfiedReasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DissatisfiedReasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DissatisfiedReason.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DissatisfiedReasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DissatisfiedReasonAggregateArgs>(args: Subset<T, DissatisfiedReasonAggregateArgs>): Prisma.PrismaPromise<GetDissatisfiedReasonAggregateType<T>>

    /**
     * Group by DissatisfiedReason.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DissatisfiedReasonGroupByArgs} args - Group by arguments.
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
      T extends DissatisfiedReasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DissatisfiedReasonGroupByArgs['orderBy'] }
        : { orderBy?: DissatisfiedReasonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DissatisfiedReasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDissatisfiedReasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DissatisfiedReason model
   */
  readonly fields: DissatisfiedReasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DissatisfiedReason.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DissatisfiedReasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    surveySection<T extends SurveySectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurveySectionDefaultArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DissatisfiedReason model
   */ 
  interface DissatisfiedReasonFieldRefs {
    readonly id: FieldRef<"DissatisfiedReason", 'String'>
    readonly content: FieldRef<"DissatisfiedReason", 'String'>
    readonly surveySectionId: FieldRef<"DissatisfiedReason", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DissatisfiedReason findUnique
   */
  export type DissatisfiedReasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter, which DissatisfiedReason to fetch.
     */
    where: DissatisfiedReasonWhereUniqueInput
  }

  /**
   * DissatisfiedReason findUniqueOrThrow
   */
  export type DissatisfiedReasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter, which DissatisfiedReason to fetch.
     */
    where: DissatisfiedReasonWhereUniqueInput
  }

  /**
   * DissatisfiedReason findFirst
   */
  export type DissatisfiedReasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter, which DissatisfiedReason to fetch.
     */
    where?: DissatisfiedReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DissatisfiedReasons to fetch.
     */
    orderBy?: DissatisfiedReasonOrderByWithRelationInput | DissatisfiedReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DissatisfiedReasons.
     */
    cursor?: DissatisfiedReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DissatisfiedReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DissatisfiedReasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DissatisfiedReasons.
     */
    distinct?: DissatisfiedReasonScalarFieldEnum | DissatisfiedReasonScalarFieldEnum[]
  }

  /**
   * DissatisfiedReason findFirstOrThrow
   */
  export type DissatisfiedReasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter, which DissatisfiedReason to fetch.
     */
    where?: DissatisfiedReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DissatisfiedReasons to fetch.
     */
    orderBy?: DissatisfiedReasonOrderByWithRelationInput | DissatisfiedReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DissatisfiedReasons.
     */
    cursor?: DissatisfiedReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DissatisfiedReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DissatisfiedReasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DissatisfiedReasons.
     */
    distinct?: DissatisfiedReasonScalarFieldEnum | DissatisfiedReasonScalarFieldEnum[]
  }

  /**
   * DissatisfiedReason findMany
   */
  export type DissatisfiedReasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter, which DissatisfiedReasons to fetch.
     */
    where?: DissatisfiedReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DissatisfiedReasons to fetch.
     */
    orderBy?: DissatisfiedReasonOrderByWithRelationInput | DissatisfiedReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DissatisfiedReasons.
     */
    cursor?: DissatisfiedReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DissatisfiedReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DissatisfiedReasons.
     */
    skip?: number
    distinct?: DissatisfiedReasonScalarFieldEnum | DissatisfiedReasonScalarFieldEnum[]
  }

  /**
   * DissatisfiedReason create
   */
  export type DissatisfiedReasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonInclude<ExtArgs> | null
    /**
     * The data needed to create a DissatisfiedReason.
     */
    data: XOR<DissatisfiedReasonCreateInput, DissatisfiedReasonUncheckedCreateInput>
  }

  /**
   * DissatisfiedReason createMany
   */
  export type DissatisfiedReasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DissatisfiedReasons.
     */
    data: DissatisfiedReasonCreateManyInput | DissatisfiedReasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DissatisfiedReason createManyAndReturn
   */
  export type DissatisfiedReasonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DissatisfiedReasons.
     */
    data: DissatisfiedReasonCreateManyInput | DissatisfiedReasonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DissatisfiedReason update
   */
  export type DissatisfiedReasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonInclude<ExtArgs> | null
    /**
     * The data needed to update a DissatisfiedReason.
     */
    data: XOR<DissatisfiedReasonUpdateInput, DissatisfiedReasonUncheckedUpdateInput>
    /**
     * Choose, which DissatisfiedReason to update.
     */
    where: DissatisfiedReasonWhereUniqueInput
  }

  /**
   * DissatisfiedReason updateMany
   */
  export type DissatisfiedReasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DissatisfiedReasons.
     */
    data: XOR<DissatisfiedReasonUpdateManyMutationInput, DissatisfiedReasonUncheckedUpdateManyInput>
    /**
     * Filter which DissatisfiedReasons to update
     */
    where?: DissatisfiedReasonWhereInput
  }

  /**
   * DissatisfiedReason upsert
   */
  export type DissatisfiedReasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonInclude<ExtArgs> | null
    /**
     * The filter to search for the DissatisfiedReason to update in case it exists.
     */
    where: DissatisfiedReasonWhereUniqueInput
    /**
     * In case the DissatisfiedReason found by the `where` argument doesn't exist, create a new DissatisfiedReason with this data.
     */
    create: XOR<DissatisfiedReasonCreateInput, DissatisfiedReasonUncheckedCreateInput>
    /**
     * In case the DissatisfiedReason was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DissatisfiedReasonUpdateInput, DissatisfiedReasonUncheckedUpdateInput>
  }

  /**
   * DissatisfiedReason delete
   */
  export type DissatisfiedReasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter which DissatisfiedReason to delete.
     */
    where: DissatisfiedReasonWhereUniqueInput
  }

  /**
   * DissatisfiedReason deleteMany
   */
  export type DissatisfiedReasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DissatisfiedReasons to delete
     */
    where?: DissatisfiedReasonWhereInput
  }

  /**
   * DissatisfiedReason without action
   */
  export type DissatisfiedReasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DissatisfiedReason
     */
    select?: DissatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DissatisfiedReasonInclude<ExtArgs> | null
  }


  /**
   * Model SatisfiedReason
   */

  export type AggregateSatisfiedReason = {
    _count: SatisfiedReasonCountAggregateOutputType | null
    _min: SatisfiedReasonMinAggregateOutputType | null
    _max: SatisfiedReasonMaxAggregateOutputType | null
  }

  export type SatisfiedReasonMinAggregateOutputType = {
    id: string | null
    content: string | null
    surveySectionId: string | null
  }

  export type SatisfiedReasonMaxAggregateOutputType = {
    id: string | null
    content: string | null
    surveySectionId: string | null
  }

  export type SatisfiedReasonCountAggregateOutputType = {
    id: number
    content: number
    surveySectionId: number
    _all: number
  }


  export type SatisfiedReasonMinAggregateInputType = {
    id?: true
    content?: true
    surveySectionId?: true
  }

  export type SatisfiedReasonMaxAggregateInputType = {
    id?: true
    content?: true
    surveySectionId?: true
  }

  export type SatisfiedReasonCountAggregateInputType = {
    id?: true
    content?: true
    surveySectionId?: true
    _all?: true
  }

  export type SatisfiedReasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SatisfiedReason to aggregate.
     */
    where?: SatisfiedReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfiedReasons to fetch.
     */
    orderBy?: SatisfiedReasonOrderByWithRelationInput | SatisfiedReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SatisfiedReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfiedReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfiedReasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SatisfiedReasons
    **/
    _count?: true | SatisfiedReasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SatisfiedReasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SatisfiedReasonMaxAggregateInputType
  }

  export type GetSatisfiedReasonAggregateType<T extends SatisfiedReasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSatisfiedReason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSatisfiedReason[P]>
      : GetScalarType<T[P], AggregateSatisfiedReason[P]>
  }




  export type SatisfiedReasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatisfiedReasonWhereInput
    orderBy?: SatisfiedReasonOrderByWithAggregationInput | SatisfiedReasonOrderByWithAggregationInput[]
    by: SatisfiedReasonScalarFieldEnum[] | SatisfiedReasonScalarFieldEnum
    having?: SatisfiedReasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SatisfiedReasonCountAggregateInputType | true
    _min?: SatisfiedReasonMinAggregateInputType
    _max?: SatisfiedReasonMaxAggregateInputType
  }

  export type SatisfiedReasonGroupByOutputType = {
    id: string
    content: string
    surveySectionId: string
    _count: SatisfiedReasonCountAggregateOutputType | null
    _min: SatisfiedReasonMinAggregateOutputType | null
    _max: SatisfiedReasonMaxAggregateOutputType | null
  }

  type GetSatisfiedReasonGroupByPayload<T extends SatisfiedReasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SatisfiedReasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SatisfiedReasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SatisfiedReasonGroupByOutputType[P]>
            : GetScalarType<T[P], SatisfiedReasonGroupByOutputType[P]>
        }
      >
    >


  export type SatisfiedReasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    surveySectionId?: boolean
    surveySection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satisfiedReason"]>

  export type SatisfiedReasonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    surveySectionId?: boolean
    surveySection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satisfiedReason"]>

  export type SatisfiedReasonSelectScalar = {
    id?: boolean
    content?: boolean
    surveySectionId?: boolean
  }

  export type SatisfiedReasonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surveySection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }
  export type SatisfiedReasonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surveySection?: boolean | SurveySectionDefaultArgs<ExtArgs>
  }

  export type $SatisfiedReasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SatisfiedReason"
    objects: {
      surveySection: Prisma.$SurveySectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      surveySectionId: string
    }, ExtArgs["result"]["satisfiedReason"]>
    composites: {}
  }

  type SatisfiedReasonGetPayload<S extends boolean | null | undefined | SatisfiedReasonDefaultArgs> = $Result.GetResult<Prisma.$SatisfiedReasonPayload, S>

  type SatisfiedReasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SatisfiedReasonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SatisfiedReasonCountAggregateInputType | true
    }

  export interface SatisfiedReasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SatisfiedReason'], meta: { name: 'SatisfiedReason' } }
    /**
     * Find zero or one SatisfiedReason that matches the filter.
     * @param {SatisfiedReasonFindUniqueArgs} args - Arguments to find a SatisfiedReason
     * @example
     * // Get one SatisfiedReason
     * const satisfiedReason = await prisma.satisfiedReason.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SatisfiedReasonFindUniqueArgs>(args: SelectSubset<T, SatisfiedReasonFindUniqueArgs<ExtArgs>>): Prisma__SatisfiedReasonClient<$Result.GetResult<Prisma.$SatisfiedReasonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SatisfiedReason that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SatisfiedReasonFindUniqueOrThrowArgs} args - Arguments to find a SatisfiedReason
     * @example
     * // Get one SatisfiedReason
     * const satisfiedReason = await prisma.satisfiedReason.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SatisfiedReasonFindUniqueOrThrowArgs>(args: SelectSubset<T, SatisfiedReasonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SatisfiedReasonClient<$Result.GetResult<Prisma.$SatisfiedReasonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SatisfiedReason that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfiedReasonFindFirstArgs} args - Arguments to find a SatisfiedReason
     * @example
     * // Get one SatisfiedReason
     * const satisfiedReason = await prisma.satisfiedReason.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SatisfiedReasonFindFirstArgs>(args?: SelectSubset<T, SatisfiedReasonFindFirstArgs<ExtArgs>>): Prisma__SatisfiedReasonClient<$Result.GetResult<Prisma.$SatisfiedReasonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SatisfiedReason that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfiedReasonFindFirstOrThrowArgs} args - Arguments to find a SatisfiedReason
     * @example
     * // Get one SatisfiedReason
     * const satisfiedReason = await prisma.satisfiedReason.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SatisfiedReasonFindFirstOrThrowArgs>(args?: SelectSubset<T, SatisfiedReasonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SatisfiedReasonClient<$Result.GetResult<Prisma.$SatisfiedReasonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SatisfiedReasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfiedReasonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SatisfiedReasons
     * const satisfiedReasons = await prisma.satisfiedReason.findMany()
     * 
     * // Get first 10 SatisfiedReasons
     * const satisfiedReasons = await prisma.satisfiedReason.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const satisfiedReasonWithIdOnly = await prisma.satisfiedReason.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SatisfiedReasonFindManyArgs>(args?: SelectSubset<T, SatisfiedReasonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatisfiedReasonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SatisfiedReason.
     * @param {SatisfiedReasonCreateArgs} args - Arguments to create a SatisfiedReason.
     * @example
     * // Create one SatisfiedReason
     * const SatisfiedReason = await prisma.satisfiedReason.create({
     *   data: {
     *     // ... data to create a SatisfiedReason
     *   }
     * })
     * 
     */
    create<T extends SatisfiedReasonCreateArgs>(args: SelectSubset<T, SatisfiedReasonCreateArgs<ExtArgs>>): Prisma__SatisfiedReasonClient<$Result.GetResult<Prisma.$SatisfiedReasonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SatisfiedReasons.
     * @param {SatisfiedReasonCreateManyArgs} args - Arguments to create many SatisfiedReasons.
     * @example
     * // Create many SatisfiedReasons
     * const satisfiedReason = await prisma.satisfiedReason.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SatisfiedReasonCreateManyArgs>(args?: SelectSubset<T, SatisfiedReasonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SatisfiedReasons and returns the data saved in the database.
     * @param {SatisfiedReasonCreateManyAndReturnArgs} args - Arguments to create many SatisfiedReasons.
     * @example
     * // Create many SatisfiedReasons
     * const satisfiedReason = await prisma.satisfiedReason.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SatisfiedReasons and only return the `id`
     * const satisfiedReasonWithIdOnly = await prisma.satisfiedReason.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SatisfiedReasonCreateManyAndReturnArgs>(args?: SelectSubset<T, SatisfiedReasonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatisfiedReasonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SatisfiedReason.
     * @param {SatisfiedReasonDeleteArgs} args - Arguments to delete one SatisfiedReason.
     * @example
     * // Delete one SatisfiedReason
     * const SatisfiedReason = await prisma.satisfiedReason.delete({
     *   where: {
     *     // ... filter to delete one SatisfiedReason
     *   }
     * })
     * 
     */
    delete<T extends SatisfiedReasonDeleteArgs>(args: SelectSubset<T, SatisfiedReasonDeleteArgs<ExtArgs>>): Prisma__SatisfiedReasonClient<$Result.GetResult<Prisma.$SatisfiedReasonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SatisfiedReason.
     * @param {SatisfiedReasonUpdateArgs} args - Arguments to update one SatisfiedReason.
     * @example
     * // Update one SatisfiedReason
     * const satisfiedReason = await prisma.satisfiedReason.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SatisfiedReasonUpdateArgs>(args: SelectSubset<T, SatisfiedReasonUpdateArgs<ExtArgs>>): Prisma__SatisfiedReasonClient<$Result.GetResult<Prisma.$SatisfiedReasonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SatisfiedReasons.
     * @param {SatisfiedReasonDeleteManyArgs} args - Arguments to filter SatisfiedReasons to delete.
     * @example
     * // Delete a few SatisfiedReasons
     * const { count } = await prisma.satisfiedReason.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SatisfiedReasonDeleteManyArgs>(args?: SelectSubset<T, SatisfiedReasonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SatisfiedReasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfiedReasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SatisfiedReasons
     * const satisfiedReason = await prisma.satisfiedReason.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SatisfiedReasonUpdateManyArgs>(args: SelectSubset<T, SatisfiedReasonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SatisfiedReason.
     * @param {SatisfiedReasonUpsertArgs} args - Arguments to update or create a SatisfiedReason.
     * @example
     * // Update or create a SatisfiedReason
     * const satisfiedReason = await prisma.satisfiedReason.upsert({
     *   create: {
     *     // ... data to create a SatisfiedReason
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SatisfiedReason we want to update
     *   }
     * })
     */
    upsert<T extends SatisfiedReasonUpsertArgs>(args: SelectSubset<T, SatisfiedReasonUpsertArgs<ExtArgs>>): Prisma__SatisfiedReasonClient<$Result.GetResult<Prisma.$SatisfiedReasonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SatisfiedReasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfiedReasonCountArgs} args - Arguments to filter SatisfiedReasons to count.
     * @example
     * // Count the number of SatisfiedReasons
     * const count = await prisma.satisfiedReason.count({
     *   where: {
     *     // ... the filter for the SatisfiedReasons we want to count
     *   }
     * })
    **/
    count<T extends SatisfiedReasonCountArgs>(
      args?: Subset<T, SatisfiedReasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SatisfiedReasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SatisfiedReason.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfiedReasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SatisfiedReasonAggregateArgs>(args: Subset<T, SatisfiedReasonAggregateArgs>): Prisma.PrismaPromise<GetSatisfiedReasonAggregateType<T>>

    /**
     * Group by SatisfiedReason.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatisfiedReasonGroupByArgs} args - Group by arguments.
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
      T extends SatisfiedReasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SatisfiedReasonGroupByArgs['orderBy'] }
        : { orderBy?: SatisfiedReasonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SatisfiedReasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSatisfiedReasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SatisfiedReason model
   */
  readonly fields: SatisfiedReasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SatisfiedReason.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SatisfiedReasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    surveySection<T extends SurveySectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurveySectionDefaultArgs<ExtArgs>>): Prisma__SurveySectionClient<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SatisfiedReason model
   */ 
  interface SatisfiedReasonFieldRefs {
    readonly id: FieldRef<"SatisfiedReason", 'String'>
    readonly content: FieldRef<"SatisfiedReason", 'String'>
    readonly surveySectionId: FieldRef<"SatisfiedReason", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SatisfiedReason findUnique
   */
  export type SatisfiedReasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter, which SatisfiedReason to fetch.
     */
    where: SatisfiedReasonWhereUniqueInput
  }

  /**
   * SatisfiedReason findUniqueOrThrow
   */
  export type SatisfiedReasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter, which SatisfiedReason to fetch.
     */
    where: SatisfiedReasonWhereUniqueInput
  }

  /**
   * SatisfiedReason findFirst
   */
  export type SatisfiedReasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter, which SatisfiedReason to fetch.
     */
    where?: SatisfiedReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfiedReasons to fetch.
     */
    orderBy?: SatisfiedReasonOrderByWithRelationInput | SatisfiedReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SatisfiedReasons.
     */
    cursor?: SatisfiedReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfiedReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfiedReasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SatisfiedReasons.
     */
    distinct?: SatisfiedReasonScalarFieldEnum | SatisfiedReasonScalarFieldEnum[]
  }

  /**
   * SatisfiedReason findFirstOrThrow
   */
  export type SatisfiedReasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter, which SatisfiedReason to fetch.
     */
    where?: SatisfiedReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfiedReasons to fetch.
     */
    orderBy?: SatisfiedReasonOrderByWithRelationInput | SatisfiedReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SatisfiedReasons.
     */
    cursor?: SatisfiedReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfiedReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfiedReasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SatisfiedReasons.
     */
    distinct?: SatisfiedReasonScalarFieldEnum | SatisfiedReasonScalarFieldEnum[]
  }

  /**
   * SatisfiedReason findMany
   */
  export type SatisfiedReasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter, which SatisfiedReasons to fetch.
     */
    where?: SatisfiedReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatisfiedReasons to fetch.
     */
    orderBy?: SatisfiedReasonOrderByWithRelationInput | SatisfiedReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SatisfiedReasons.
     */
    cursor?: SatisfiedReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatisfiedReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatisfiedReasons.
     */
    skip?: number
    distinct?: SatisfiedReasonScalarFieldEnum | SatisfiedReasonScalarFieldEnum[]
  }

  /**
   * SatisfiedReason create
   */
  export type SatisfiedReasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonInclude<ExtArgs> | null
    /**
     * The data needed to create a SatisfiedReason.
     */
    data: XOR<SatisfiedReasonCreateInput, SatisfiedReasonUncheckedCreateInput>
  }

  /**
   * SatisfiedReason createMany
   */
  export type SatisfiedReasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SatisfiedReasons.
     */
    data: SatisfiedReasonCreateManyInput | SatisfiedReasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SatisfiedReason createManyAndReturn
   */
  export type SatisfiedReasonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SatisfiedReasons.
     */
    data: SatisfiedReasonCreateManyInput | SatisfiedReasonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SatisfiedReason update
   */
  export type SatisfiedReasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonInclude<ExtArgs> | null
    /**
     * The data needed to update a SatisfiedReason.
     */
    data: XOR<SatisfiedReasonUpdateInput, SatisfiedReasonUncheckedUpdateInput>
    /**
     * Choose, which SatisfiedReason to update.
     */
    where: SatisfiedReasonWhereUniqueInput
  }

  /**
   * SatisfiedReason updateMany
   */
  export type SatisfiedReasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SatisfiedReasons.
     */
    data: XOR<SatisfiedReasonUpdateManyMutationInput, SatisfiedReasonUncheckedUpdateManyInput>
    /**
     * Filter which SatisfiedReasons to update
     */
    where?: SatisfiedReasonWhereInput
  }

  /**
   * SatisfiedReason upsert
   */
  export type SatisfiedReasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonInclude<ExtArgs> | null
    /**
     * The filter to search for the SatisfiedReason to update in case it exists.
     */
    where: SatisfiedReasonWhereUniqueInput
    /**
     * In case the SatisfiedReason found by the `where` argument doesn't exist, create a new SatisfiedReason with this data.
     */
    create: XOR<SatisfiedReasonCreateInput, SatisfiedReasonUncheckedCreateInput>
    /**
     * In case the SatisfiedReason was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SatisfiedReasonUpdateInput, SatisfiedReasonUncheckedUpdateInput>
  }

  /**
   * SatisfiedReason delete
   */
  export type SatisfiedReasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonInclude<ExtArgs> | null
    /**
     * Filter which SatisfiedReason to delete.
     */
    where: SatisfiedReasonWhereUniqueInput
  }

  /**
   * SatisfiedReason deleteMany
   */
  export type SatisfiedReasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SatisfiedReasons to delete
     */
    where?: SatisfiedReasonWhereInput
  }

  /**
   * SatisfiedReason without action
   */
  export type SatisfiedReasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatisfiedReason
     */
    select?: SatisfiedReasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatisfiedReasonInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    code: string
    name: string
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    SurveySection?: boolean | Doctor$SurveySectionArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }

  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SurveySection?: boolean | Doctor$SurveySectionArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      SurveySection: Prisma.$SurveySectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SurveySection<T extends Doctor$SurveySectionArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$SurveySectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Doctor model
   */ 
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly code: FieldRef<"Doctor", 'String'>
    readonly name: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
  }

  /**
   * Doctor.SurveySection
   */
  export type Doctor$SurveySectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
    where?: SurveySectionWhereInput
    orderBy?: SurveySectionOrderByWithRelationInput | SurveySectionOrderByWithRelationInput[]
    cursor?: SurveySectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurveySectionScalarFieldEnum | SurveySectionScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    branchId: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    branchId: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    code: number
    name: number
    branchId: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    branchId?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    branchId?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    branchId?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    code: string
    name: string
    branchId: string | null
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    branchId?: boolean
    SurveySection?: boolean | Department$SurveySectionArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    branchId?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    branchId?: boolean
  }

  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SurveySection?: boolean | Department$SurveySectionArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      SurveySection: Prisma.$SurveySectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      branchId: string | null
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SurveySection<T extends Department$SurveySectionArgs<ExtArgs> = {}>(args?: Subset<T, Department$SurveySectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveySectionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Department model
   */ 
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly code: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly branchId: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department.SurveySection
   */
  export type Department$SurveySectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveySection
     */
    select?: SurveySectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveySectionInclude<ExtArgs> | null
    where?: SurveySectionWhereInput
    orderBy?: SurveySectionOrderByWithRelationInput | SurveySectionOrderByWithRelationInput[]
    cursor?: SurveySectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurveySectionScalarFieldEnum | SurveySectionScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
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


  export const SurveyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    overallSatisfaction: 'overallSatisfaction',
    doctorExaminationSectionId: 'doctorExaminationSectionId',
    doctorUltrasoundSectionId: 'doctorUltrasoundSectionId',
    customerCareSectionId: 'customerCareSectionId'
  };

  export type SurveyScalarFieldEnum = (typeof SurveyScalarFieldEnum)[keyof typeof SurveyScalarFieldEnum]


  export const SurveySectionScalarFieldEnum: {
    id: 'id',
    sectionType: 'sectionType',
    satisfaction: 'satisfaction',
    feedback: 'feedback',
    doctorId: 'doctorId',
    departmentId: 'departmentId'
  };

  export type SurveySectionScalarFieldEnum = (typeof SurveySectionScalarFieldEnum)[keyof typeof SurveySectionScalarFieldEnum]


  export const DissatisfiedReasonScalarFieldEnum: {
    id: 'id',
    content: 'content',
    surveySectionId: 'surveySectionId'
  };

  export type DissatisfiedReasonScalarFieldEnum = (typeof DissatisfiedReasonScalarFieldEnum)[keyof typeof DissatisfiedReasonScalarFieldEnum]


  export const SatisfiedReasonScalarFieldEnum: {
    id: 'id',
    content: 'content',
    surveySectionId: 'surveySectionId'
  };

  export type SatisfiedReasonScalarFieldEnum = (typeof SatisfiedReasonScalarFieldEnum)[keyof typeof SatisfiedReasonScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    branchId: 'branchId'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SurveyWhereInput = {
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    id?: StringFilter<"Survey"> | string
    createdAt?: DateTimeFilter<"Survey"> | Date | string
    updatedAt?: DateTimeFilter<"Survey"> | Date | string
    overallSatisfaction?: FloatNullableFilter<"Survey"> | number | null
    doctorExaminationSectionId?: StringFilter<"Survey"> | string
    doctorUltrasoundSectionId?: StringFilter<"Survey"> | string
    customerCareSectionId?: StringFilter<"Survey"> | string
    doctorExaminationSection?: XOR<SurveySectionRelationFilter, SurveySectionWhereInput>
    doctorUltrasoundSection?: XOR<SurveySectionRelationFilter, SurveySectionWhereInput>
    customerCareSection?: XOR<SurveySectionRelationFilter, SurveySectionWhereInput>
  }

  export type SurveyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    overallSatisfaction?: SortOrderInput | SortOrder
    doctorExaminationSectionId?: SortOrder
    doctorUltrasoundSectionId?: SortOrder
    customerCareSectionId?: SortOrder
    doctorExaminationSection?: SurveySectionOrderByWithRelationInput
    doctorUltrasoundSection?: SurveySectionOrderByWithRelationInput
    customerCareSection?: SurveySectionOrderByWithRelationInput
  }

  export type SurveyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    doctorExaminationSectionId?: string
    doctorUltrasoundSectionId?: string
    customerCareSectionId?: string
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    createdAt?: DateTimeFilter<"Survey"> | Date | string
    updatedAt?: DateTimeFilter<"Survey"> | Date | string
    overallSatisfaction?: FloatNullableFilter<"Survey"> | number | null
    doctorExaminationSection?: XOR<SurveySectionRelationFilter, SurveySectionWhereInput>
    doctorUltrasoundSection?: XOR<SurveySectionRelationFilter, SurveySectionWhereInput>
    customerCareSection?: XOR<SurveySectionRelationFilter, SurveySectionWhereInput>
  }, "id" | "doctorExaminationSectionId" | "doctorUltrasoundSectionId" | "customerCareSectionId">

  export type SurveyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    overallSatisfaction?: SortOrderInput | SortOrder
    doctorExaminationSectionId?: SortOrder
    doctorUltrasoundSectionId?: SortOrder
    customerCareSectionId?: SortOrder
    _count?: SurveyCountOrderByAggregateInput
    _avg?: SurveyAvgOrderByAggregateInput
    _max?: SurveyMaxOrderByAggregateInput
    _min?: SurveyMinOrderByAggregateInput
    _sum?: SurveySumOrderByAggregateInput
  }

  export type SurveyScalarWhereWithAggregatesInput = {
    AND?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    OR?: SurveyScalarWhereWithAggregatesInput[]
    NOT?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Survey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Survey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Survey"> | Date | string
    overallSatisfaction?: FloatNullableWithAggregatesFilter<"Survey"> | number | null
    doctorExaminationSectionId?: StringWithAggregatesFilter<"Survey"> | string
    doctorUltrasoundSectionId?: StringWithAggregatesFilter<"Survey"> | string
    customerCareSectionId?: StringWithAggregatesFilter<"Survey"> | string
  }

  export type SurveySectionWhereInput = {
    AND?: SurveySectionWhereInput | SurveySectionWhereInput[]
    OR?: SurveySectionWhereInput[]
    NOT?: SurveySectionWhereInput | SurveySectionWhereInput[]
    id?: StringFilter<"SurveySection"> | string
    sectionType?: StringFilter<"SurveySection"> | string
    satisfaction?: IntFilter<"SurveySection"> | number
    feedback?: StringNullableFilter<"SurveySection"> | string | null
    doctorId?: StringNullableFilter<"SurveySection"> | string | null
    departmentId?: StringNullableFilter<"SurveySection"> | string | null
    surveyDoctorExamination?: XOR<SurveyNullableRelationFilter, SurveyWhereInput> | null
    surveyDoctorUltrasound?: XOR<SurveyNullableRelationFilter, SurveyWhereInput> | null
    surveyCustomerCare?: XOR<SurveyNullableRelationFilter, SurveyWhereInput> | null
    dissatisfied?: DissatisfiedReasonListRelationFilter
    satisfied?: SatisfiedReasonListRelationFilter
    doctor?: XOR<DoctorNullableRelationFilter, DoctorWhereInput> | null
    department?: XOR<DepartmentNullableRelationFilter, DepartmentWhereInput> | null
  }

  export type SurveySectionOrderByWithRelationInput = {
    id?: SortOrder
    sectionType?: SortOrder
    satisfaction?: SortOrder
    feedback?: SortOrderInput | SortOrder
    doctorId?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    surveyDoctorExamination?: SurveyOrderByWithRelationInput
    surveyDoctorUltrasound?: SurveyOrderByWithRelationInput
    surveyCustomerCare?: SurveyOrderByWithRelationInput
    dissatisfied?: DissatisfiedReasonOrderByRelationAggregateInput
    satisfied?: SatisfiedReasonOrderByRelationAggregateInput
    doctor?: DoctorOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
  }

  export type SurveySectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SurveySectionWhereInput | SurveySectionWhereInput[]
    OR?: SurveySectionWhereInput[]
    NOT?: SurveySectionWhereInput | SurveySectionWhereInput[]
    sectionType?: StringFilter<"SurveySection"> | string
    satisfaction?: IntFilter<"SurveySection"> | number
    feedback?: StringNullableFilter<"SurveySection"> | string | null
    doctorId?: StringNullableFilter<"SurveySection"> | string | null
    departmentId?: StringNullableFilter<"SurveySection"> | string | null
    surveyDoctorExamination?: XOR<SurveyNullableRelationFilter, SurveyWhereInput> | null
    surveyDoctorUltrasound?: XOR<SurveyNullableRelationFilter, SurveyWhereInput> | null
    surveyCustomerCare?: XOR<SurveyNullableRelationFilter, SurveyWhereInput> | null
    dissatisfied?: DissatisfiedReasonListRelationFilter
    satisfied?: SatisfiedReasonListRelationFilter
    doctor?: XOR<DoctorNullableRelationFilter, DoctorWhereInput> | null
    department?: XOR<DepartmentNullableRelationFilter, DepartmentWhereInput> | null
  }, "id">

  export type SurveySectionOrderByWithAggregationInput = {
    id?: SortOrder
    sectionType?: SortOrder
    satisfaction?: SortOrder
    feedback?: SortOrderInput | SortOrder
    doctorId?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    _count?: SurveySectionCountOrderByAggregateInput
    _avg?: SurveySectionAvgOrderByAggregateInput
    _max?: SurveySectionMaxOrderByAggregateInput
    _min?: SurveySectionMinOrderByAggregateInput
    _sum?: SurveySectionSumOrderByAggregateInput
  }

  export type SurveySectionScalarWhereWithAggregatesInput = {
    AND?: SurveySectionScalarWhereWithAggregatesInput | SurveySectionScalarWhereWithAggregatesInput[]
    OR?: SurveySectionScalarWhereWithAggregatesInput[]
    NOT?: SurveySectionScalarWhereWithAggregatesInput | SurveySectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SurveySection"> | string
    sectionType?: StringWithAggregatesFilter<"SurveySection"> | string
    satisfaction?: IntWithAggregatesFilter<"SurveySection"> | number
    feedback?: StringNullableWithAggregatesFilter<"SurveySection"> | string | null
    doctorId?: StringNullableWithAggregatesFilter<"SurveySection"> | string | null
    departmentId?: StringNullableWithAggregatesFilter<"SurveySection"> | string | null
  }

  export type DissatisfiedReasonWhereInput = {
    AND?: DissatisfiedReasonWhereInput | DissatisfiedReasonWhereInput[]
    OR?: DissatisfiedReasonWhereInput[]
    NOT?: DissatisfiedReasonWhereInput | DissatisfiedReasonWhereInput[]
    id?: StringFilter<"DissatisfiedReason"> | string
    content?: StringFilter<"DissatisfiedReason"> | string
    surveySectionId?: StringFilter<"DissatisfiedReason"> | string
    surveySection?: XOR<SurveySectionRelationFilter, SurveySectionWhereInput>
  }

  export type DissatisfiedReasonOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    surveySectionId?: SortOrder
    surveySection?: SurveySectionOrderByWithRelationInput
  }

  export type DissatisfiedReasonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DissatisfiedReasonWhereInput | DissatisfiedReasonWhereInput[]
    OR?: DissatisfiedReasonWhereInput[]
    NOT?: DissatisfiedReasonWhereInput | DissatisfiedReasonWhereInput[]
    content?: StringFilter<"DissatisfiedReason"> | string
    surveySectionId?: StringFilter<"DissatisfiedReason"> | string
    surveySection?: XOR<SurveySectionRelationFilter, SurveySectionWhereInput>
  }, "id">

  export type DissatisfiedReasonOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    surveySectionId?: SortOrder
    _count?: DissatisfiedReasonCountOrderByAggregateInput
    _max?: DissatisfiedReasonMaxOrderByAggregateInput
    _min?: DissatisfiedReasonMinOrderByAggregateInput
  }

  export type DissatisfiedReasonScalarWhereWithAggregatesInput = {
    AND?: DissatisfiedReasonScalarWhereWithAggregatesInput | DissatisfiedReasonScalarWhereWithAggregatesInput[]
    OR?: DissatisfiedReasonScalarWhereWithAggregatesInput[]
    NOT?: DissatisfiedReasonScalarWhereWithAggregatesInput | DissatisfiedReasonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DissatisfiedReason"> | string
    content?: StringWithAggregatesFilter<"DissatisfiedReason"> | string
    surveySectionId?: StringWithAggregatesFilter<"DissatisfiedReason"> | string
  }

  export type SatisfiedReasonWhereInput = {
    AND?: SatisfiedReasonWhereInput | SatisfiedReasonWhereInput[]
    OR?: SatisfiedReasonWhereInput[]
    NOT?: SatisfiedReasonWhereInput | SatisfiedReasonWhereInput[]
    id?: StringFilter<"SatisfiedReason"> | string
    content?: StringFilter<"SatisfiedReason"> | string
    surveySectionId?: StringFilter<"SatisfiedReason"> | string
    surveySection?: XOR<SurveySectionRelationFilter, SurveySectionWhereInput>
  }

  export type SatisfiedReasonOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    surveySectionId?: SortOrder
    surveySection?: SurveySectionOrderByWithRelationInput
  }

  export type SatisfiedReasonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SatisfiedReasonWhereInput | SatisfiedReasonWhereInput[]
    OR?: SatisfiedReasonWhereInput[]
    NOT?: SatisfiedReasonWhereInput | SatisfiedReasonWhereInput[]
    content?: StringFilter<"SatisfiedReason"> | string
    surveySectionId?: StringFilter<"SatisfiedReason"> | string
    surveySection?: XOR<SurveySectionRelationFilter, SurveySectionWhereInput>
  }, "id">

  export type SatisfiedReasonOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    surveySectionId?: SortOrder
    _count?: SatisfiedReasonCountOrderByAggregateInput
    _max?: SatisfiedReasonMaxOrderByAggregateInput
    _min?: SatisfiedReasonMinOrderByAggregateInput
  }

  export type SatisfiedReasonScalarWhereWithAggregatesInput = {
    AND?: SatisfiedReasonScalarWhereWithAggregatesInput | SatisfiedReasonScalarWhereWithAggregatesInput[]
    OR?: SatisfiedReasonScalarWhereWithAggregatesInput[]
    NOT?: SatisfiedReasonScalarWhereWithAggregatesInput | SatisfiedReasonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SatisfiedReason"> | string
    content?: StringWithAggregatesFilter<"SatisfiedReason"> | string
    surveySectionId?: StringWithAggregatesFilter<"SatisfiedReason"> | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    code?: StringFilter<"Doctor"> | string
    name?: StringFilter<"Doctor"> | string
    SurveySection?: SurveySectionListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    SurveySection?: SurveySectionOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    SurveySection?: SurveySectionListRelationFilter
  }, "id" | "code">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    code?: StringWithAggregatesFilter<"Doctor"> | string
    name?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    code?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    branchId?: StringNullableFilter<"Department"> | string | null
    SurveySection?: SurveySectionListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    branchId?: SortOrderInput | SortOrder
    SurveySection?: SurveySectionOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code_branchId?: DepartmentCodeBranchIdCompoundUniqueInput
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    code?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    branchId?: StringNullableFilter<"Department"> | string | null
    SurveySection?: SurveySectionListRelationFilter
  }, "id" | "code_branchId">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    branchId?: SortOrderInput | SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    code?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    branchId?: StringNullableWithAggregatesFilter<"Department"> | string | null
  }

  export type SurveyCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    overallSatisfaction?: number | null
    doctorExaminationSection: SurveySectionCreateNestedOneWithoutSurveyDoctorExaminationInput
    doctorUltrasoundSection: SurveySectionCreateNestedOneWithoutSurveyDoctorUltrasoundInput
    customerCareSection: SurveySectionCreateNestedOneWithoutSurveyCustomerCareInput
  }

  export type SurveyUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    overallSatisfaction?: number | null
    doctorExaminationSectionId: string
    doctorUltrasoundSectionId: string
    customerCareSectionId: string
  }

  export type SurveyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overallSatisfaction?: NullableFloatFieldUpdateOperationsInput | number | null
    doctorExaminationSection?: SurveySectionUpdateOneRequiredWithoutSurveyDoctorExaminationNestedInput
    doctorUltrasoundSection?: SurveySectionUpdateOneRequiredWithoutSurveyDoctorUltrasoundNestedInput
    customerCareSection?: SurveySectionUpdateOneRequiredWithoutSurveyCustomerCareNestedInput
  }

  export type SurveyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overallSatisfaction?: NullableFloatFieldUpdateOperationsInput | number | null
    doctorExaminationSectionId?: StringFieldUpdateOperationsInput | string
    doctorUltrasoundSectionId?: StringFieldUpdateOperationsInput | string
    customerCareSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    overallSatisfaction?: number | null
    doctorExaminationSectionId: string
    doctorUltrasoundSectionId: string
    customerCareSectionId: string
  }

  export type SurveyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overallSatisfaction?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SurveyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overallSatisfaction?: NullableFloatFieldUpdateOperationsInput | number | null
    doctorExaminationSectionId?: StringFieldUpdateOperationsInput | string
    doctorUltrasoundSectionId?: StringFieldUpdateOperationsInput | string
    customerCareSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SurveySectionCreateInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    surveyDoctorExamination?: SurveyCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    doctor?: DoctorCreateNestedOneWithoutSurveySectionInput
    department?: DepartmentCreateNestedOneWithoutSurveySectionInput
  }

  export type SurveySectionUncheckedCreateInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    doctorId?: string | null
    departmentId?: string | null
    surveyDoctorExamination?: SurveyUncheckedCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyUncheckedCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyUncheckedCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
  }

  export type SurveySectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    doctor?: DoctorUpdateOneWithoutSurveySectionNestedInput
    department?: DepartmentUpdateOneWithoutSurveySectionNestedInput
  }

  export type SurveySectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUncheckedUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUncheckedUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUncheckedUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
  }

  export type SurveySectionCreateManyInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    doctorId?: string | null
    departmentId?: string | null
  }

  export type SurveySectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurveySectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DissatisfiedReasonCreateInput = {
    id?: string
    content: string
    surveySection: SurveySectionCreateNestedOneWithoutDissatisfiedInput
  }

  export type DissatisfiedReasonUncheckedCreateInput = {
    id?: string
    content: string
    surveySectionId: string
  }

  export type DissatisfiedReasonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    surveySection?: SurveySectionUpdateOneRequiredWithoutDissatisfiedNestedInput
  }

  export type DissatisfiedReasonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    surveySectionId?: StringFieldUpdateOperationsInput | string
  }

  export type DissatisfiedReasonCreateManyInput = {
    id?: string
    content: string
    surveySectionId: string
  }

  export type DissatisfiedReasonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DissatisfiedReasonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    surveySectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfiedReasonCreateInput = {
    id?: string
    content: string
    surveySection: SurveySectionCreateNestedOneWithoutSatisfiedInput
  }

  export type SatisfiedReasonUncheckedCreateInput = {
    id?: string
    content: string
    surveySectionId: string
  }

  export type SatisfiedReasonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    surveySection?: SurveySectionUpdateOneRequiredWithoutSatisfiedNestedInput
  }

  export type SatisfiedReasonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    surveySectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfiedReasonCreateManyInput = {
    id?: string
    content: string
    surveySectionId: string
  }

  export type SatisfiedReasonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfiedReasonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    surveySectionId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateInput = {
    id?: string
    code: string
    name: string
    SurveySection?: SurveySectionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    SurveySection?: SurveySectionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    SurveySection?: SurveySectionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    SurveySection?: SurveySectionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    code: string
    name: string
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentCreateInput = {
    id?: string
    code: string
    name: string
    branchId?: string | null
    SurveySection?: SurveySectionCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    branchId?: string | null
    SurveySection?: SurveySectionUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    SurveySection?: SurveySectionUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    SurveySection?: SurveySectionUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    code: string
    name: string
    branchId?: string | null
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SurveySectionRelationFilter = {
    is?: SurveySectionWhereInput
    isNot?: SurveySectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SurveyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    overallSatisfaction?: SortOrder
    doctorExaminationSectionId?: SortOrder
    doctorUltrasoundSectionId?: SortOrder
    customerCareSectionId?: SortOrder
  }

  export type SurveyAvgOrderByAggregateInput = {
    overallSatisfaction?: SortOrder
  }

  export type SurveyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    overallSatisfaction?: SortOrder
    doctorExaminationSectionId?: SortOrder
    doctorUltrasoundSectionId?: SortOrder
    customerCareSectionId?: SortOrder
  }

  export type SurveyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    overallSatisfaction?: SortOrder
    doctorExaminationSectionId?: SortOrder
    doctorUltrasoundSectionId?: SortOrder
    customerCareSectionId?: SortOrder
  }

  export type SurveySumOrderByAggregateInput = {
    overallSatisfaction?: SortOrder
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

  export type SurveyNullableRelationFilter = {
    is?: SurveyWhereInput | null
    isNot?: SurveyWhereInput | null
  }

  export type DissatisfiedReasonListRelationFilter = {
    every?: DissatisfiedReasonWhereInput
    some?: DissatisfiedReasonWhereInput
    none?: DissatisfiedReasonWhereInput
  }

  export type SatisfiedReasonListRelationFilter = {
    every?: SatisfiedReasonWhereInput
    some?: SatisfiedReasonWhereInput
    none?: SatisfiedReasonWhereInput
  }

  export type DoctorNullableRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type DepartmentNullableRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type DissatisfiedReasonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SatisfiedReasonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurveySectionCountOrderByAggregateInput = {
    id?: SortOrder
    sectionType?: SortOrder
    satisfaction?: SortOrder
    feedback?: SortOrder
    doctorId?: SortOrder
    departmentId?: SortOrder
  }

  export type SurveySectionAvgOrderByAggregateInput = {
    satisfaction?: SortOrder
  }

  export type SurveySectionMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionType?: SortOrder
    satisfaction?: SortOrder
    feedback?: SortOrder
    doctorId?: SortOrder
    departmentId?: SortOrder
  }

  export type SurveySectionMinOrderByAggregateInput = {
    id?: SortOrder
    sectionType?: SortOrder
    satisfaction?: SortOrder
    feedback?: SortOrder
    doctorId?: SortOrder
    departmentId?: SortOrder
  }

  export type SurveySectionSumOrderByAggregateInput = {
    satisfaction?: SortOrder
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

  export type DissatisfiedReasonCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    surveySectionId?: SortOrder
  }

  export type DissatisfiedReasonMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    surveySectionId?: SortOrder
  }

  export type DissatisfiedReasonMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    surveySectionId?: SortOrder
  }

  export type SatisfiedReasonCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    surveySectionId?: SortOrder
  }

  export type SatisfiedReasonMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    surveySectionId?: SortOrder
  }

  export type SatisfiedReasonMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    surveySectionId?: SortOrder
  }

  export type SurveySectionListRelationFilter = {
    every?: SurveySectionWhereInput
    some?: SurveySectionWhereInput
    none?: SurveySectionWhereInput
  }

  export type SurveySectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type DepartmentCodeBranchIdCompoundUniqueInput = {
    code: string
    branchId: string
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    branchId?: SortOrder
  }

  export type SurveySectionCreateNestedOneWithoutSurveyDoctorExaminationInput = {
    create?: XOR<SurveySectionCreateWithoutSurveyDoctorExaminationInput, SurveySectionUncheckedCreateWithoutSurveyDoctorExaminationInput>
    connectOrCreate?: SurveySectionCreateOrConnectWithoutSurveyDoctorExaminationInput
    connect?: SurveySectionWhereUniqueInput
  }

  export type SurveySectionCreateNestedOneWithoutSurveyDoctorUltrasoundInput = {
    create?: XOR<SurveySectionCreateWithoutSurveyDoctorUltrasoundInput, SurveySectionUncheckedCreateWithoutSurveyDoctorUltrasoundInput>
    connectOrCreate?: SurveySectionCreateOrConnectWithoutSurveyDoctorUltrasoundInput
    connect?: SurveySectionWhereUniqueInput
  }

  export type SurveySectionCreateNestedOneWithoutSurveyCustomerCareInput = {
    create?: XOR<SurveySectionCreateWithoutSurveyCustomerCareInput, SurveySectionUncheckedCreateWithoutSurveyCustomerCareInput>
    connectOrCreate?: SurveySectionCreateOrConnectWithoutSurveyCustomerCareInput
    connect?: SurveySectionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SurveySectionUpdateOneRequiredWithoutSurveyDoctorExaminationNestedInput = {
    create?: XOR<SurveySectionCreateWithoutSurveyDoctorExaminationInput, SurveySectionUncheckedCreateWithoutSurveyDoctorExaminationInput>
    connectOrCreate?: SurveySectionCreateOrConnectWithoutSurveyDoctorExaminationInput
    upsert?: SurveySectionUpsertWithoutSurveyDoctorExaminationInput
    connect?: SurveySectionWhereUniqueInput
    update?: XOR<XOR<SurveySectionUpdateToOneWithWhereWithoutSurveyDoctorExaminationInput, SurveySectionUpdateWithoutSurveyDoctorExaminationInput>, SurveySectionUncheckedUpdateWithoutSurveyDoctorExaminationInput>
  }

  export type SurveySectionUpdateOneRequiredWithoutSurveyDoctorUltrasoundNestedInput = {
    create?: XOR<SurveySectionCreateWithoutSurveyDoctorUltrasoundInput, SurveySectionUncheckedCreateWithoutSurveyDoctorUltrasoundInput>
    connectOrCreate?: SurveySectionCreateOrConnectWithoutSurveyDoctorUltrasoundInput
    upsert?: SurveySectionUpsertWithoutSurveyDoctorUltrasoundInput
    connect?: SurveySectionWhereUniqueInput
    update?: XOR<XOR<SurveySectionUpdateToOneWithWhereWithoutSurveyDoctorUltrasoundInput, SurveySectionUpdateWithoutSurveyDoctorUltrasoundInput>, SurveySectionUncheckedUpdateWithoutSurveyDoctorUltrasoundInput>
  }

  export type SurveySectionUpdateOneRequiredWithoutSurveyCustomerCareNestedInput = {
    create?: XOR<SurveySectionCreateWithoutSurveyCustomerCareInput, SurveySectionUncheckedCreateWithoutSurveyCustomerCareInput>
    connectOrCreate?: SurveySectionCreateOrConnectWithoutSurveyCustomerCareInput
    upsert?: SurveySectionUpsertWithoutSurveyCustomerCareInput
    connect?: SurveySectionWhereUniqueInput
    update?: XOR<XOR<SurveySectionUpdateToOneWithWhereWithoutSurveyCustomerCareInput, SurveySectionUpdateWithoutSurveyCustomerCareInput>, SurveySectionUncheckedUpdateWithoutSurveyCustomerCareInput>
  }

  export type SurveyCreateNestedOneWithoutDoctorExaminationSectionInput = {
    create?: XOR<SurveyCreateWithoutDoctorExaminationSectionInput, SurveyUncheckedCreateWithoutDoctorExaminationSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutDoctorExaminationSectionInput
    connect?: SurveyWhereUniqueInput
  }

  export type SurveyCreateNestedOneWithoutDoctorUltrasoundSectionInput = {
    create?: XOR<SurveyCreateWithoutDoctorUltrasoundSectionInput, SurveyUncheckedCreateWithoutDoctorUltrasoundSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutDoctorUltrasoundSectionInput
    connect?: SurveyWhereUniqueInput
  }

  export type SurveyCreateNestedOneWithoutCustomerCareSectionInput = {
    create?: XOR<SurveyCreateWithoutCustomerCareSectionInput, SurveyUncheckedCreateWithoutCustomerCareSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutCustomerCareSectionInput
    connect?: SurveyWhereUniqueInput
  }

  export type DissatisfiedReasonCreateNestedManyWithoutSurveySectionInput = {
    create?: XOR<DissatisfiedReasonCreateWithoutSurveySectionInput, DissatisfiedReasonUncheckedCreateWithoutSurveySectionInput> | DissatisfiedReasonCreateWithoutSurveySectionInput[] | DissatisfiedReasonUncheckedCreateWithoutSurveySectionInput[]
    connectOrCreate?: DissatisfiedReasonCreateOrConnectWithoutSurveySectionInput | DissatisfiedReasonCreateOrConnectWithoutSurveySectionInput[]
    createMany?: DissatisfiedReasonCreateManySurveySectionInputEnvelope
    connect?: DissatisfiedReasonWhereUniqueInput | DissatisfiedReasonWhereUniqueInput[]
  }

  export type SatisfiedReasonCreateNestedManyWithoutSurveySectionInput = {
    create?: XOR<SatisfiedReasonCreateWithoutSurveySectionInput, SatisfiedReasonUncheckedCreateWithoutSurveySectionInput> | SatisfiedReasonCreateWithoutSurveySectionInput[] | SatisfiedReasonUncheckedCreateWithoutSurveySectionInput[]
    connectOrCreate?: SatisfiedReasonCreateOrConnectWithoutSurveySectionInput | SatisfiedReasonCreateOrConnectWithoutSurveySectionInput[]
    createMany?: SatisfiedReasonCreateManySurveySectionInputEnvelope
    connect?: SatisfiedReasonWhereUniqueInput | SatisfiedReasonWhereUniqueInput[]
  }

  export type DoctorCreateNestedOneWithoutSurveySectionInput = {
    create?: XOR<DoctorCreateWithoutSurveySectionInput, DoctorUncheckedCreateWithoutSurveySectionInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutSurveySectionInput
    connect?: DoctorWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutSurveySectionInput = {
    create?: XOR<DepartmentCreateWithoutSurveySectionInput, DepartmentUncheckedCreateWithoutSurveySectionInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSurveySectionInput
    connect?: DepartmentWhereUniqueInput
  }

  export type SurveyUncheckedCreateNestedOneWithoutDoctorExaminationSectionInput = {
    create?: XOR<SurveyCreateWithoutDoctorExaminationSectionInput, SurveyUncheckedCreateWithoutDoctorExaminationSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutDoctorExaminationSectionInput
    connect?: SurveyWhereUniqueInput
  }

  export type SurveyUncheckedCreateNestedOneWithoutDoctorUltrasoundSectionInput = {
    create?: XOR<SurveyCreateWithoutDoctorUltrasoundSectionInput, SurveyUncheckedCreateWithoutDoctorUltrasoundSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutDoctorUltrasoundSectionInput
    connect?: SurveyWhereUniqueInput
  }

  export type SurveyUncheckedCreateNestedOneWithoutCustomerCareSectionInput = {
    create?: XOR<SurveyCreateWithoutCustomerCareSectionInput, SurveyUncheckedCreateWithoutCustomerCareSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutCustomerCareSectionInput
    connect?: SurveyWhereUniqueInput
  }

  export type DissatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput = {
    create?: XOR<DissatisfiedReasonCreateWithoutSurveySectionInput, DissatisfiedReasonUncheckedCreateWithoutSurveySectionInput> | DissatisfiedReasonCreateWithoutSurveySectionInput[] | DissatisfiedReasonUncheckedCreateWithoutSurveySectionInput[]
    connectOrCreate?: DissatisfiedReasonCreateOrConnectWithoutSurveySectionInput | DissatisfiedReasonCreateOrConnectWithoutSurveySectionInput[]
    createMany?: DissatisfiedReasonCreateManySurveySectionInputEnvelope
    connect?: DissatisfiedReasonWhereUniqueInput | DissatisfiedReasonWhereUniqueInput[]
  }

  export type SatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput = {
    create?: XOR<SatisfiedReasonCreateWithoutSurveySectionInput, SatisfiedReasonUncheckedCreateWithoutSurveySectionInput> | SatisfiedReasonCreateWithoutSurveySectionInput[] | SatisfiedReasonUncheckedCreateWithoutSurveySectionInput[]
    connectOrCreate?: SatisfiedReasonCreateOrConnectWithoutSurveySectionInput | SatisfiedReasonCreateOrConnectWithoutSurveySectionInput[]
    createMany?: SatisfiedReasonCreateManySurveySectionInputEnvelope
    connect?: SatisfiedReasonWhereUniqueInput | SatisfiedReasonWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SurveyUpdateOneWithoutDoctorExaminationSectionNestedInput = {
    create?: XOR<SurveyCreateWithoutDoctorExaminationSectionInput, SurveyUncheckedCreateWithoutDoctorExaminationSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutDoctorExaminationSectionInput
    upsert?: SurveyUpsertWithoutDoctorExaminationSectionInput
    disconnect?: SurveyWhereInput | boolean
    delete?: SurveyWhereInput | boolean
    connect?: SurveyWhereUniqueInput
    update?: XOR<XOR<SurveyUpdateToOneWithWhereWithoutDoctorExaminationSectionInput, SurveyUpdateWithoutDoctorExaminationSectionInput>, SurveyUncheckedUpdateWithoutDoctorExaminationSectionInput>
  }

  export type SurveyUpdateOneWithoutDoctorUltrasoundSectionNestedInput = {
    create?: XOR<SurveyCreateWithoutDoctorUltrasoundSectionInput, SurveyUncheckedCreateWithoutDoctorUltrasoundSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutDoctorUltrasoundSectionInput
    upsert?: SurveyUpsertWithoutDoctorUltrasoundSectionInput
    disconnect?: SurveyWhereInput | boolean
    delete?: SurveyWhereInput | boolean
    connect?: SurveyWhereUniqueInput
    update?: XOR<XOR<SurveyUpdateToOneWithWhereWithoutDoctorUltrasoundSectionInput, SurveyUpdateWithoutDoctorUltrasoundSectionInput>, SurveyUncheckedUpdateWithoutDoctorUltrasoundSectionInput>
  }

  export type SurveyUpdateOneWithoutCustomerCareSectionNestedInput = {
    create?: XOR<SurveyCreateWithoutCustomerCareSectionInput, SurveyUncheckedCreateWithoutCustomerCareSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutCustomerCareSectionInput
    upsert?: SurveyUpsertWithoutCustomerCareSectionInput
    disconnect?: SurveyWhereInput | boolean
    delete?: SurveyWhereInput | boolean
    connect?: SurveyWhereUniqueInput
    update?: XOR<XOR<SurveyUpdateToOneWithWhereWithoutCustomerCareSectionInput, SurveyUpdateWithoutCustomerCareSectionInput>, SurveyUncheckedUpdateWithoutCustomerCareSectionInput>
  }

  export type DissatisfiedReasonUpdateManyWithoutSurveySectionNestedInput = {
    create?: XOR<DissatisfiedReasonCreateWithoutSurveySectionInput, DissatisfiedReasonUncheckedCreateWithoutSurveySectionInput> | DissatisfiedReasonCreateWithoutSurveySectionInput[] | DissatisfiedReasonUncheckedCreateWithoutSurveySectionInput[]
    connectOrCreate?: DissatisfiedReasonCreateOrConnectWithoutSurveySectionInput | DissatisfiedReasonCreateOrConnectWithoutSurveySectionInput[]
    upsert?: DissatisfiedReasonUpsertWithWhereUniqueWithoutSurveySectionInput | DissatisfiedReasonUpsertWithWhereUniqueWithoutSurveySectionInput[]
    createMany?: DissatisfiedReasonCreateManySurveySectionInputEnvelope
    set?: DissatisfiedReasonWhereUniqueInput | DissatisfiedReasonWhereUniqueInput[]
    disconnect?: DissatisfiedReasonWhereUniqueInput | DissatisfiedReasonWhereUniqueInput[]
    delete?: DissatisfiedReasonWhereUniqueInput | DissatisfiedReasonWhereUniqueInput[]
    connect?: DissatisfiedReasonWhereUniqueInput | DissatisfiedReasonWhereUniqueInput[]
    update?: DissatisfiedReasonUpdateWithWhereUniqueWithoutSurveySectionInput | DissatisfiedReasonUpdateWithWhereUniqueWithoutSurveySectionInput[]
    updateMany?: DissatisfiedReasonUpdateManyWithWhereWithoutSurveySectionInput | DissatisfiedReasonUpdateManyWithWhereWithoutSurveySectionInput[]
    deleteMany?: DissatisfiedReasonScalarWhereInput | DissatisfiedReasonScalarWhereInput[]
  }

  export type SatisfiedReasonUpdateManyWithoutSurveySectionNestedInput = {
    create?: XOR<SatisfiedReasonCreateWithoutSurveySectionInput, SatisfiedReasonUncheckedCreateWithoutSurveySectionInput> | SatisfiedReasonCreateWithoutSurveySectionInput[] | SatisfiedReasonUncheckedCreateWithoutSurveySectionInput[]
    connectOrCreate?: SatisfiedReasonCreateOrConnectWithoutSurveySectionInput | SatisfiedReasonCreateOrConnectWithoutSurveySectionInput[]
    upsert?: SatisfiedReasonUpsertWithWhereUniqueWithoutSurveySectionInput | SatisfiedReasonUpsertWithWhereUniqueWithoutSurveySectionInput[]
    createMany?: SatisfiedReasonCreateManySurveySectionInputEnvelope
    set?: SatisfiedReasonWhereUniqueInput | SatisfiedReasonWhereUniqueInput[]
    disconnect?: SatisfiedReasonWhereUniqueInput | SatisfiedReasonWhereUniqueInput[]
    delete?: SatisfiedReasonWhereUniqueInput | SatisfiedReasonWhereUniqueInput[]
    connect?: SatisfiedReasonWhereUniqueInput | SatisfiedReasonWhereUniqueInput[]
    update?: SatisfiedReasonUpdateWithWhereUniqueWithoutSurveySectionInput | SatisfiedReasonUpdateWithWhereUniqueWithoutSurveySectionInput[]
    updateMany?: SatisfiedReasonUpdateManyWithWhereWithoutSurveySectionInput | SatisfiedReasonUpdateManyWithWhereWithoutSurveySectionInput[]
    deleteMany?: SatisfiedReasonScalarWhereInput | SatisfiedReasonScalarWhereInput[]
  }

  export type DoctorUpdateOneWithoutSurveySectionNestedInput = {
    create?: XOR<DoctorCreateWithoutSurveySectionInput, DoctorUncheckedCreateWithoutSurveySectionInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutSurveySectionInput
    upsert?: DoctorUpsertWithoutSurveySectionInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutSurveySectionInput, DoctorUpdateWithoutSurveySectionInput>, DoctorUncheckedUpdateWithoutSurveySectionInput>
  }

  export type DepartmentUpdateOneWithoutSurveySectionNestedInput = {
    create?: XOR<DepartmentCreateWithoutSurveySectionInput, DepartmentUncheckedCreateWithoutSurveySectionInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSurveySectionInput
    upsert?: DepartmentUpsertWithoutSurveySectionInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutSurveySectionInput, DepartmentUpdateWithoutSurveySectionInput>, DepartmentUncheckedUpdateWithoutSurveySectionInput>
  }

  export type SurveyUncheckedUpdateOneWithoutDoctorExaminationSectionNestedInput = {
    create?: XOR<SurveyCreateWithoutDoctorExaminationSectionInput, SurveyUncheckedCreateWithoutDoctorExaminationSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutDoctorExaminationSectionInput
    upsert?: SurveyUpsertWithoutDoctorExaminationSectionInput
    disconnect?: SurveyWhereInput | boolean
    delete?: SurveyWhereInput | boolean
    connect?: SurveyWhereUniqueInput
    update?: XOR<XOR<SurveyUpdateToOneWithWhereWithoutDoctorExaminationSectionInput, SurveyUpdateWithoutDoctorExaminationSectionInput>, SurveyUncheckedUpdateWithoutDoctorExaminationSectionInput>
  }

  export type SurveyUncheckedUpdateOneWithoutDoctorUltrasoundSectionNestedInput = {
    create?: XOR<SurveyCreateWithoutDoctorUltrasoundSectionInput, SurveyUncheckedCreateWithoutDoctorUltrasoundSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutDoctorUltrasoundSectionInput
    upsert?: SurveyUpsertWithoutDoctorUltrasoundSectionInput
    disconnect?: SurveyWhereInput | boolean
    delete?: SurveyWhereInput | boolean
    connect?: SurveyWhereUniqueInput
    update?: XOR<XOR<SurveyUpdateToOneWithWhereWithoutDoctorUltrasoundSectionInput, SurveyUpdateWithoutDoctorUltrasoundSectionInput>, SurveyUncheckedUpdateWithoutDoctorUltrasoundSectionInput>
  }

  export type SurveyUncheckedUpdateOneWithoutCustomerCareSectionNestedInput = {
    create?: XOR<SurveyCreateWithoutCustomerCareSectionInput, SurveyUncheckedCreateWithoutCustomerCareSectionInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutCustomerCareSectionInput
    upsert?: SurveyUpsertWithoutCustomerCareSectionInput
    disconnect?: SurveyWhereInput | boolean
    delete?: SurveyWhereInput | boolean
    connect?: SurveyWhereUniqueInput
    update?: XOR<XOR<SurveyUpdateToOneWithWhereWithoutCustomerCareSectionInput, SurveyUpdateWithoutCustomerCareSectionInput>, SurveyUncheckedUpdateWithoutCustomerCareSectionInput>
  }

  export type DissatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput = {
    create?: XOR<DissatisfiedReasonCreateWithoutSurveySectionInput, DissatisfiedReasonUncheckedCreateWithoutSurveySectionInput> | DissatisfiedReasonCreateWithoutSurveySectionInput[] | DissatisfiedReasonUncheckedCreateWithoutSurveySectionInput[]
    connectOrCreate?: DissatisfiedReasonCreateOrConnectWithoutSurveySectionInput | DissatisfiedReasonCreateOrConnectWithoutSurveySectionInput[]
    upsert?: DissatisfiedReasonUpsertWithWhereUniqueWithoutSurveySectionInput | DissatisfiedReasonUpsertWithWhereUniqueWithoutSurveySectionInput[]
    createMany?: DissatisfiedReasonCreateManySurveySectionInputEnvelope
    set?: DissatisfiedReasonWhereUniqueInput | DissatisfiedReasonWhereUniqueInput[]
    disconnect?: DissatisfiedReasonWhereUniqueInput | DissatisfiedReasonWhereUniqueInput[]
    delete?: DissatisfiedReasonWhereUniqueInput | DissatisfiedReasonWhereUniqueInput[]
    connect?: DissatisfiedReasonWhereUniqueInput | DissatisfiedReasonWhereUniqueInput[]
    update?: DissatisfiedReasonUpdateWithWhereUniqueWithoutSurveySectionInput | DissatisfiedReasonUpdateWithWhereUniqueWithoutSurveySectionInput[]
    updateMany?: DissatisfiedReasonUpdateManyWithWhereWithoutSurveySectionInput | DissatisfiedReasonUpdateManyWithWhereWithoutSurveySectionInput[]
    deleteMany?: DissatisfiedReasonScalarWhereInput | DissatisfiedReasonScalarWhereInput[]
  }

  export type SatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput = {
    create?: XOR<SatisfiedReasonCreateWithoutSurveySectionInput, SatisfiedReasonUncheckedCreateWithoutSurveySectionInput> | SatisfiedReasonCreateWithoutSurveySectionInput[] | SatisfiedReasonUncheckedCreateWithoutSurveySectionInput[]
    connectOrCreate?: SatisfiedReasonCreateOrConnectWithoutSurveySectionInput | SatisfiedReasonCreateOrConnectWithoutSurveySectionInput[]
    upsert?: SatisfiedReasonUpsertWithWhereUniqueWithoutSurveySectionInput | SatisfiedReasonUpsertWithWhereUniqueWithoutSurveySectionInput[]
    createMany?: SatisfiedReasonCreateManySurveySectionInputEnvelope
    set?: SatisfiedReasonWhereUniqueInput | SatisfiedReasonWhereUniqueInput[]
    disconnect?: SatisfiedReasonWhereUniqueInput | SatisfiedReasonWhereUniqueInput[]
    delete?: SatisfiedReasonWhereUniqueInput | SatisfiedReasonWhereUniqueInput[]
    connect?: SatisfiedReasonWhereUniqueInput | SatisfiedReasonWhereUniqueInput[]
    update?: SatisfiedReasonUpdateWithWhereUniqueWithoutSurveySectionInput | SatisfiedReasonUpdateWithWhereUniqueWithoutSurveySectionInput[]
    updateMany?: SatisfiedReasonUpdateManyWithWhereWithoutSurveySectionInput | SatisfiedReasonUpdateManyWithWhereWithoutSurveySectionInput[]
    deleteMany?: SatisfiedReasonScalarWhereInput | SatisfiedReasonScalarWhereInput[]
  }

  export type SurveySectionCreateNestedOneWithoutDissatisfiedInput = {
    create?: XOR<SurveySectionCreateWithoutDissatisfiedInput, SurveySectionUncheckedCreateWithoutDissatisfiedInput>
    connectOrCreate?: SurveySectionCreateOrConnectWithoutDissatisfiedInput
    connect?: SurveySectionWhereUniqueInput
  }

  export type SurveySectionUpdateOneRequiredWithoutDissatisfiedNestedInput = {
    create?: XOR<SurveySectionCreateWithoutDissatisfiedInput, SurveySectionUncheckedCreateWithoutDissatisfiedInput>
    connectOrCreate?: SurveySectionCreateOrConnectWithoutDissatisfiedInput
    upsert?: SurveySectionUpsertWithoutDissatisfiedInput
    connect?: SurveySectionWhereUniqueInput
    update?: XOR<XOR<SurveySectionUpdateToOneWithWhereWithoutDissatisfiedInput, SurveySectionUpdateWithoutDissatisfiedInput>, SurveySectionUncheckedUpdateWithoutDissatisfiedInput>
  }

  export type SurveySectionCreateNestedOneWithoutSatisfiedInput = {
    create?: XOR<SurveySectionCreateWithoutSatisfiedInput, SurveySectionUncheckedCreateWithoutSatisfiedInput>
    connectOrCreate?: SurveySectionCreateOrConnectWithoutSatisfiedInput
    connect?: SurveySectionWhereUniqueInput
  }

  export type SurveySectionUpdateOneRequiredWithoutSatisfiedNestedInput = {
    create?: XOR<SurveySectionCreateWithoutSatisfiedInput, SurveySectionUncheckedCreateWithoutSatisfiedInput>
    connectOrCreate?: SurveySectionCreateOrConnectWithoutSatisfiedInput
    upsert?: SurveySectionUpsertWithoutSatisfiedInput
    connect?: SurveySectionWhereUniqueInput
    update?: XOR<XOR<SurveySectionUpdateToOneWithWhereWithoutSatisfiedInput, SurveySectionUpdateWithoutSatisfiedInput>, SurveySectionUncheckedUpdateWithoutSatisfiedInput>
  }

  export type SurveySectionCreateNestedManyWithoutDoctorInput = {
    create?: XOR<SurveySectionCreateWithoutDoctorInput, SurveySectionUncheckedCreateWithoutDoctorInput> | SurveySectionCreateWithoutDoctorInput[] | SurveySectionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: SurveySectionCreateOrConnectWithoutDoctorInput | SurveySectionCreateOrConnectWithoutDoctorInput[]
    createMany?: SurveySectionCreateManyDoctorInputEnvelope
    connect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
  }

  export type SurveySectionUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<SurveySectionCreateWithoutDoctorInput, SurveySectionUncheckedCreateWithoutDoctorInput> | SurveySectionCreateWithoutDoctorInput[] | SurveySectionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: SurveySectionCreateOrConnectWithoutDoctorInput | SurveySectionCreateOrConnectWithoutDoctorInput[]
    createMany?: SurveySectionCreateManyDoctorInputEnvelope
    connect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
  }

  export type SurveySectionUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<SurveySectionCreateWithoutDoctorInput, SurveySectionUncheckedCreateWithoutDoctorInput> | SurveySectionCreateWithoutDoctorInput[] | SurveySectionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: SurveySectionCreateOrConnectWithoutDoctorInput | SurveySectionCreateOrConnectWithoutDoctorInput[]
    upsert?: SurveySectionUpsertWithWhereUniqueWithoutDoctorInput | SurveySectionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: SurveySectionCreateManyDoctorInputEnvelope
    set?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    disconnect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    delete?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    connect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    update?: SurveySectionUpdateWithWhereUniqueWithoutDoctorInput | SurveySectionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: SurveySectionUpdateManyWithWhereWithoutDoctorInput | SurveySectionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: SurveySectionScalarWhereInput | SurveySectionScalarWhereInput[]
  }

  export type SurveySectionUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<SurveySectionCreateWithoutDoctorInput, SurveySectionUncheckedCreateWithoutDoctorInput> | SurveySectionCreateWithoutDoctorInput[] | SurveySectionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: SurveySectionCreateOrConnectWithoutDoctorInput | SurveySectionCreateOrConnectWithoutDoctorInput[]
    upsert?: SurveySectionUpsertWithWhereUniqueWithoutDoctorInput | SurveySectionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: SurveySectionCreateManyDoctorInputEnvelope
    set?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    disconnect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    delete?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    connect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    update?: SurveySectionUpdateWithWhereUniqueWithoutDoctorInput | SurveySectionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: SurveySectionUpdateManyWithWhereWithoutDoctorInput | SurveySectionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: SurveySectionScalarWhereInput | SurveySectionScalarWhereInput[]
  }

  export type SurveySectionCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SurveySectionCreateWithoutDepartmentInput, SurveySectionUncheckedCreateWithoutDepartmentInput> | SurveySectionCreateWithoutDepartmentInput[] | SurveySectionUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SurveySectionCreateOrConnectWithoutDepartmentInput | SurveySectionCreateOrConnectWithoutDepartmentInput[]
    createMany?: SurveySectionCreateManyDepartmentInputEnvelope
    connect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
  }

  export type SurveySectionUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SurveySectionCreateWithoutDepartmentInput, SurveySectionUncheckedCreateWithoutDepartmentInput> | SurveySectionCreateWithoutDepartmentInput[] | SurveySectionUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SurveySectionCreateOrConnectWithoutDepartmentInput | SurveySectionCreateOrConnectWithoutDepartmentInput[]
    createMany?: SurveySectionCreateManyDepartmentInputEnvelope
    connect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
  }

  export type SurveySectionUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SurveySectionCreateWithoutDepartmentInput, SurveySectionUncheckedCreateWithoutDepartmentInput> | SurveySectionCreateWithoutDepartmentInput[] | SurveySectionUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SurveySectionCreateOrConnectWithoutDepartmentInput | SurveySectionCreateOrConnectWithoutDepartmentInput[]
    upsert?: SurveySectionUpsertWithWhereUniqueWithoutDepartmentInput | SurveySectionUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SurveySectionCreateManyDepartmentInputEnvelope
    set?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    disconnect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    delete?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    connect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    update?: SurveySectionUpdateWithWhereUniqueWithoutDepartmentInput | SurveySectionUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SurveySectionUpdateManyWithWhereWithoutDepartmentInput | SurveySectionUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SurveySectionScalarWhereInput | SurveySectionScalarWhereInput[]
  }

  export type SurveySectionUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SurveySectionCreateWithoutDepartmentInput, SurveySectionUncheckedCreateWithoutDepartmentInput> | SurveySectionCreateWithoutDepartmentInput[] | SurveySectionUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SurveySectionCreateOrConnectWithoutDepartmentInput | SurveySectionCreateOrConnectWithoutDepartmentInput[]
    upsert?: SurveySectionUpsertWithWhereUniqueWithoutDepartmentInput | SurveySectionUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SurveySectionCreateManyDepartmentInputEnvelope
    set?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    disconnect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    delete?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    connect?: SurveySectionWhereUniqueInput | SurveySectionWhereUniqueInput[]
    update?: SurveySectionUpdateWithWhereUniqueWithoutDepartmentInput | SurveySectionUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SurveySectionUpdateManyWithWhereWithoutDepartmentInput | SurveySectionUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SurveySectionScalarWhereInput | SurveySectionScalarWhereInput[]
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

  export type SurveySectionCreateWithoutSurveyDoctorExaminationInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    surveyDoctorUltrasound?: SurveyCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    doctor?: DoctorCreateNestedOneWithoutSurveySectionInput
    department?: DepartmentCreateNestedOneWithoutSurveySectionInput
  }

  export type SurveySectionUncheckedCreateWithoutSurveyDoctorExaminationInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    doctorId?: string | null
    departmentId?: string | null
    surveyDoctorUltrasound?: SurveyUncheckedCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyUncheckedCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
  }

  export type SurveySectionCreateOrConnectWithoutSurveyDoctorExaminationInput = {
    where: SurveySectionWhereUniqueInput
    create: XOR<SurveySectionCreateWithoutSurveyDoctorExaminationInput, SurveySectionUncheckedCreateWithoutSurveyDoctorExaminationInput>
  }

  export type SurveySectionCreateWithoutSurveyDoctorUltrasoundInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    surveyDoctorExamination?: SurveyCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyCustomerCare?: SurveyCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    doctor?: DoctorCreateNestedOneWithoutSurveySectionInput
    department?: DepartmentCreateNestedOneWithoutSurveySectionInput
  }

  export type SurveySectionUncheckedCreateWithoutSurveyDoctorUltrasoundInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    doctorId?: string | null
    departmentId?: string | null
    surveyDoctorExamination?: SurveyUncheckedCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyCustomerCare?: SurveyUncheckedCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
  }

  export type SurveySectionCreateOrConnectWithoutSurveyDoctorUltrasoundInput = {
    where: SurveySectionWhereUniqueInput
    create: XOR<SurveySectionCreateWithoutSurveyDoctorUltrasoundInput, SurveySectionUncheckedCreateWithoutSurveyDoctorUltrasoundInput>
  }

  export type SurveySectionCreateWithoutSurveyCustomerCareInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    surveyDoctorExamination?: SurveyCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyCreateNestedOneWithoutDoctorUltrasoundSectionInput
    dissatisfied?: DissatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    doctor?: DoctorCreateNestedOneWithoutSurveySectionInput
    department?: DepartmentCreateNestedOneWithoutSurveySectionInput
  }

  export type SurveySectionUncheckedCreateWithoutSurveyCustomerCareInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    doctorId?: string | null
    departmentId?: string | null
    surveyDoctorExamination?: SurveyUncheckedCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyUncheckedCreateNestedOneWithoutDoctorUltrasoundSectionInput
    dissatisfied?: DissatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
  }

  export type SurveySectionCreateOrConnectWithoutSurveyCustomerCareInput = {
    where: SurveySectionWhereUniqueInput
    create: XOR<SurveySectionCreateWithoutSurveyCustomerCareInput, SurveySectionUncheckedCreateWithoutSurveyCustomerCareInput>
  }

  export type SurveySectionUpsertWithoutSurveyDoctorExaminationInput = {
    update: XOR<SurveySectionUpdateWithoutSurveyDoctorExaminationInput, SurveySectionUncheckedUpdateWithoutSurveyDoctorExaminationInput>
    create: XOR<SurveySectionCreateWithoutSurveyDoctorExaminationInput, SurveySectionUncheckedCreateWithoutSurveyDoctorExaminationInput>
    where?: SurveySectionWhereInput
  }

  export type SurveySectionUpdateToOneWithWhereWithoutSurveyDoctorExaminationInput = {
    where?: SurveySectionWhereInput
    data: XOR<SurveySectionUpdateWithoutSurveyDoctorExaminationInput, SurveySectionUncheckedUpdateWithoutSurveyDoctorExaminationInput>
  }

  export type SurveySectionUpdateWithoutSurveyDoctorExaminationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorUltrasound?: SurveyUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    doctor?: DoctorUpdateOneWithoutSurveySectionNestedInput
    department?: DepartmentUpdateOneWithoutSurveySectionNestedInput
  }

  export type SurveySectionUncheckedUpdateWithoutSurveyDoctorExaminationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorUltrasound?: SurveyUncheckedUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUncheckedUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
  }

  export type SurveySectionUpsertWithoutSurveyDoctorUltrasoundInput = {
    update: XOR<SurveySectionUpdateWithoutSurveyDoctorUltrasoundInput, SurveySectionUncheckedUpdateWithoutSurveyDoctorUltrasoundInput>
    create: XOR<SurveySectionCreateWithoutSurveyDoctorUltrasoundInput, SurveySectionUncheckedCreateWithoutSurveyDoctorUltrasoundInput>
    where?: SurveySectionWhereInput
  }

  export type SurveySectionUpdateToOneWithWhereWithoutSurveyDoctorUltrasoundInput = {
    where?: SurveySectionWhereInput
    data: XOR<SurveySectionUpdateWithoutSurveyDoctorUltrasoundInput, SurveySectionUncheckedUpdateWithoutSurveyDoctorUltrasoundInput>
  }

  export type SurveySectionUpdateWithoutSurveyDoctorUltrasoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyCustomerCare?: SurveyUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    doctor?: DoctorUpdateOneWithoutSurveySectionNestedInput
    department?: DepartmentUpdateOneWithoutSurveySectionNestedInput
  }

  export type SurveySectionUncheckedUpdateWithoutSurveyDoctorUltrasoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUncheckedUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyCustomerCare?: SurveyUncheckedUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
  }

  export type SurveySectionUpsertWithoutSurveyCustomerCareInput = {
    update: XOR<SurveySectionUpdateWithoutSurveyCustomerCareInput, SurveySectionUncheckedUpdateWithoutSurveyCustomerCareInput>
    create: XOR<SurveySectionCreateWithoutSurveyCustomerCareInput, SurveySectionUncheckedCreateWithoutSurveyCustomerCareInput>
    where?: SurveySectionWhereInput
  }

  export type SurveySectionUpdateToOneWithWhereWithoutSurveyCustomerCareInput = {
    where?: SurveySectionWhereInput
    data: XOR<SurveySectionUpdateWithoutSurveyCustomerCareInput, SurveySectionUncheckedUpdateWithoutSurveyCustomerCareInput>
  }

  export type SurveySectionUpdateWithoutSurveyCustomerCareInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    dissatisfied?: DissatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    doctor?: DoctorUpdateOneWithoutSurveySectionNestedInput
    department?: DepartmentUpdateOneWithoutSurveySectionNestedInput
  }

  export type SurveySectionUncheckedUpdateWithoutSurveyCustomerCareInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUncheckedUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUncheckedUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    dissatisfied?: DissatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
  }

  export type SurveyCreateWithoutDoctorExaminationSectionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    overallSatisfaction?: number | null
    doctorUltrasoundSection: SurveySectionCreateNestedOneWithoutSurveyDoctorUltrasoundInput
    customerCareSection: SurveySectionCreateNestedOneWithoutSurveyCustomerCareInput
  }

  export type SurveyUncheckedCreateWithoutDoctorExaminationSectionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    overallSatisfaction?: number | null
    doctorUltrasoundSectionId: string
    customerCareSectionId: string
  }

  export type SurveyCreateOrConnectWithoutDoctorExaminationSectionInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutDoctorExaminationSectionInput, SurveyUncheckedCreateWithoutDoctorExaminationSectionInput>
  }

  export type SurveyCreateWithoutDoctorUltrasoundSectionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    overallSatisfaction?: number | null
    doctorExaminationSection: SurveySectionCreateNestedOneWithoutSurveyDoctorExaminationInput
    customerCareSection: SurveySectionCreateNestedOneWithoutSurveyCustomerCareInput
  }

  export type SurveyUncheckedCreateWithoutDoctorUltrasoundSectionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    overallSatisfaction?: number | null
    doctorExaminationSectionId: string
    customerCareSectionId: string
  }

  export type SurveyCreateOrConnectWithoutDoctorUltrasoundSectionInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutDoctorUltrasoundSectionInput, SurveyUncheckedCreateWithoutDoctorUltrasoundSectionInput>
  }

  export type SurveyCreateWithoutCustomerCareSectionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    overallSatisfaction?: number | null
    doctorExaminationSection: SurveySectionCreateNestedOneWithoutSurveyDoctorExaminationInput
    doctorUltrasoundSection: SurveySectionCreateNestedOneWithoutSurveyDoctorUltrasoundInput
  }

  export type SurveyUncheckedCreateWithoutCustomerCareSectionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    overallSatisfaction?: number | null
    doctorExaminationSectionId: string
    doctorUltrasoundSectionId: string
  }

  export type SurveyCreateOrConnectWithoutCustomerCareSectionInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutCustomerCareSectionInput, SurveyUncheckedCreateWithoutCustomerCareSectionInput>
  }

  export type DissatisfiedReasonCreateWithoutSurveySectionInput = {
    id?: string
    content: string
  }

  export type DissatisfiedReasonUncheckedCreateWithoutSurveySectionInput = {
    id?: string
    content: string
  }

  export type DissatisfiedReasonCreateOrConnectWithoutSurveySectionInput = {
    where: DissatisfiedReasonWhereUniqueInput
    create: XOR<DissatisfiedReasonCreateWithoutSurveySectionInput, DissatisfiedReasonUncheckedCreateWithoutSurveySectionInput>
  }

  export type DissatisfiedReasonCreateManySurveySectionInputEnvelope = {
    data: DissatisfiedReasonCreateManySurveySectionInput | DissatisfiedReasonCreateManySurveySectionInput[]
    skipDuplicates?: boolean
  }

  export type SatisfiedReasonCreateWithoutSurveySectionInput = {
    id?: string
    content: string
  }

  export type SatisfiedReasonUncheckedCreateWithoutSurveySectionInput = {
    id?: string
    content: string
  }

  export type SatisfiedReasonCreateOrConnectWithoutSurveySectionInput = {
    where: SatisfiedReasonWhereUniqueInput
    create: XOR<SatisfiedReasonCreateWithoutSurveySectionInput, SatisfiedReasonUncheckedCreateWithoutSurveySectionInput>
  }

  export type SatisfiedReasonCreateManySurveySectionInputEnvelope = {
    data: SatisfiedReasonCreateManySurveySectionInput | SatisfiedReasonCreateManySurveySectionInput[]
    skipDuplicates?: boolean
  }

  export type DoctorCreateWithoutSurveySectionInput = {
    id?: string
    code: string
    name: string
  }

  export type DoctorUncheckedCreateWithoutSurveySectionInput = {
    id?: string
    code: string
    name: string
  }

  export type DoctorCreateOrConnectWithoutSurveySectionInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutSurveySectionInput, DoctorUncheckedCreateWithoutSurveySectionInput>
  }

  export type DepartmentCreateWithoutSurveySectionInput = {
    id?: string
    code: string
    name: string
    branchId?: string | null
  }

  export type DepartmentUncheckedCreateWithoutSurveySectionInput = {
    id?: string
    code: string
    name: string
    branchId?: string | null
  }

  export type DepartmentCreateOrConnectWithoutSurveySectionInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutSurveySectionInput, DepartmentUncheckedCreateWithoutSurveySectionInput>
  }

  export type SurveyUpsertWithoutDoctorExaminationSectionInput = {
    update: XOR<SurveyUpdateWithoutDoctorExaminationSectionInput, SurveyUncheckedUpdateWithoutDoctorExaminationSectionInput>
    create: XOR<SurveyCreateWithoutDoctorExaminationSectionInput, SurveyUncheckedCreateWithoutDoctorExaminationSectionInput>
    where?: SurveyWhereInput
  }

  export type SurveyUpdateToOneWithWhereWithoutDoctorExaminationSectionInput = {
    where?: SurveyWhereInput
    data: XOR<SurveyUpdateWithoutDoctorExaminationSectionInput, SurveyUncheckedUpdateWithoutDoctorExaminationSectionInput>
  }

  export type SurveyUpdateWithoutDoctorExaminationSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overallSatisfaction?: NullableFloatFieldUpdateOperationsInput | number | null
    doctorUltrasoundSection?: SurveySectionUpdateOneRequiredWithoutSurveyDoctorUltrasoundNestedInput
    customerCareSection?: SurveySectionUpdateOneRequiredWithoutSurveyCustomerCareNestedInput
  }

  export type SurveyUncheckedUpdateWithoutDoctorExaminationSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overallSatisfaction?: NullableFloatFieldUpdateOperationsInput | number | null
    doctorUltrasoundSectionId?: StringFieldUpdateOperationsInput | string
    customerCareSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyUpsertWithoutDoctorUltrasoundSectionInput = {
    update: XOR<SurveyUpdateWithoutDoctorUltrasoundSectionInput, SurveyUncheckedUpdateWithoutDoctorUltrasoundSectionInput>
    create: XOR<SurveyCreateWithoutDoctorUltrasoundSectionInput, SurveyUncheckedCreateWithoutDoctorUltrasoundSectionInput>
    where?: SurveyWhereInput
  }

  export type SurveyUpdateToOneWithWhereWithoutDoctorUltrasoundSectionInput = {
    where?: SurveyWhereInput
    data: XOR<SurveyUpdateWithoutDoctorUltrasoundSectionInput, SurveyUncheckedUpdateWithoutDoctorUltrasoundSectionInput>
  }

  export type SurveyUpdateWithoutDoctorUltrasoundSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overallSatisfaction?: NullableFloatFieldUpdateOperationsInput | number | null
    doctorExaminationSection?: SurveySectionUpdateOneRequiredWithoutSurveyDoctorExaminationNestedInput
    customerCareSection?: SurveySectionUpdateOneRequiredWithoutSurveyCustomerCareNestedInput
  }

  export type SurveyUncheckedUpdateWithoutDoctorUltrasoundSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overallSatisfaction?: NullableFloatFieldUpdateOperationsInput | number | null
    doctorExaminationSectionId?: StringFieldUpdateOperationsInput | string
    customerCareSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyUpsertWithoutCustomerCareSectionInput = {
    update: XOR<SurveyUpdateWithoutCustomerCareSectionInput, SurveyUncheckedUpdateWithoutCustomerCareSectionInput>
    create: XOR<SurveyCreateWithoutCustomerCareSectionInput, SurveyUncheckedCreateWithoutCustomerCareSectionInput>
    where?: SurveyWhereInput
  }

  export type SurveyUpdateToOneWithWhereWithoutCustomerCareSectionInput = {
    where?: SurveyWhereInput
    data: XOR<SurveyUpdateWithoutCustomerCareSectionInput, SurveyUncheckedUpdateWithoutCustomerCareSectionInput>
  }

  export type SurveyUpdateWithoutCustomerCareSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overallSatisfaction?: NullableFloatFieldUpdateOperationsInput | number | null
    doctorExaminationSection?: SurveySectionUpdateOneRequiredWithoutSurveyDoctorExaminationNestedInput
    doctorUltrasoundSection?: SurveySectionUpdateOneRequiredWithoutSurveyDoctorUltrasoundNestedInput
  }

  export type SurveyUncheckedUpdateWithoutCustomerCareSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overallSatisfaction?: NullableFloatFieldUpdateOperationsInput | number | null
    doctorExaminationSectionId?: StringFieldUpdateOperationsInput | string
    doctorUltrasoundSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type DissatisfiedReasonUpsertWithWhereUniqueWithoutSurveySectionInput = {
    where: DissatisfiedReasonWhereUniqueInput
    update: XOR<DissatisfiedReasonUpdateWithoutSurveySectionInput, DissatisfiedReasonUncheckedUpdateWithoutSurveySectionInput>
    create: XOR<DissatisfiedReasonCreateWithoutSurveySectionInput, DissatisfiedReasonUncheckedCreateWithoutSurveySectionInput>
  }

  export type DissatisfiedReasonUpdateWithWhereUniqueWithoutSurveySectionInput = {
    where: DissatisfiedReasonWhereUniqueInput
    data: XOR<DissatisfiedReasonUpdateWithoutSurveySectionInput, DissatisfiedReasonUncheckedUpdateWithoutSurveySectionInput>
  }

  export type DissatisfiedReasonUpdateManyWithWhereWithoutSurveySectionInput = {
    where: DissatisfiedReasonScalarWhereInput
    data: XOR<DissatisfiedReasonUpdateManyMutationInput, DissatisfiedReasonUncheckedUpdateManyWithoutSurveySectionInput>
  }

  export type DissatisfiedReasonScalarWhereInput = {
    AND?: DissatisfiedReasonScalarWhereInput | DissatisfiedReasonScalarWhereInput[]
    OR?: DissatisfiedReasonScalarWhereInput[]
    NOT?: DissatisfiedReasonScalarWhereInput | DissatisfiedReasonScalarWhereInput[]
    id?: StringFilter<"DissatisfiedReason"> | string
    content?: StringFilter<"DissatisfiedReason"> | string
    surveySectionId?: StringFilter<"DissatisfiedReason"> | string
  }

  export type SatisfiedReasonUpsertWithWhereUniqueWithoutSurveySectionInput = {
    where: SatisfiedReasonWhereUniqueInput
    update: XOR<SatisfiedReasonUpdateWithoutSurveySectionInput, SatisfiedReasonUncheckedUpdateWithoutSurveySectionInput>
    create: XOR<SatisfiedReasonCreateWithoutSurveySectionInput, SatisfiedReasonUncheckedCreateWithoutSurveySectionInput>
  }

  export type SatisfiedReasonUpdateWithWhereUniqueWithoutSurveySectionInput = {
    where: SatisfiedReasonWhereUniqueInput
    data: XOR<SatisfiedReasonUpdateWithoutSurveySectionInput, SatisfiedReasonUncheckedUpdateWithoutSurveySectionInput>
  }

  export type SatisfiedReasonUpdateManyWithWhereWithoutSurveySectionInput = {
    where: SatisfiedReasonScalarWhereInput
    data: XOR<SatisfiedReasonUpdateManyMutationInput, SatisfiedReasonUncheckedUpdateManyWithoutSurveySectionInput>
  }

  export type SatisfiedReasonScalarWhereInput = {
    AND?: SatisfiedReasonScalarWhereInput | SatisfiedReasonScalarWhereInput[]
    OR?: SatisfiedReasonScalarWhereInput[]
    NOT?: SatisfiedReasonScalarWhereInput | SatisfiedReasonScalarWhereInput[]
    id?: StringFilter<"SatisfiedReason"> | string
    content?: StringFilter<"SatisfiedReason"> | string
    surveySectionId?: StringFilter<"SatisfiedReason"> | string
  }

  export type DoctorUpsertWithoutSurveySectionInput = {
    update: XOR<DoctorUpdateWithoutSurveySectionInput, DoctorUncheckedUpdateWithoutSurveySectionInput>
    create: XOR<DoctorCreateWithoutSurveySectionInput, DoctorUncheckedCreateWithoutSurveySectionInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutSurveySectionInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutSurveySectionInput, DoctorUncheckedUpdateWithoutSurveySectionInput>
  }

  export type DoctorUpdateWithoutSurveySectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateWithoutSurveySectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUpsertWithoutSurveySectionInput = {
    update: XOR<DepartmentUpdateWithoutSurveySectionInput, DepartmentUncheckedUpdateWithoutSurveySectionInput>
    create: XOR<DepartmentCreateWithoutSurveySectionInput, DepartmentUncheckedCreateWithoutSurveySectionInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutSurveySectionInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutSurveySectionInput, DepartmentUncheckedUpdateWithoutSurveySectionInput>
  }

  export type DepartmentUpdateWithoutSurveySectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartmentUncheckedUpdateWithoutSurveySectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurveySectionCreateWithoutDissatisfiedInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    surveyDoctorExamination?: SurveyCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyCreateNestedOneWithoutCustomerCareSectionInput
    satisfied?: SatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    doctor?: DoctorCreateNestedOneWithoutSurveySectionInput
    department?: DepartmentCreateNestedOneWithoutSurveySectionInput
  }

  export type SurveySectionUncheckedCreateWithoutDissatisfiedInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    doctorId?: string | null
    departmentId?: string | null
    surveyDoctorExamination?: SurveyUncheckedCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyUncheckedCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyUncheckedCreateNestedOneWithoutCustomerCareSectionInput
    satisfied?: SatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
  }

  export type SurveySectionCreateOrConnectWithoutDissatisfiedInput = {
    where: SurveySectionWhereUniqueInput
    create: XOR<SurveySectionCreateWithoutDissatisfiedInput, SurveySectionUncheckedCreateWithoutDissatisfiedInput>
  }

  export type SurveySectionUpsertWithoutDissatisfiedInput = {
    update: XOR<SurveySectionUpdateWithoutDissatisfiedInput, SurveySectionUncheckedUpdateWithoutDissatisfiedInput>
    create: XOR<SurveySectionCreateWithoutDissatisfiedInput, SurveySectionUncheckedCreateWithoutDissatisfiedInput>
    where?: SurveySectionWhereInput
  }

  export type SurveySectionUpdateToOneWithWhereWithoutDissatisfiedInput = {
    where?: SurveySectionWhereInput
    data: XOR<SurveySectionUpdateWithoutDissatisfiedInput, SurveySectionUncheckedUpdateWithoutDissatisfiedInput>
  }

  export type SurveySectionUpdateWithoutDissatisfiedInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUpdateOneWithoutCustomerCareSectionNestedInput
    satisfied?: SatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    doctor?: DoctorUpdateOneWithoutSurveySectionNestedInput
    department?: DepartmentUpdateOneWithoutSurveySectionNestedInput
  }

  export type SurveySectionUncheckedUpdateWithoutDissatisfiedInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUncheckedUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUncheckedUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUncheckedUpdateOneWithoutCustomerCareSectionNestedInput
    satisfied?: SatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
  }

  export type SurveySectionCreateWithoutSatisfiedInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    surveyDoctorExamination?: SurveyCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    doctor?: DoctorCreateNestedOneWithoutSurveySectionInput
    department?: DepartmentCreateNestedOneWithoutSurveySectionInput
  }

  export type SurveySectionUncheckedCreateWithoutSatisfiedInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    doctorId?: string | null
    departmentId?: string | null
    surveyDoctorExamination?: SurveyUncheckedCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyUncheckedCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyUncheckedCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
  }

  export type SurveySectionCreateOrConnectWithoutSatisfiedInput = {
    where: SurveySectionWhereUniqueInput
    create: XOR<SurveySectionCreateWithoutSatisfiedInput, SurveySectionUncheckedCreateWithoutSatisfiedInput>
  }

  export type SurveySectionUpsertWithoutSatisfiedInput = {
    update: XOR<SurveySectionUpdateWithoutSatisfiedInput, SurveySectionUncheckedUpdateWithoutSatisfiedInput>
    create: XOR<SurveySectionCreateWithoutSatisfiedInput, SurveySectionUncheckedCreateWithoutSatisfiedInput>
    where?: SurveySectionWhereInput
  }

  export type SurveySectionUpdateToOneWithWhereWithoutSatisfiedInput = {
    where?: SurveySectionWhereInput
    data: XOR<SurveySectionUpdateWithoutSatisfiedInput, SurveySectionUncheckedUpdateWithoutSatisfiedInput>
  }

  export type SurveySectionUpdateWithoutSatisfiedInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    doctor?: DoctorUpdateOneWithoutSurveySectionNestedInput
    department?: DepartmentUpdateOneWithoutSurveySectionNestedInput
  }

  export type SurveySectionUncheckedUpdateWithoutSatisfiedInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUncheckedUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUncheckedUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUncheckedUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
  }

  export type SurveySectionCreateWithoutDoctorInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    surveyDoctorExamination?: SurveyCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    department?: DepartmentCreateNestedOneWithoutSurveySectionInput
  }

  export type SurveySectionUncheckedCreateWithoutDoctorInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    departmentId?: string | null
    surveyDoctorExamination?: SurveyUncheckedCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyUncheckedCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyUncheckedCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
  }

  export type SurveySectionCreateOrConnectWithoutDoctorInput = {
    where: SurveySectionWhereUniqueInput
    create: XOR<SurveySectionCreateWithoutDoctorInput, SurveySectionUncheckedCreateWithoutDoctorInput>
  }

  export type SurveySectionCreateManyDoctorInputEnvelope = {
    data: SurveySectionCreateManyDoctorInput | SurveySectionCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type SurveySectionUpsertWithWhereUniqueWithoutDoctorInput = {
    where: SurveySectionWhereUniqueInput
    update: XOR<SurveySectionUpdateWithoutDoctorInput, SurveySectionUncheckedUpdateWithoutDoctorInput>
    create: XOR<SurveySectionCreateWithoutDoctorInput, SurveySectionUncheckedCreateWithoutDoctorInput>
  }

  export type SurveySectionUpdateWithWhereUniqueWithoutDoctorInput = {
    where: SurveySectionWhereUniqueInput
    data: XOR<SurveySectionUpdateWithoutDoctorInput, SurveySectionUncheckedUpdateWithoutDoctorInput>
  }

  export type SurveySectionUpdateManyWithWhereWithoutDoctorInput = {
    where: SurveySectionScalarWhereInput
    data: XOR<SurveySectionUpdateManyMutationInput, SurveySectionUncheckedUpdateManyWithoutDoctorInput>
  }

  export type SurveySectionScalarWhereInput = {
    AND?: SurveySectionScalarWhereInput | SurveySectionScalarWhereInput[]
    OR?: SurveySectionScalarWhereInput[]
    NOT?: SurveySectionScalarWhereInput | SurveySectionScalarWhereInput[]
    id?: StringFilter<"SurveySection"> | string
    sectionType?: StringFilter<"SurveySection"> | string
    satisfaction?: IntFilter<"SurveySection"> | number
    feedback?: StringNullableFilter<"SurveySection"> | string | null
    doctorId?: StringNullableFilter<"SurveySection"> | string | null
    departmentId?: StringNullableFilter<"SurveySection"> | string | null
  }

  export type SurveySectionCreateWithoutDepartmentInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    surveyDoctorExamination?: SurveyCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonCreateNestedManyWithoutSurveySectionInput
    doctor?: DoctorCreateNestedOneWithoutSurveySectionInput
  }

  export type SurveySectionUncheckedCreateWithoutDepartmentInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    doctorId?: string | null
    surveyDoctorExamination?: SurveyUncheckedCreateNestedOneWithoutDoctorExaminationSectionInput
    surveyDoctorUltrasound?: SurveyUncheckedCreateNestedOneWithoutDoctorUltrasoundSectionInput
    surveyCustomerCare?: SurveyUncheckedCreateNestedOneWithoutCustomerCareSectionInput
    dissatisfied?: DissatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
    satisfied?: SatisfiedReasonUncheckedCreateNestedManyWithoutSurveySectionInput
  }

  export type SurveySectionCreateOrConnectWithoutDepartmentInput = {
    where: SurveySectionWhereUniqueInput
    create: XOR<SurveySectionCreateWithoutDepartmentInput, SurveySectionUncheckedCreateWithoutDepartmentInput>
  }

  export type SurveySectionCreateManyDepartmentInputEnvelope = {
    data: SurveySectionCreateManyDepartmentInput | SurveySectionCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type SurveySectionUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: SurveySectionWhereUniqueInput
    update: XOR<SurveySectionUpdateWithoutDepartmentInput, SurveySectionUncheckedUpdateWithoutDepartmentInput>
    create: XOR<SurveySectionCreateWithoutDepartmentInput, SurveySectionUncheckedCreateWithoutDepartmentInput>
  }

  export type SurveySectionUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: SurveySectionWhereUniqueInput
    data: XOR<SurveySectionUpdateWithoutDepartmentInput, SurveySectionUncheckedUpdateWithoutDepartmentInput>
  }

  export type SurveySectionUpdateManyWithWhereWithoutDepartmentInput = {
    where: SurveySectionScalarWhereInput
    data: XOR<SurveySectionUpdateManyMutationInput, SurveySectionUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type DissatisfiedReasonCreateManySurveySectionInput = {
    id?: string
    content: string
  }

  export type SatisfiedReasonCreateManySurveySectionInput = {
    id?: string
    content: string
  }

  export type DissatisfiedReasonUpdateWithoutSurveySectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DissatisfiedReasonUncheckedUpdateWithoutSurveySectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DissatisfiedReasonUncheckedUpdateManyWithoutSurveySectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfiedReasonUpdateWithoutSurveySectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfiedReasonUncheckedUpdateWithoutSurveySectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SatisfiedReasonUncheckedUpdateManyWithoutSurveySectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SurveySectionCreateManyDoctorInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    departmentId?: string | null
  }

  export type SurveySectionUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    department?: DepartmentUpdateOneWithoutSurveySectionNestedInput
  }

  export type SurveySectionUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUncheckedUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUncheckedUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUncheckedUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
  }

  export type SurveySectionUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurveySectionCreateManyDepartmentInput = {
    id?: string
    sectionType: string
    satisfaction: number
    feedback?: string | null
    doctorId?: string | null
  }

  export type SurveySectionUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUpdateManyWithoutSurveySectionNestedInput
    doctor?: DoctorUpdateOneWithoutSurveySectionNestedInput
  }

  export type SurveySectionUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
    surveyDoctorExamination?: SurveyUncheckedUpdateOneWithoutDoctorExaminationSectionNestedInput
    surveyDoctorUltrasound?: SurveyUncheckedUpdateOneWithoutDoctorUltrasoundSectionNestedInput
    surveyCustomerCare?: SurveyUncheckedUpdateOneWithoutCustomerCareSectionNestedInput
    dissatisfied?: DissatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
    satisfied?: SatisfiedReasonUncheckedUpdateManyWithoutSurveySectionNestedInput
  }

  export type SurveySectionUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionType?: StringFieldUpdateOperationsInput | string
    satisfaction?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SurveySectionCountOutputTypeDefaultArgs instead
     */
    export type SurveySectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveySectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DoctorCountOutputTypeDefaultArgs instead
     */
    export type DoctorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoctorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentCountOutputTypeDefaultArgs instead
     */
    export type DepartmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyDefaultArgs instead
     */
    export type SurveyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveySectionDefaultArgs instead
     */
    export type SurveySectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveySectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DissatisfiedReasonDefaultArgs instead
     */
    export type DissatisfiedReasonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DissatisfiedReasonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SatisfiedReasonDefaultArgs instead
     */
    export type SatisfiedReasonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SatisfiedReasonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DoctorDefaultArgs instead
     */
    export type DoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoctorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentDefaultArgs instead
     */
    export type DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentDefaultArgs<ExtArgs>

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