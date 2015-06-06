var Promise = require("bluebird");

var state_tree = new Sealious.ChipTypes.FieldType("state_tree");   


state_tree.prototype.init = function(){
   var available_states = this.params.available_states;
   var transition_rules = this.params.transition_rules;
   var initial_state = this.params.initial_state;

   this.size = available_states.length;
   this.obj = {};

   for (var i = 0; i < transition_rules.length; i++){
      var transition = transition_rules[i];

      if (available_states.indexOf(transition[0]) === -1 || available_states.indexOf(transition[1]) === -1){
         //throw new Error("invalid transition");
      }

      if (this.obj[transition[0]] === undefined)
         this.obj[transition[0]] = [];
      this.obj[transition[0]].push(transition[1].toString());
   }
}


state_tree.prototype.isProperValue = function(newState, currentState){
      console.log("nowy",newState);
      console.log("current_state",currentState);
      if (newState !== undefined && currentState === undefined){
         return true;
      }
      else if (newState === undefined && currentState === undefined) {
         return Promise.reject();
      }
      else if (newState !== undefined && currentState !== undefined){
         if (this.obj[currentState] !== undefined && this.obj[currentState].indexOf(newState) != -1){
            currentState = newState;
            return true;
         } 
         else {
            return new Sealious.Errors.ValidationError("Cannot change from state `" + currentState + "` to `" + newState + "`.");
         }
      }
}

state_tree.prototype.encode = function(new_value, old_value){
   console.log("state_tree.encode", arguments);
   if(old_value===undefined){
      return this.params.initial_state;
   }else{
      return new_value;
   }
}

state_tree.prototype.old_value_sensitive = true;

/*
var drzewo = new StateTree([1,2,3,4], [
   [1, 5], 
   [1, 3], 
   [1, 4], 
   [2, 3], 
   [2, 4]
   ], 2);

*/
