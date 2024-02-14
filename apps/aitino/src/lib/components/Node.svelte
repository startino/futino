<script lang="ts">
    import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	import * as Card from './ui/card';
   
  </script>
   
  <Card.Root>
    <Card.Header>
      <Card.Title>
        <slot name="title" />
      </Card.Title>
    </Card.Header>
    <div class="flex text-foreground">
     <slot name="content"/>
    </div>
    <Handle
      type="target"
      position={Position.Top}
      class="w-16 !bg-teal-500 rounded-none border-none"
    />
    <Handle
      type="source"
      position={Position.Bottom}
      class="w-16 !bg-teal-500 rounded-none border-none"
    />
  </Card.Root>