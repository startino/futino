<script lang="ts">
  import Button from "./Button.svelte";
  async function sha256(message: string) {
    // Encode the message as UTF-8
    const encoder = new TextEncoder();
    const data = encoder.encode(message);

    // Calculate the SHA-256 hash
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    // Convert the hash buffer to a hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  }
  // Double SHA256 hashed
  const key =
    "d17b0d9a8b44aaa69bcbd82285e67a30418a6c3dc38e16c02e64035386452580";

  // Debug value, should login instance be remembered?
  const rememberKey = false;

  function reload() {
    window.location.reload();
  }

  async function verify() {
    // Remove key from localStorage the key for debug purposes.
    if (!rememberKey) localStorage.setItem("key", "");

    // Check if the saved key in localStorage is correct, if so verify immediately.
    //
    sha256(localStorage.getItem("key")).then((hash) => {
      if (hash == key) return true;
    });

    // First hashing with SHA256 so the original password cannot be read in localStorage
    // A second hashing of the input is performed only on checks to prevent copy pasting
    // the true key.

    sha256(prompt("Enter Key", "")?.replace(/\s+/g, "")).then((hash) => {
      localStorage.setItem("key", hash);
    });

    // Log given hashes of input key.
    console.debug(
      `SHA256: ${localStorage.getItem("key")}\nDouble SHA256: ${sha256(
        localStorage.getItem("key"),
      )}`,
    );

    // Perform second hashing only when checking to prevent user from edeting their
    // localStorage to ensure they didn't copy paste the true key.
    try {
      const hash = await sha256(localStorage.getItem("key"));
      return hash === key;
    } catch (error) {
      console.error("Error hashing the key:", error);
      return false;
    }
  }

  let verified: Promise<boolean> = new Promise((resolve, reject) => {
    try {
      resolve(verify());
    } catch {
      reject("Error with verification.");
    }
  });
</script>

{#await verified}
  <main class="h-screen grid grid-rows-3">
    <div class="grid row-start-2 space-y-12 place-items-center">
      <h1 class="text-6xl">Authenticating...</h1>
    </div>
  </main>
{:then isVerified}
  {#if isVerified}
    <slot />
  {:else}
    <main class="h-screen grid grid-rows-3">
      <div class="grid row-start-2 space-y-12 place-items-center">
        <h1 class="text-6xl">Failed authentication</h1>
        <h2 class="text-2xl">Please Refresh Page and enter the right key</h2>
        <button on:click={reload}>
          <Button>Refresh Page</Button>
        </button>
      </div>
    </main>
  {/if}
{/await}
