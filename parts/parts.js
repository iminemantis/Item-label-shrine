class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `

        <div id="header">
        <a href="/Item-label-shrine/"><i class="fas fa-home"></i></a>

        <div class="links pc">
            <div class="drop">
                <a href="/Item-label-shrine/product pages/peepy.html">peepys</a>
                <div class="drop-cont">
                    <a href="#">cowpy</a>
                    <a href="#">sheepy</a>
                    <a href="#">fuzzpy</a>
                    <a href="/Item-label-shrine/product pages/peepy/celebrity blue.html">celebrity blue</a>
                    <a href="#">corndogpy</a>
                    <a href="#">lemonpy</a>
                    <a href="#">mistakepy</a>
                    <a href="#">pinkpy</a>
                    <a href="#">mushroompy</a>
                    <a href="#">silverpy</a>
                    <a href="#">goldpy</a>
                    <a href="#">emeraldpy</a>
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

        <div class="links mobile">
            <div class="ma">
                <label>
                    <button class="accord" onclick="accord()"></button>
                    <span>&#x2630</span>
                </label>
            </div>
            <div id="mbl">
                <a href="/Item-label-shrine/product pages/peepy.html">peepy</a>
                <a href="#">sucklets</a>
                <a href="#">oui oui</a>
                <a href="#">dinkle/moley</a>
                <a href="#">other softies</a>
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