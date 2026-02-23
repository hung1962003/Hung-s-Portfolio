 {/* directionalLight is a light that comes from a direction  */}
          <directionalLight position={[1, 1, 1]} intensity={10}/>
          {/* ambientLight is a light that comes from all directions  */}
          <ambientLight intensity={1}/>
          {/* pointLight is a light that comes from a point  */}
          <pointLight position={[1, 1, 1]} intensity={10}/>
          {/* spotLight is a light that comes from a point and spreads out in a cone  */}
          <spotLight position={[1, 1, 1]} intensity={10}/>
          {/* hemisphereLight is a light that comes from a hemisphere DG CHAN TROI */}
          <hemisphereLight position={[1, 1, 1]} intensity={10}/>

| Thành phần | Vai trò                |
| ---------- | ---------------------- |
| useGLTF    | Load model             |
| nodes      | Geometry của từng phần |
| materials  | Vật liệu               |
| mesh       | Render từng phần       |
| group      | Gom tất cả lại         |

dom :cách trình duyệt biểu diễn HTML thành một cây đối tượng để JavaScript có thể thao tác.
react tự tạo ra virtual dom rồi cập nhật dom thật khi cần 

useRef :
Giữ tham chiếu (reference) đến DOM hoặc object 3D

Lưu giá trị mà không làm component re-render
Stale Closure :(capture) giá trị cũ của biến trong React và tiếp tục dùng giá trị đó, dù state đã thay đổi.
re-render theo cay