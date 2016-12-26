<template>
    <aside class="tree-view">
        <nav class="project">
            <h2 class="tree-view__header project__name">
                <a href="#">{{ project.name }}</a>
            </h2>

            <ul class="project__nodes node-list">
                <li class="node-item"
                    v-for="node in project.nodes">
                    <a class="node-item__link" href="#"
                       :class="[ 
                           icon(node),
                           { 'icon-folder': node.is_directory }
                       ]">
                        <label class="node-item__name">{{ node.name }}</label>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
    export default {
        props: {
            project: Object
        },

        methods: {
            icon (node) {
                if (! node.filetype) {
                    return null;
                }

                return `icon-${node.filetype}`;
            }
        }
    }
</script>
