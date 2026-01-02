// Main SDK exports for the Crossplane Function SDK

// Core function interfaces and classes
export type { FunctionHandler } from "./function/function.js";
export { FunctionRunner, getServer } from "./function/function.js";

// Request helpers
export {
    getDesiredCompositeResource,
    getObservedCompositeResource,
    getDesiredComposedResources,
    getObservedComposedResources,
    getInput,
    getContextKey,
    getRequiredResources,
    getCredentials,
} from "./request/request.js";

// Response helpers
export {
    to,
    fatal,
    normal,
    warning,
    setDesiredComposedResources,
    setDesiredCompositeStatus,
    updateDesiredComposedResources,
    update,
} from "./response/response.js";

// Runtime utilities
export {
    newGrpcServer,
    startServer,
    getServerCredentials,
    type ServerOptions,
} from "./runtime/runtime.js";

// Protocol buffer types
export {
    RunFunctionRequest,
    RunFunctionResponse,
    Resource,
    Resources,
    Credentials,
    Severity,
    Result,
    State,
    FunctionRunnerServiceService,
} from "./proto/run_function.js";

export type { Logger } from "pino";
