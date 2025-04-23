import {
  defaultConfig,
  EnvironmentBaseUrls,
  VectryConfig,
  VectryCore,
} from "@vectry/js-core";
import { HttpTransport } from "../transport/HttpTransport";
import { DefaultContextProvider } from "../context/DefaultContextProvider";

export class Vectry extends VectryCore {
  constructor(config: Partial<VectryConfig>) {
    const environment = config.environment || defaultConfig.environment || "prod";
    const baseUrl = config.baseUrl || EnvironmentBaseUrls[environment] || defaultConfig.baseUrl;

    // Merge the user config with defaults
    const mergedConfig: VectryConfig = {
      ...defaultConfig,
      ...config,
      environment,
      baseUrl,
      transport: config.transport ?? new HttpTransport(config),
      contextProvider: config.contextProvider ?? DefaultContextProvider,
    };

    // Initialize parent class with required fields
    super(mergedConfig);
  }
}
