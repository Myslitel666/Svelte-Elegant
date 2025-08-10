<script>
  import ToggleContentCard from "$elegant/layout/ToggleContentCard.svelte";
  import IconHover from "$elegant/customization/IconHover.svelte";
  import Delete from "$icons-elegant/Delete.svelte";
</script>

<div class="toggle-content-cards">
  <div class="card">
    <ToggleContentCard width="100%">
      <div slot="content">
        <p>Выписать 50 новых слов в English Assistant</p>
      </div>
      <div
        slot="detailes"
        style:padding-right="47.5px"
        style:padding-bottom="0.5rem"
      >
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
  <div class="card">
    <ToggleContentCard width="100%">
      <div slot="content">
        <p>Выписать 50 новых слов в English Assistant</p>
      </div>
      <div
        slot="detailes"
        style:padding-right="47.5px"
        style:padding-bottom="0.5rem"
      >
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
  <div class="card">
    <ToggleContentCard width="100%">
      <div slot="content">
        <p>Выписать 50 новых слов в English Assistant</p>
      </div>
      <div
        slot="detailes"
        style:padding-right="47.5px"
        style:padding-bottom="0.5rem"
      >
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
</div>

<style>
  .card {
    margin-bottom: 0.06rem;
    justify-content: center;

    width: 525px;
  }

  .toggle-content-cards {
    display: flex;
    align-items: center; /* Центрируем карточки по горизонтали */
    flex-direction: column;
    margin-bottom: 0.25rem;
    padding-left: 0.66rem;
    padding-right: 0.18rem;
    box-sizing: border-box;
    width: 100vw;
  }

  @media (max-width: 550px) {
    .card {
      width: 100%;
    }
  }
</style>
