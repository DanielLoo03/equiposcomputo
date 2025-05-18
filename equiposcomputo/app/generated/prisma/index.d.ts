
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
 * Model Equipo
 * 
 */
export type Equipo = $Result.DefaultSelection<Prisma.$EquipoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Estatus: {
  NUEVO: 'NUEVO',
  USADO: 'USADO',
  DESCOMPUESTO: 'DESCOMPUESTO'
};

export type Estatus = (typeof Estatus)[keyof typeof Estatus]


export const Tipo: {
  MONITOR: 'MONITOR',
  MOUSE: 'MOUSE',
  TECLADO: 'TECLADO',
  LAPTOP: 'LAPTOP',
  IMPRESORA: 'IMPRESORA',
  CAMARA: 'CAMARA',
  PC: 'PC'
};

export type Tipo = (typeof Tipo)[keyof typeof Tipo]

}

export type Estatus = $Enums.Estatus

export const Estatus: typeof $Enums.Estatus

export type Tipo = $Enums.Tipo

export const Tipo: typeof $Enums.Tipo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Equipos
 * const equipos = await prisma.equipo.findMany()
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
   * // Fetch zero or more Equipos
   * const equipos = await prisma.equipo.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.equipo`: Exposes CRUD operations for the **Equipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipos
    * const equipos = await prisma.equipo.findMany()
    * ```
    */
  get equipo(): Prisma.EquipoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Equipo: 'Equipo'
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
      modelProps: "equipo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Equipo: {
        payload: Prisma.$EquipoPayload<ExtArgs>
        fields: Prisma.EquipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          findFirst: {
            args: Prisma.EquipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          findMany: {
            args: Prisma.EquipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          create: {
            args: Prisma.EquipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          createMany: {
            args: Prisma.EquipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          delete: {
            args: Prisma.EquipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          update: {
            args: Prisma.EquipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          deleteMany: {
            args: Prisma.EquipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          upsert: {
            args: Prisma.EquipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          aggregate: {
            args: Prisma.EquipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipo>
          }
          groupBy: {
            args: Prisma.EquipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipoCountAggregateOutputType> | number
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
    equipo?: EquipoOmit
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
   * Model Equipo
   */

  export type AggregateEquipo = {
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  export type EquipoAvgAggregateOutputType = {
    stock: number | null
    precio: number | null
  }

  export type EquipoSumAggregateOutputType = {
    stock: number | null
    precio: number | null
  }

  export type EquipoMinAggregateOutputType = {
    numeroSerie: string | null
    estatus: $Enums.Estatus | null
    tipo: $Enums.Tipo | null
    marca: string | null
    modelo: string | null
    descripcion: string | null
    stock: number | null
    precio: number | null
  }

  export type EquipoMaxAggregateOutputType = {
    numeroSerie: string | null
    estatus: $Enums.Estatus | null
    tipo: $Enums.Tipo | null
    marca: string | null
    modelo: string | null
    descripcion: string | null
    stock: number | null
    precio: number | null
  }

  export type EquipoCountAggregateOutputType = {
    numeroSerie: number
    estatus: number
    tipo: number
    marca: number
    modelo: number
    descripcion: number
    stock: number
    precio: number
    _all: number
  }


  export type EquipoAvgAggregateInputType = {
    stock?: true
    precio?: true
  }

  export type EquipoSumAggregateInputType = {
    stock?: true
    precio?: true
  }

  export type EquipoMinAggregateInputType = {
    numeroSerie?: true
    estatus?: true
    tipo?: true
    marca?: true
    modelo?: true
    descripcion?: true
    stock?: true
    precio?: true
  }

  export type EquipoMaxAggregateInputType = {
    numeroSerie?: true
    estatus?: true
    tipo?: true
    marca?: true
    modelo?: true
    descripcion?: true
    stock?: true
    precio?: true
  }

  export type EquipoCountAggregateInputType = {
    numeroSerie?: true
    estatus?: true
    tipo?: true
    marca?: true
    modelo?: true
    descripcion?: true
    stock?: true
    precio?: true
    _all?: true
  }

  export type EquipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipo to aggregate.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipos
    **/
    _count?: true | EquipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipoMaxAggregateInputType
  }

  export type GetEquipoAggregateType<T extends EquipoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipo[P]>
      : GetScalarType<T[P], AggregateEquipo[P]>
  }




  export type EquipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipoWhereInput
    orderBy?: EquipoOrderByWithAggregationInput | EquipoOrderByWithAggregationInput[]
    by: EquipoScalarFieldEnum[] | EquipoScalarFieldEnum
    having?: EquipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipoCountAggregateInputType | true
    _avg?: EquipoAvgAggregateInputType
    _sum?: EquipoSumAggregateInputType
    _min?: EquipoMinAggregateInputType
    _max?: EquipoMaxAggregateInputType
  }

  export type EquipoGroupByOutputType = {
    numeroSerie: string
    estatus: $Enums.Estatus
    tipo: $Enums.Tipo
    marca: string
    modelo: string
    descripcion: string | null
    stock: number
    precio: number
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  type GetEquipoGroupByPayload<T extends EquipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipoGroupByOutputType[P]>
        }
      >
    >


  export type EquipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numeroSerie?: boolean
    estatus?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    descripcion?: boolean
    stock?: boolean
    precio?: boolean
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numeroSerie?: boolean
    estatus?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    descripcion?: boolean
    stock?: boolean
    precio?: boolean
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numeroSerie?: boolean
    estatus?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    descripcion?: boolean
    stock?: boolean
    precio?: boolean
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectScalar = {
    numeroSerie?: boolean
    estatus?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    descripcion?: boolean
    stock?: boolean
    precio?: boolean
  }

  export type EquipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"numeroSerie" | "estatus" | "tipo" | "marca" | "modelo" | "descripcion" | "stock" | "precio", ExtArgs["result"]["equipo"]>

  export type $EquipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      numeroSerie: string
      estatus: $Enums.Estatus
      tipo: $Enums.Tipo
      marca: string
      modelo: string
      descripcion: string | null
      stock: number
      precio: number
    }, ExtArgs["result"]["equipo"]>
    composites: {}
  }

  type EquipoGetPayload<S extends boolean | null | undefined | EquipoDefaultArgs> = $Result.GetResult<Prisma.$EquipoPayload, S>

  type EquipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipoCountAggregateInputType | true
    }

  export interface EquipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipo'], meta: { name: 'Equipo' } }
    /**
     * Find zero or one Equipo that matches the filter.
     * @param {EquipoFindUniqueArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipoFindUniqueArgs>(args: SelectSubset<T, EquipoFindUniqueArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipoFindUniqueOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipoFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindFirstArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipoFindFirstArgs>(args?: SelectSubset<T, EquipoFindFirstArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindFirstOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipoFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipos
     * const equipos = await prisma.equipo.findMany()
     * 
     * // Get first 10 Equipos
     * const equipos = await prisma.equipo.findMany({ take: 10 })
     * 
     * // Only select the `numeroSerie`
     * const equipoWithNumeroSerieOnly = await prisma.equipo.findMany({ select: { numeroSerie: true } })
     * 
     */
    findMany<T extends EquipoFindManyArgs>(args?: SelectSubset<T, EquipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipo.
     * @param {EquipoCreateArgs} args - Arguments to create a Equipo.
     * @example
     * // Create one Equipo
     * const Equipo = await prisma.equipo.create({
     *   data: {
     *     // ... data to create a Equipo
     *   }
     * })
     * 
     */
    create<T extends EquipoCreateArgs>(args: SelectSubset<T, EquipoCreateArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipos.
     * @param {EquipoCreateManyArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipoCreateManyArgs>(args?: SelectSubset<T, EquipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipos and returns the data saved in the database.
     * @param {EquipoCreateManyAndReturnArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipos and only return the `numeroSerie`
     * const equipoWithNumeroSerieOnly = await prisma.equipo.createManyAndReturn({
     *   select: { numeroSerie: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipoCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipo.
     * @param {EquipoDeleteArgs} args - Arguments to delete one Equipo.
     * @example
     * // Delete one Equipo
     * const Equipo = await prisma.equipo.delete({
     *   where: {
     *     // ... filter to delete one Equipo
     *   }
     * })
     * 
     */
    delete<T extends EquipoDeleteArgs>(args: SelectSubset<T, EquipoDeleteArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipo.
     * @param {EquipoUpdateArgs} args - Arguments to update one Equipo.
     * @example
     * // Update one Equipo
     * const equipo = await prisma.equipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipoUpdateArgs>(args: SelectSubset<T, EquipoUpdateArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipos.
     * @param {EquipoDeleteManyArgs} args - Arguments to filter Equipos to delete.
     * @example
     * // Delete a few Equipos
     * const { count } = await prisma.equipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipoDeleteManyArgs>(args?: SelectSubset<T, EquipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipoUpdateManyArgs>(args: SelectSubset<T, EquipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos and returns the data updated in the database.
     * @param {EquipoUpdateManyAndReturnArgs} args - Arguments to update many Equipos.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipos and only return the `numeroSerie`
     * const equipoWithNumeroSerieOnly = await prisma.equipo.updateManyAndReturn({
     *   select: { numeroSerie: true },
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
    updateManyAndReturn<T extends EquipoUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipo.
     * @param {EquipoUpsertArgs} args - Arguments to update or create a Equipo.
     * @example
     * // Update or create a Equipo
     * const equipo = await prisma.equipo.upsert({
     *   create: {
     *     // ... data to create a Equipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipo we want to update
     *   }
     * })
     */
    upsert<T extends EquipoUpsertArgs>(args: SelectSubset<T, EquipoUpsertArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoCountArgs} args - Arguments to filter Equipos to count.
     * @example
     * // Count the number of Equipos
     * const count = await prisma.equipo.count({
     *   where: {
     *     // ... the filter for the Equipos we want to count
     *   }
     * })
    **/
    count<T extends EquipoCountArgs>(
      args?: Subset<T, EquipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipoAggregateArgs>(args: Subset<T, EquipoAggregateArgs>): Prisma.PrismaPromise<GetEquipoAggregateType<T>>

    /**
     * Group by Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoGroupByArgs} args - Group by arguments.
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
      T extends EquipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipoGroupByArgs['orderBy'] }
        : { orderBy?: EquipoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipo model
   */
  readonly fields: EquipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Equipo model
   */
  interface EquipoFieldRefs {
    readonly numeroSerie: FieldRef<"Equipo", 'String'>
    readonly estatus: FieldRef<"Equipo", 'Estatus'>
    readonly tipo: FieldRef<"Equipo", 'Tipo'>
    readonly marca: FieldRef<"Equipo", 'String'>
    readonly modelo: FieldRef<"Equipo", 'String'>
    readonly descripcion: FieldRef<"Equipo", 'String'>
    readonly stock: FieldRef<"Equipo", 'Int'>
    readonly precio: FieldRef<"Equipo", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Equipo findUnique
   */
  export type EquipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo findUniqueOrThrow
   */
  export type EquipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo findFirst
   */
  export type EquipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo findFirstOrThrow
   */
  export type EquipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo findMany
   */
  export type EquipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Filter, which Equipos to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo create
   */
  export type EquipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data needed to create a Equipo.
     */
    data: XOR<EquipoCreateInput, EquipoUncheckedCreateInput>
  }

  /**
   * Equipo createMany
   */
  export type EquipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipos.
     */
    data: EquipoCreateManyInput | EquipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipo createManyAndReturn
   */
  export type EquipoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data used to create many Equipos.
     */
    data: EquipoCreateManyInput | EquipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipo update
   */
  export type EquipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data needed to update a Equipo.
     */
    data: XOR<EquipoUpdateInput, EquipoUncheckedUpdateInput>
    /**
     * Choose, which Equipo to update.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo updateMany
   */
  export type EquipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipos.
     */
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Equipos to update
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to update.
     */
    limit?: number
  }

  /**
   * Equipo updateManyAndReturn
   */
  export type EquipoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data used to update Equipos.
     */
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Equipos to update
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to update.
     */
    limit?: number
  }

  /**
   * Equipo upsert
   */
  export type EquipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The filter to search for the Equipo to update in case it exists.
     */
    where: EquipoWhereUniqueInput
    /**
     * In case the Equipo found by the `where` argument doesn't exist, create a new Equipo with this data.
     */
    create: XOR<EquipoCreateInput, EquipoUncheckedCreateInput>
    /**
     * In case the Equipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipoUpdateInput, EquipoUncheckedUpdateInput>
  }

  /**
   * Equipo delete
   */
  export type EquipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Filter which Equipo to delete.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo deleteMany
   */
  export type EquipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipos to delete
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to delete.
     */
    limit?: number
  }

  /**
   * Equipo without action
   */
  export type EquipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
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


  export const EquipoScalarFieldEnum: {
    numeroSerie: 'numeroSerie',
    estatus: 'estatus',
    tipo: 'tipo',
    marca: 'marca',
    modelo: 'modelo',
    descripcion: 'descripcion',
    stock: 'stock',
    precio: 'precio'
  };

  export type EquipoScalarFieldEnum = (typeof EquipoScalarFieldEnum)[keyof typeof EquipoScalarFieldEnum]


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
   * Reference to a field of type 'Estatus'
   */
  export type EnumEstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estatus'>
    


  /**
   * Reference to a field of type 'Estatus[]'
   */
  export type ListEnumEstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estatus[]'>
    


  /**
   * Reference to a field of type 'Tipo'
   */
  export type EnumTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo'>
    


  /**
   * Reference to a field of type 'Tipo[]'
   */
  export type ListEnumTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo[]'>
    


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


  export type EquipoWhereInput = {
    AND?: EquipoWhereInput | EquipoWhereInput[]
    OR?: EquipoWhereInput[]
    NOT?: EquipoWhereInput | EquipoWhereInput[]
    numeroSerie?: StringFilter<"Equipo"> | string
    estatus?: EnumEstatusFilter<"Equipo"> | $Enums.Estatus
    tipo?: EnumTipoFilter<"Equipo"> | $Enums.Tipo
    marca?: StringFilter<"Equipo"> | string
    modelo?: StringFilter<"Equipo"> | string
    descripcion?: StringNullableFilter<"Equipo"> | string | null
    stock?: IntFilter<"Equipo"> | number
    precio?: FloatFilter<"Equipo"> | number
  }

  export type EquipoOrderByWithRelationInput = {
    numeroSerie?: SortOrder
    estatus?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    stock?: SortOrder
    precio?: SortOrder
  }

  export type EquipoWhereUniqueInput = Prisma.AtLeast<{
    numeroSerie?: string
    AND?: EquipoWhereInput | EquipoWhereInput[]
    OR?: EquipoWhereInput[]
    NOT?: EquipoWhereInput | EquipoWhereInput[]
    estatus?: EnumEstatusFilter<"Equipo"> | $Enums.Estatus
    tipo?: EnumTipoFilter<"Equipo"> | $Enums.Tipo
    marca?: StringFilter<"Equipo"> | string
    modelo?: StringFilter<"Equipo"> | string
    descripcion?: StringNullableFilter<"Equipo"> | string | null
    stock?: IntFilter<"Equipo"> | number
    precio?: FloatFilter<"Equipo"> | number
  }, "numeroSerie" | "numeroSerie">

  export type EquipoOrderByWithAggregationInput = {
    numeroSerie?: SortOrder
    estatus?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    stock?: SortOrder
    precio?: SortOrder
    _count?: EquipoCountOrderByAggregateInput
    _avg?: EquipoAvgOrderByAggregateInput
    _max?: EquipoMaxOrderByAggregateInput
    _min?: EquipoMinOrderByAggregateInput
    _sum?: EquipoSumOrderByAggregateInput
  }

  export type EquipoScalarWhereWithAggregatesInput = {
    AND?: EquipoScalarWhereWithAggregatesInput | EquipoScalarWhereWithAggregatesInput[]
    OR?: EquipoScalarWhereWithAggregatesInput[]
    NOT?: EquipoScalarWhereWithAggregatesInput | EquipoScalarWhereWithAggregatesInput[]
    numeroSerie?: StringWithAggregatesFilter<"Equipo"> | string
    estatus?: EnumEstatusWithAggregatesFilter<"Equipo"> | $Enums.Estatus
    tipo?: EnumTipoWithAggregatesFilter<"Equipo"> | $Enums.Tipo
    marca?: StringWithAggregatesFilter<"Equipo"> | string
    modelo?: StringWithAggregatesFilter<"Equipo"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Equipo"> | string | null
    stock?: IntWithAggregatesFilter<"Equipo"> | number
    precio?: FloatWithAggregatesFilter<"Equipo"> | number
  }

  export type EquipoCreateInput = {
    numeroSerie: string
    estatus: $Enums.Estatus
    tipo: $Enums.Tipo
    marca: string
    modelo: string
    descripcion?: string | null
    stock: number
    precio: number
  }

  export type EquipoUncheckedCreateInput = {
    numeroSerie: string
    estatus: $Enums.Estatus
    tipo: $Enums.Tipo
    marca: string
    modelo: string
    descripcion?: string | null
    stock: number
    precio: number
  }

  export type EquipoUpdateInput = {
    numeroSerie?: StringFieldUpdateOperationsInput | string
    estatus?: EnumEstatusFieldUpdateOperationsInput | $Enums.Estatus
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type EquipoUncheckedUpdateInput = {
    numeroSerie?: StringFieldUpdateOperationsInput | string
    estatus?: EnumEstatusFieldUpdateOperationsInput | $Enums.Estatus
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type EquipoCreateManyInput = {
    numeroSerie: string
    estatus: $Enums.Estatus
    tipo: $Enums.Tipo
    marca: string
    modelo: string
    descripcion?: string | null
    stock: number
    precio: number
  }

  export type EquipoUpdateManyMutationInput = {
    numeroSerie?: StringFieldUpdateOperationsInput | string
    estatus?: EnumEstatusFieldUpdateOperationsInput | $Enums.Estatus
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type EquipoUncheckedUpdateManyInput = {
    numeroSerie?: StringFieldUpdateOperationsInput | string
    estatus?: EnumEstatusFieldUpdateOperationsInput | $Enums.Estatus
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
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

  export type EnumEstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Estatus | EnumEstatusFieldRefInput<$PrismaModel>
    in?: $Enums.Estatus[] | ListEnumEstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estatus[] | ListEnumEstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstatusFilter<$PrismaModel> | $Enums.Estatus
  }

  export type EnumTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoFilter<$PrismaModel> | $Enums.Tipo
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EquipoCountOrderByAggregateInput = {
    numeroSerie?: SortOrder
    estatus?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    descripcion?: SortOrder
    stock?: SortOrder
    precio?: SortOrder
  }

  export type EquipoAvgOrderByAggregateInput = {
    stock?: SortOrder
    precio?: SortOrder
  }

  export type EquipoMaxOrderByAggregateInput = {
    numeroSerie?: SortOrder
    estatus?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    descripcion?: SortOrder
    stock?: SortOrder
    precio?: SortOrder
  }

  export type EquipoMinOrderByAggregateInput = {
    numeroSerie?: SortOrder
    estatus?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    descripcion?: SortOrder
    stock?: SortOrder
    precio?: SortOrder
  }

  export type EquipoSumOrderByAggregateInput = {
    stock?: SortOrder
    precio?: SortOrder
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

  export type EnumEstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estatus | EnumEstatusFieldRefInput<$PrismaModel>
    in?: $Enums.Estatus[] | ListEnumEstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estatus[] | ListEnumEstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstatusWithAggregatesFilter<$PrismaModel> | $Enums.Estatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstatusFilter<$PrismaModel>
    _max?: NestedEnumEstatusFilter<$PrismaModel>
  }

  export type EnumTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoWithAggregatesFilter<$PrismaModel> | $Enums.Tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoFilter<$PrismaModel>
    _max?: NestedEnumTipoFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumEstatusFieldUpdateOperationsInput = {
    set?: $Enums.Estatus
  }

  export type EnumTipoFieldUpdateOperationsInput = {
    set?: $Enums.Tipo
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
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

  export type NestedEnumEstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Estatus | EnumEstatusFieldRefInput<$PrismaModel>
    in?: $Enums.Estatus[] | ListEnumEstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estatus[] | ListEnumEstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstatusFilter<$PrismaModel> | $Enums.Estatus
  }

  export type NestedEnumTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoFilter<$PrismaModel> | $Enums.Tipo
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

  export type NestedEnumEstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estatus | EnumEstatusFieldRefInput<$PrismaModel>
    in?: $Enums.Estatus[] | ListEnumEstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estatus[] | ListEnumEstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstatusWithAggregatesFilter<$PrismaModel> | $Enums.Estatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstatusFilter<$PrismaModel>
    _max?: NestedEnumEstatusFilter<$PrismaModel>
  }

  export type NestedEnumTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo[] | ListEnumTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoWithAggregatesFilter<$PrismaModel> | $Enums.Tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoFilter<$PrismaModel>
    _max?: NestedEnumTipoFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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