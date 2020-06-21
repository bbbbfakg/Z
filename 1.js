<!-- /*注意！本js无任何恶意破坏行为，注入js只是为了好玩，若您认为权益受到侵犯，请通知我，我将删除*/ -->
<script>
function startAll(){
  start();
}
(function start(){
  console.log("内部console");
})();
console.log("外部console");
</script>
