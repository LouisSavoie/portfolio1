let eventBus = new Vue();

Vue.component('index', {
    template: `
    <div>
        <div id="pantry-area" type="button" v-on:click="setState('pantry')"></div>
        <div id="freezer-area" type="button" v-on:click="setState('freezer')"><p id="cold-boy">Cold Boy</p></div>
        <div id="fridge-area" type="button" v-on:click="setState('fridge')">
            <div id="groceries-area" type="button" v-on:click.stop="setState('groceries')"></div>
        </div>
    </div>
    `,
    methods: {
        setState(state) {
            eventBus.$emit('set-state', state);
        }
    }
});

Vue.component('fridge', {
    template: `
        <div class="component-container" id="fridge-container">
            
            <i class="fas fa-reply" type="button" v-on:click="setState('index')"></i>
            <h2>Fridge</h2>
            
            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
                <p>{{ error }}</p>
                <input type="text" v-model="newItem" placeholder="Add New Item">
            </form>
            <ul>
                <li v-for="item in list">
                    {{ item }}
                    <i class="fas fa-trash-alt" v-on:click="remove(item)"></i>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            list: [],
            newItem: null,
            error: null
        }
    },
    mounted() {
        if (localStorage.getItem('fridge')) {
            try {
              this.list = JSON.parse(localStorage.getItem('fridge'));
            } catch(e) {
              localStorage.removeItem('fridge');
            }
          }
    },
    methods: {
        add(item) {
            if (this.newItem) {
                this.list.push(item);
                this.newItem = null;
                this.error = null;
                this.save();
            }
            else {
                this.error = "New Item is empty!";
            }
        },
        remove(item) {
            let index = this.list.indexOf(item);
            this.list.splice(index, 1);
            this.save();
        },
        save() {
            const parsed = JSON.stringify(this.list);
            localStorage.setItem('fridge', parsed);
        },
        setState(state) {
            eventBus.$emit('set-state', state);
        }
    }
});

Vue.component('freezer', {
    template: `
        <div class="component-container" id="freezer-container">

            <i class="fas fa-reply" type="button" v-on:click="setState('index')"></i>
            <h2>Freezer</h2>

            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
                <p>{{ error }}</p>
                <input type="text" v-model="newItem" placeholder="Add New Item">
            </form>

            <ul>
                <li v-for="item in list">
                    {{ item }}
                    <i class="fas fa-trash-alt" v-on:click="remove(item)"></i>
                </li>
            </ul>

        </div>
    `,
    data() {
        return {
            list: [],
            newItem: null,
            error: null
        }
    },
    mounted() {
        if (localStorage.getItem('freezer')) {
            try {
              this.list = JSON.parse(localStorage.getItem('freezer'));
            } catch(e) {
              localStorage.removeItem('freezer');
            }
          }
    },
    methods: {
        add(item) {
            if (this.newItem) {
                this.list.push(item);
                this.newItem = null;
                this.error = null;
                this.save();
            }
            else {
                this.error = "New Item is empty!";
            }
        },
        remove(item) {
            let index = this.list.indexOf(item);
            this.list.splice(index, 1);
            this.save();
        },
        save() {
            const parsed = JSON.stringify(this.list);
            localStorage.setItem('freezer', parsed);
        },
        setState(state) {
            eventBus.$emit('set-state', state);
        }
    }
});

Vue.component('pantry', {
    template: `
        <div class="component-container" id="pantry-container">

            <i class="fas fa-reply" type="button" v-on:click="setState('index')"></i>
            <h2>Pantry</h2>

            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
                <p>{{ error }}</p>
                <input type="text" v-model="newItem" placeholder="Add New Item">
            </form>

            <ul>
                <li v-for="item in list">
                    {{ item }}
                    <i class="fas fa-trash-alt" v-on:click="remove(item)"></i>
                </li>
            </ul>

        </div>
    `,
    data() {
        return {
            list: [],
            newItem: null,
            error: null
        }
    },
    mounted() {
        if (localStorage.getItem('pantry')) {
            try {
              this.list = JSON.parse(localStorage.getItem('pantry'));
            } catch(e) {
              localStorage.removeItem('pantry');
            }
          }
    },
    methods: {
        add(item) {
            if (this.newItem) {
                this.list.push(item);
                this.newItem = null;
                this.error = null;
                this.save();
            }
            else {
                this.error = "New Item is empty!";
            }
        },
        remove(item) {
            let index = this.list.indexOf(item);
            this.list.splice(index, 1);
            this.save();
        },
        save() {
            const parsed = JSON.stringify(this.list);
            localStorage.setItem('pantry', parsed);
        },
        setState(state) {
            eventBus.$emit('set-state', state);
        }
    }
});

Vue.component('groceries', {
    template: `
        <div class="component-container" id="groceries-container">

            <i class="fas fa-reply" type="button" v-on:click="setState('index')"></i>
            <h2>Groceries</h2>

            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
                <p>{{ error }}</p>
                <input type="text" v-model="newItem" placeholder="Add New Item">
            </form>

            <ul>
                <li v-for="item in list">
                    {{ item }}
                    <i class="fas fa-trash-alt" v-on:click="remove(item)"></i>
                </li>
            </ul>

        </div>
    `,
    data() {
        return {
            list: [],
            newItem: null,
            error: null
        }
    },
    mounted() {
        if (localStorage.getItem('groceries')) {
            try {
              this.list = JSON.parse(localStorage.getItem('groceries'));
            } catch(e) {
              localStorage.removeItem('groceries');
            }
          }
    },
    methods: {
        add(item) {
            if (this.newItem) {
                this.list.push(item);
                this.newItem = null;
                this.error = null;
                this.save();
            }
            else {
                this.error = "New Item is empty!";
            }
        },
        remove(item) {
            let index = this.list.indexOf(item);
            this.list.splice(index, 1);
            this.save();
        },
        save() {
            const parsed = JSON.stringify(this.list);
            localStorage.setItem('groceries', parsed);
        },
        setState(state) {
            eventBus.$emit('set-state', state);
        }
    }
});

let app = new Vue({
    el: '#app',
    data: {
        state: 'index'
    },
    methods: {
        
    },
    mounted() {
        eventBus.$on('set-state', state => {
            this.state = state;
        });
    }
});