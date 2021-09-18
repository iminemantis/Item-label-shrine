class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `

        <div id="header">

            <a href="/item-label-shrine/index.html"><i class="fas fa-home"></i></a>

            <div class="links">
                
                <div class="drop">
                    <a href="product pages/peepy.html">peepys</a>
                    <div class="drop-cont">
                        <a href="product pages/peepy/cowpy.html">cowpy</a>
                        <a href="product pages/peepy/sheepy.html">sheepy</a>
                        <a href="product pages/peepy/fuzzpy.html">fuzzpy</a>
                        <a href="product pages/peepy/celebrity blue.html">celebrity blue</a>
                        <a href="product pages/peepy/cornpy.html">corndogpy</a>
                        <a href="product pages/peepy/lemonpy.html">lemonpy</a>
                        <a href="product pages/peepy/mistakepy.html">mistakepy</a>
                        <a href="product pages/peepy/pink.html">pinkpy</a>
                        <a href="product pages/peepy/mushroompy.html">mushroompy</a>
                        <a href="product pages/peepy/silverpy.html">silverpy</a>
                        <a href="product pages/peepy/goldenpy.html">goldpy</a>
                        <a href="product pages/peepy/emeraldpy.html">emeraldpy</a>
                    </div>
                </div>

                <div class="drop">
                    <a href="#">sucklets</a>
                    <div class="drop-cont">
                        <a href="#">sucklet</a>
                        <a href="#">super sucklet</a>
                        <a href="#">dark sucklet</a>
                        <a href="#">poision sucklet</a>
                        <a href="#">moss sucklet</a>
                    </div>
                </div>

                <div class="drop">
                    <a href="#">oui ouis</a>
                    <div class="drop-cont">
                        <a href="#">cow</a>
                        <a href="#">stinker</a>
                        <a href="#">lemon</a>
                        <a href="#">sunny day</a>
                        <a href="#">gold</a>
                    </div>
                </div>

                <div class="drop">
                    <a href="#">dinkle/moley</a>
                    <div class="drop-cont">
                        <a href="#">dinkle</a>
                        <a href="#">soft dinkle</a>
                        <a href="#">moley</a>
                        <a href="#">purple moley</a>
                    </div>
                </div>

                <div class="drop">
                    <a href="#">other softies</a>
                    <div class="drop-cont">
                        <a href="#">bad guy</a>
                        <a href="#">doughnuts</a>
                        <a href="#">fishcar</a>
                        <a href="#">fishcopter</a>
                        <a href="#">brungus</a>
                    </div>
                </div>

            </div>
            <div id="theme-tog">
                <label class="switch">
                    <input type="checkbox" onclick="toggleTheme()" id="b01" checked="true">
                    <span class="slider"></span>
                </label>
            </div>

        </div>
        
        `
    }
}

customElements.define("my-header", Header);