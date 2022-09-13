<template>
  <form action="http://localhost/wabisabi/src/php/submit.php">
    <div class="mb-3">
      <label for="fullname" class="form-label">Full name</label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        class="form-control"
        aria-describedby="fullname__help"
      />
      <div id="fullname__help" class="form-text">
        Your name should be at least 3 characters long, and must not contain
        numbers, special characters, or emoji.
      </div>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        name="email"
        aria-describedby="email__help"
      />
      <div id="email__help" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Phone number</label>
      <input
        type="text"
        id="phone"
        name="phone"
        class="form-control"
        aria-describedby="phone__help"
      />
      <div id="phone__help" class="form-text">
        Your phone should be at least contain 8 numbers, and must not contain
        alphabet, emoji, special characters with exception of "( ) -".
      </div>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="agreement" />
      <label class="form-check-label" for="agreement">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<script>
export default {};
</script>