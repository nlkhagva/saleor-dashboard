/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RefreshToken
// ====================================================

export interface RefreshToken_tokenRefresh {
  __typename: "RefreshToken";
  /**
   * JWT token, required to authenticate.
   */
  token: string | null;
}

export interface RefreshToken {
  /**
   * Refresh JWT token. Mutation tries to take refreshToken from the input.If it
   * fails it will try to take refreshToken from the http-only cookie
   * -refreshToken. csrfToken is required when refreshToken is provided as a cookie.
   */
  tokenRefresh: RefreshToken_tokenRefresh | null;
}

export interface RefreshTokenVariables {
  token: string;
}
