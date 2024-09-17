<template>
    <div class="main">
        <div class="mainHeader">
            <div class="title">
                <h2>provy</h2>
            </div>
            <div class="search bar">
                <input class="Pesquisar" type="button"> // onclick="/filter"
            </div>
        </div>
        <div class="mainBody">
            <h3>Encontre o prestador ideal</h3>
            <div class="Prestadores">
                //colocar os prestadores na tela aqui
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.mainHeader {
    display: inline;
}

.mainHeader .title{
    align-items:flex-start;
}

.mainHeader .title h2{
    color: #3498db;
    text-align: center;
}

.mainBody {
    display: block;
    align-items: center;
}

.mainBody h3 {
    color: #3498db;
    text-align: center;
}
</style>