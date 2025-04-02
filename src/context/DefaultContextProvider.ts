import { IContextProvider } from "@vectry/js-core";

/**
 * DefaultContextProvider for Node.js
 *
 * Provides a basic static context in environments without a specific session, user, or app context.
 */
export async function DefaultContextProvider(): Promise<IContextProvider> {
  return {
    veripass_username: "system",
    app_id: "vectry-node",
    session_id: `sess-${Date.now().toString(36)}`,
  };
}
