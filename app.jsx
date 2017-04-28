
var PLAYERS =[
{
  id:1,
  name:"Cris",
  score:45,
},
{
  id:2,
  name:"Peter",
  score:40,
},
{
  id:3,
  name:"Daniel",
  score:19,
}
];

  var Player =  React.createClass({

    render: function(){
      return (
              <div>
              <div>
          this.props.players.map(function(player){
            return <p>{player.name}{player.score} key={player.id} <p/>
          }
          </div>

              </div>

        );
    }



  })





 var Aplication = React.createClass({
  
   render:function(){
      return (  <div>

                  <h1> React Sample </h1>
                  <Player players=PLAYERS/>

                </div>  );

    } 
  })
ReactDOM.render(<Aplication/>,document.getElementById("container"));