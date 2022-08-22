export const endpoints = {
    account: {
        register: 'accounts/v1/user/register', 

        // Forgot password
        forgot_password: 'accounts/v1/user/password/forgot',
        fp_token_verify: 'accounts/v1/user/password/verify',
        reset_password: 'accounts/v1/user/password/reset',  
    },
    ws: {
        trade_log: 'ws/v1/tradelog',
        trade_log_json: 'ws/v1/tradelog/json',
    }
};
