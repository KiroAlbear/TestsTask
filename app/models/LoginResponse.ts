interface LoginResponse {
    token_type?: string;
    expires_in?: number;
    access_token?: string;
    refresh_token?: string;
    // You can add other fields based on your API response
  }