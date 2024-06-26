import { Identity, IdentityProvider } from "./Identity.d.ts";
/**
 * @public
 */
export interface LoginIdentity extends Identity {
    /**
     * Identity username
     */
    readonly username: string;
    /**
     * Identity password
     */
    readonly password: string;
}
/**
 * @public
 */
export type LoginIdentityProvider = IdentityProvider<LoginIdentity>;
