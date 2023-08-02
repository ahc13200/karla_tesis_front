<script lang="ts" setup>
    import {ref} from 'vue'

    let file = ref()
    let content = ref()
    const doc = ref()

    const readFile = () =>{
        file.value = doc.value.files[0];
        const reader = new FileReader();
        if (file.value.name.includes(".xpress")) {
            reader.onload = (res) => {
                content.value = res.target.result;
            };
            reader.onerror = (err) => console.log(err);
            reader.readAsText(file.value);
        }
        else {
            content.value = "check the console for file output";
            reader.onload = (res) => {
                console.log(res.target.result);
            };
            reader.onerror = (err) => console.log(err);
            reader.readAsText(file.value);
        }
    }
</script>

<template>
    <div style="border-style:solid">
        <input type="file" ref="doc" @change="readFile()"/>
        <div>{{content}}</div>
    </div>
</template>

<style scoped>

</style>