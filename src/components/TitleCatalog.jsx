function TitleCatalog({ name }) {
    return (
        <div className="mt-8 mb-4">
            <h1 className="text-[30px] text-center text-gray-500">
                Sản phẩm thuộc danh mục: <span className="text-black font-bold"> {name}</span>
            </h1>
        </div>
    );
}

export default TitleCatalog;
