<template>
  <div class="car-full">
    <h2>Car name: {{ name }}</h2>
    <h3>Car year: {{ age }}</h3>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet aperiam aspernatur commodi deserunt doloribus, dolorum eos exercitationem fuga libero maxime nulla obcaecati odit pariatur perspiciatis possimus, quidem repellat rerum sunt vel veritatis voluptate? Aliquid autem blanditiis cum ducimus earum harum molestiae placeat voluptatibus. Ab aspernatur, aut corporis dignissimos, dolor dolorum ducimus error facilis id incidunt labore praesentium quasi repudiandae sed unde? Aliquam at atque consectetur cum dolorem eveniet excepturi laborum, odio possimus, quae quidem saepe tenetur veritatis vero vitae? Aliquid aperiam asperiores at dolor ducimus eum, fugiat in minus nam nihil numquam, reprehenderit repudiandae sapiente sed, sunt suscipit tenetur! Ad deleniti eveniet id iste magni maiores minima, nostrum, perspiciatis possimus velit vero vitae, voluptatem? Adipisci aliquid architecto assumenda at atque expedita iusto modi nobis nostrum obcaecati, praesentium, quas tenetur totam unde velit veritatis vero, vitae voluptate. Accusantium corporis ducimus error et eum ex expedita impedit magnam maiores, nam omnis quae qui quo sapiente sint sunt tempora ullam unde ut vero. Ad aperiam cum dolore recusandae suscipit, tenetur. Alias autem cupiditate porro quam tenetur? Architecto assumenda cum delectus distinctio doloribus ea est facilis id illo illum impedit in mollitia nemo non obcaecati officiis quaerat quam quas quasi repellat repellendus repudiandae suscipit tempora tempore velit, voluptates voluptatum! A ab animi assumenda, doloremque ducimus eius enim expedita fugiat laborum libero nisi nobis placeat quae, rem repellat sed tempora tempore vel! Ab dolorum ducimus explicabo harum natus nulla repellendus suscipit tempora voluptate. Atque deserunt eaque earum impedit recusandae vel voluptatum? Adipisci asperiores assumenda delectus earum ipsam, magnam quasi unde. Blanditiis rerum tempora velit. Accusantium ad adipisci atque deserunt enim, error est eum expedita id ipsum odio quae saepe voluptas. A ab accusamus aliquid aperiam architecto, consectetur enim fugiat harum illum ipsa laudantium minima molestias obcaecati odio omnis, quae quasi, quibusdam quisquam rem?</p>
    <h3 class="scroll" id="scroll">Scroll block</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet aperiam aspernatur commodi deserunt doloribus, dolorum eos exercitationem fuga libero maxime nulla obcaecati odit pariatur perspiciatis possimus, quidem repellat rerum sunt vel veritatis voluptate? Aliquid autem blanditiis cum ducimus earum harum molestiae placeat voluptatibus. Ab aspernatur, aut corporis dignissimos, dolor dolorum ducimus error facilis id incidunt labore praesentium quasi repudiandae sed unde? Aliquam at atque consectetur cum dolorem eveniet excepturi laborum, odio possimus, quae quidem saepe tenetur veritatis vero vitae? Aliquid aperiam asperiores at dolor ducimus eum, fugiat in minus nam nihil numquam, reprehenderit repudiandae sapiente sed, sunt suscipit tenetur! Ad deleniti eveniet id iste magni maiores minima, nostrum, perspiciatis possimus velit vero vitae, voluptatem? Adipisci aliquid architecto assumenda at atque expedita iusto modi nobis nostrum obcaecati, praesentium, quas tenetur totam unde velit veritatis vero, vitae voluptate. Accusantium corporis ducimus error et eum ex expedita impedit magnam maiores, nam omnis quae qui quo sapiente sint sunt tempora ullam unde ut vero. Ad aperiam cum dolore recusandae suscipit, tenetur. Alias autem cupiditate porro quam tenetur? Architecto assumenda cum delectus distinctio doloribus ea est facilis id illo illum impedit in mollitia nemo non obcaecati officiis quaerat quam quas quasi repellat repellendus repudiandae suscipit tempora tempore velit, voluptates voluptatum! A ab animi assumenda, doloremque ducimus eius enim expedita fugiat laborum libero nisi nobis placeat quae, rem repellat sed tempora tempore vel! Ab dolorum ducimus explicabo harum natus nulla repellendus suscipit tempora voluptate. Atque deserunt eaque earum impedit recusandae vel voluptatum? Adipisci asperiores assumenda delectus earum ipsam, magnam quasi unde. Blanditiis rerum tempora velit. Accusantium ad adipisci atque deserunt enim, error est eum expedita id ipsum odio quae saepe voluptas. A ab accusamus aliquid aperiam architecto, consectetur enim fugiat harum illum ipsa laudantium minima molestias obcaecati odio omnis, quae quasi, quibusdam quisquam rem?</p>
  </div>
</template>

<script>
export default {
  computed: {
    name () {
      return this.$route.query.name
    },
    age () {
      return this.$route.query.age
    }
  },
  beforeRouteEnter (to, fromR, next) {
    const res = 2
    if (res === 3) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style scoped>
.car-full {
  margin: 8rem 4rem;
}
.scroll {
  border: 1px solid red;
}
</style>
