const ModalZoom = ({ foto }) => {
    return (
        <>
            <dialog open={!!foto}>
                <p>Ola</p>
                <form method="dialog">
                    <button>OK</button>
                </form>
            </dialog>
        </>
    )
}

export default ModalZoom;