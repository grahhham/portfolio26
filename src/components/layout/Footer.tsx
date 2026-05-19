export function Footer() {
  return ( 
    <footer id="footer" className="max-box">
      Graham Cruickshank &copy; 2026 {new Date().getFullYear() == 2026 ? "" : " - "+new Date().getFullYear()}
    </footer>
  );
}