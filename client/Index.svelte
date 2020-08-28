<script>
  import Login from './Login.svelte';
  import App from './App.svelte';

  var user = getUser();
    
  function getUser() {
    return {
      loggedIn: false,
      userName: "Johnny"
		};
  }
</script>

{#if user.loggedIn}
	<App user={user}></App>
{:else}
	<Login></Login>
{/if}
