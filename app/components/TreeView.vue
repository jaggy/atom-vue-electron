<template>
    <aside class="tree-view">
        <nav class="project">
            <h2 class="tree-view__header project__name">
                {{ project.name }}
            </h2>

            <ul class="project__nodes node-list">
                <li class="node-item"
                    v-for="node in project.nodes"
                    :class="[ 
                        modifier(node),
                        { 'node-item--directory': node.is_directory }
                    ]">
                    <a class="node-item__link" href="#">
                        {{ node.name }}
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
            modifier (node) {
                let prefix = 'node-item'

                if (node.is_directory) {
                    return null;
                }

                return `${prefix}--${node.extension}`;
            }
        }
    }
</script>
