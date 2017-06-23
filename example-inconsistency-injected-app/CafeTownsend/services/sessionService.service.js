/**
 * Created by Misu Be Imp on 7/12/2016.
 */
/**
 *  Session Service:
 *
 *  Build the application session and provide a centralized logout feature
 *  Use closure to store session data.
 */
angular.module('CafeTownsend').service('sessionService', constructor);

constructor.$inject = ['$log'];
function constructor($log) {
    $log.log('initializing Session services...');

    var session = {
        userName: "ThomasBurleson@gmail.com",
        password: "",
        authenticated: false
    };

    // Expose service accessor functions
    return {
        /**
         * Accessor to current `shared` session information
         * Build single instance; if needed.
         */
        session: function () {
            return session;
        },

        /**
         * Mutator to logout current authenticated user.
         *
         * NOTE: redirection (routing) to the `/login` partial is handled
         *       in the SessionController
         */
        logout: function () {
            session.authenticated = false;
        }
    };

}
