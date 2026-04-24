<script lang="ts">
  import { Button } from '$lib/components/ui/button';
</script>

<div class="flex flex-col gap-2.5">
  <form method="POST" action="?/google">
    <Button type="submit" variant="outline" class="w-full justify-start gap-3">
      <img
        src="/svg/google.svg"
        width="18"
        height="18"
        alt=""
        aria-hidden="true"
      />
      Continuar con Google
    </Button>
  </form>

  <form method="POST" action="?/facebook">
    <Button type="submit" variant="outline" class="w-full justify-start gap-3">
      <img
        src="/svg/facebook.svg"
        width="18"
        height="18"
        alt=""
        aria-hidden="true"
      />
      Continuar con Facebook
    </Button>
  </form>
</div>
