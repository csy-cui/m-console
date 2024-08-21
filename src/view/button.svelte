<script>
    let offsetWidth = 0;
    let offsetHeight = 0;
    let x = 0;
    let y = 0;
    $: pageX = x - offsetWidth > 0 ? x - offsetWidth : 0;
    $: pageY = y - offsetHeight > 0 ? y - offsetHeight : 0;
    function render(node) {
        let down = false;
        offsetWidth = node.offsetWidth / 2;
        offsetHeight = node.offsetHeight / 2;
        x = window.innerWidth + offsetWidth - 150;
        y = window.innerHeight - offsetHeight;
        function start(ev) {
            if (ev.touches && ev.touches.length) {
                const touch = ev.touches[0];
                x = touch.pageX;
                y = touch.pageY;
                offsetWidth = touch.pageX - node.offsetLeft;
                offsetHeight = touch.pageY - node.offsetTop;
                down = true;
            }
        }
        function move(ev) {
            if (!down) {
                return;
            }
            if (ev.touches && ev.touches.length) {
                const touch = ev.touches[0];
                x = touch.pageX;
                y = touch.pageY;
            }
        }
        function end(ev) {
            down = false;
        }

        node.addEventListener("touchstart", start);
        node.addEventListener("touchmove", move);
        window.addEventListener("touchend", end);
        node.addEventListener("mousedown", start);
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", end);

        return {
            destroy() {
                node.removeEventListener("touchstart", start);
                node.removeEventListener("touchmove", move);
                window.removeEventListener("touchend", end);
                node.removeEventListener("mousedown", start);
                window.removeEventListener("mousemove", move);
                window.removeEventListener("mouseup", end);
            },
        };
    }
</script>

<div
    use:render
    style="top:{pageY}px;left:{pageX}px"
    class="m-console"
    id="_mConsole"
>
    mConsole
</div>

<style scoped>
    .m-console {
        width: 100px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(123, 149, 236);
        color: #fff;
        font-size: 14px;
        border-radius: 8px;
        position: fixed;
        z-index: 999999;
        left: calc(100% - 150px);
        top: calc(100% - 38px);
        cursor: pointer;
        user-select: none;
    }
</style>
