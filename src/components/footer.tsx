export default function Footer() {
  return (
    <>
      <footer className="border-top p-4">
        <div className="copyright text-center text-sm text-muted">
          All rights reserved. Copyright
          © <script>
            document.write(new Date().getFullYear()) 
          </script>
          &nbsp;Donatello Peinture. Made with <a href="https://www.astro.build" className="text-secondary ms-1" target="_blank">Astro</a> and <a href="https://react.dev" className="text-secondary ms-1" target="_blank">React</a>.
        </div>
      </footer>
    </>
  );
}


