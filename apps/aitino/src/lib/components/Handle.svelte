<script lang="ts">
    import { Handle, Position, type Connection } from '@xyflow/svelte';

    export let position: Position;
    export let id: string;


</script>
     

<Handle
{id}
class="!w-5 !h-5 rounded-none border-none !bg-teal-500"
{...$$restProps}
type="source"
position={position}
/>
