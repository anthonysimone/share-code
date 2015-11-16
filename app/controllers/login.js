import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      let logindata = [];
      logindata.email = identification;
      logindata.password = password;
      
      this.get('session').authenticate('authenticator:firebase', logindata).catch((reason) => {
        this.set('errorMessage', reason);
      });
    }
  }
});