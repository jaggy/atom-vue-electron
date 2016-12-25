<template>
    <aside class="sidebar">
        <nav>
            <h2>{{ project.name }}</h2>
            <ul>
                <li v-for="file in project.files">
                    <a href="#">{{ file.name }}</a>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
    export default {
        props: {
            project: Object
        }
    }
</script>
