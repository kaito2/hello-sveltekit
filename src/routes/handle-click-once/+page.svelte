<script lang="ts">
  let handleClick = () => {
    alert("no more alerts");
  };
</script>

<button on:click|once={handleClick}> Click me </button>
