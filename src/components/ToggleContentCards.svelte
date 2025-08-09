<script>
  import ToggleContentCard from "$elegant/layout/ToggleContentCard.svelte";
  import IconHover from "$elegant/customization/IconHover.svelte";
  import Delete from "$icons-elegant/Delete.svelte";
  import Pen from "$icons-elegant/Pen.svelte";

  export let color = "";
</script>

<div style:margin-bottom="0.25rem">
  <ToggleContentCard width="20.33rem">
    <div slot="content">
      <p style:font-weight="600" style:color>
        Выписать 500 новых слов в English Assistant
      </p>
    </div>
    <div slot="detailes">
      <p>
        It contains the details. It contains the details. It contains the
        details.
      </p>
      <ul style:margin-top="0.25rem">
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
      </ul>
    </div>

    <div slot="actions" style:margin-left="0.25rem">
      <IconHover padding="0.33rem">
        <Delete size="1.66rem" />
      </IconHover>
    </div>
  </ToggleContentCard>
</div>
<div style:margin-bottom="0.25rem">
  <ToggleContentCard width="23rem">
    <div slot="content">
      <p style:font-weight="600" style:color>Title</p>
      <p style:margin-top="0.5rem">The text of the Card is located here.</p>
    </div>
    <div slot="detailes">
      <p>It contains the details.</p>
      <ul style:margin-top="0.25rem">
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
      </ul>
    </div>
  </ToggleContentCard>
</div>
<div style:margin-bottom="0.25rem">
  <ToggleContentCard width="23rem">
    <div slot="content">
      <p style:font-weight="600" style:color>Title</p>
      <p style:margin-top="0.5rem">The text of the Card is located here.</p>
    </div>
    <div slot="detailes">
      <p>It contains the details.</p>
      <ul style:margin-top="0.25rem">
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
      </ul>
    </div>
  </ToggleContentCard>
</div>
