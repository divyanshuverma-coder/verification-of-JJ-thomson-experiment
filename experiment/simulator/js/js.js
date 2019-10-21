<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script language="javascript">
                function addNumbers()
                {
                        var val1 = parseInt(document.getElementById("value1").value);
                        var val2 = parseInt(document.getElementById("value2").value);
                        var ansD = document.getElementById("answer");
                        ansD.value = val2/val1;
                        var x=10;
                        var ansD1 = document.getElementById("answer1");
                        ansD1.value = x/ansD.value;
                        var e=1.6*(Math.pow(10, -19));
                        var m=9.1*(Math.pow(10, -31));
                        var ansD2 = document.getElementById("answer2");
                        ansD2.value = (0.5*e*val2*(Math.pow(ansD1.value, 2)))/m ;
                        console.log((0.5*e*val2*(Math.pow(ansD.value, 2)))/m);
                        var ansD3 = document.getElementById("answer3");
                        ansD3.value = (2*ansD2.value*val2)/(Math.pow(x, 2)*(Math.pow(val1, 2)));
                }
                $(document).ready(function(){
                $("#simulator").click(function(){
                  $("#sim").animate({height: '250px'});
                });
              });
        </script>