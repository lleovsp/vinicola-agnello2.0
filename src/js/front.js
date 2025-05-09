// Scroll Animation
document.addEventListener("DOMContentLoaded", () => {
    // Activate hero section
    setTimeout(() => {
      document.querySelector(".hero").classList.add("active")
    }, 100)
  
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    })
  
    // Back to top button
    const backToTopButton = document.querySelector(".back-to-top")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("active")
      } else {
        backToTopButton.classList.remove("active")
      }
    })
  
    // Scroll animations for elements
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        ".content-card, .product-card, .gallery-item, .contact-info, .contact-form, .testimonial-card, .info-card",
      )
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.classList.add("animate")
        }
      })
    }
  
    // Initial check
    animateOnScroll()
  
    // Check on scroll
    window.addEventListener("scroll", animateOnScroll)
  
    // Mobile menu functionality
    const mobileMenu = document.querySelector(".mobile-menu")
    const navList = document.querySelector(".nav-list")
    const navLinks = document.querySelectorAll(".nav-link")
  
    mobileMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
      navList.classList.toggle("active")
  
      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
    })
  
    // Close mobile menu when clicking on a link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navList.classList.contains("active")) {
          mobileMenu.click()
        }
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Initialize stock display
    updateAllStockDisplays()
  
    // Initialize shopping cart
    initializeCart()
  })
  
  // Add animation classes for mobile menu
  function animateMenuIcon() {
    const mobileMenu = document.querySelector(".mobile-menu")
    mobileMenu.classList.toggle("active")
  }
  
  // Product hover effects
  document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card")
  
    productCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        const btn = this.querySelector(".product-btn")
        if (btn) {
          btn.style.opacity = "1"
          btn.style.transform = "translateY(0)"
        }
      })
  
      card.addEventListener("mouseleave", function () {
        const btn = this.querySelector(".product-btn")
        if (btn) {
          btn.style.opacity = "0"
          btn.style.transform = "translateY(20px)"
        }
      })
    })
  })
  
  // Add active class to current nav item based on scroll position
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")
  
    let current = ""
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
  
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id")
      }
    })
  
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })
  
  // Update all stock displays
  function updateAllStockDisplays() {
    const stockCounts = document.querySelectorAll(".stock-count")
  
    stockCounts.forEach((stockCount) => {
      const stock = Number.parseInt(stockCount.dataset.stock)
  
      // Update stock color based on quantity
      if (stock <= 5) {
        stockCount.classList.add("low-stock")
      } else {
        stockCount.classList.remove("low-stock")
      }
    })
  }
  
  // Shopping Cart Functionality
  function initializeCart() {
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart")
  
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addToCart)
    })
  
    // Update quantity buttons
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("quantity-btn")) {
        updateCartItemQuantity(e.target)
      }
    })
  
    // Remove from cart buttons
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-item")) {
        removeFromCart(e.target)
      }
    })
  
    // Clear cart button
    const clearCartButton = document.getElementById("clear-cart")
    if (clearCartButton) {
      clearCartButton.addEventListener("click", clearCart)
    }
  
    // Checkout button
    const checkoutButton = document.getElementById("checkout")
    if (checkoutButton) {
      checkoutButton.addEventListener("click", checkout)
    }
  
    // Load cart from localStorage if available
    loadCart()
  }
  
  function addToCart(e) {
    e.preventDefault()
  
    const productCard = e.target.closest(".product-card")
    const productId = productCard.dataset.productId
    const productName = productCard.querySelector(".product-name").textContent
    const productPrice = productCard.querySelector(".product-price").textContent
    const stockCount = productCard.querySelector(".stock-count")
    const stockValue = Number.parseInt(stockCount.dataset.stock)
  
    // Check if item is in stock
    if (stockValue <= 0) {
      alert("Este produto está fora de estoque!")
      return
    }
  
    // Get cart from localStorage or create new one
    const cart = JSON.parse(localStorage.getItem("cart")) || []
  
    // Check if product already in cart
    const existingItem = cart.find((item) => item.id === productId)
  
    if (existingItem) {
      // Don't exceed available stock
      if (existingItem.quantity < stockValue) {
        existingItem.quantity += 1
      } else {
        alert("Não há mais estoque disponível para este produto!")
        return
      }
    } else {
      // Add new item to cart
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1,
      })
    }
  
    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart))
  
    // Update cart display
    updateCartDisplay()
  
    // Show confirmation
    alert(`${productName} adicionado ao carrinho!`)
  }
  
  function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items")
    const cartTotal = document.getElementById("cart-total")
    const cartCount = document.getElementById("cart-count")
  
    if (!cartItems || !cartTotal) return
  
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || []
  
    // Clear current display
    cartItems.innerHTML = ""
  
    if (cart.length === 0) {
      cartItems.innerHTML = "<p>Seu carrinho está vazio.</p>"
      cartTotal.textContent = "R$ 0,00"
      if (cartCount) cartCount.textContent = "0"
      return
    }
  
    // Calculate total
    let total = 0
    let count = 0
  
    // Add each item to the display
    cart.forEach((item) => {
      const itemPrice = Number.parseFloat(item.price.replace("R$ ", "").replace(",", "."))
      const itemTotal = itemPrice * item.quantity
      total += itemTotal
      count += item.quantity
  
      const itemElement = document.createElement("div")
      itemElement.className = "cart-item"
      itemElement.innerHTML = `
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>${item.price} x ${item.quantity}</p>
        </div>
        <div class="cart-item-actions">
          <button class="quantity-btn decrease" data-id="${item.id}">-</button>
          <span class="item-quantity">${item.quantity}</span>
          <button class="quantity-btn increase" data-id="${item.id}">+</button>
          <button class="remove-item" data-id="${item.id}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `
  
      cartItems.appendChild(itemElement)
    })
  
    // Update total
    cartTotal.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`
    if (cartCount) cartCount.textContent = count.toString()
  }
  
  function updateCartItemQuantity(button) {
    const productId = button.dataset.id
    const isDecrease = button.classList.contains("decrease")
  
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || []
  
    // Find the item
    const itemIndex = cart.findIndex((item) => item.id === productId)
  
    if (itemIndex === -1) return
  
    // Get the product card to check stock
    const productCard = document.querySelector(`.product-card[data-product-id="${productId}"]`)
    const stockCount = productCard ? productCard.querySelector(".stock-count") : null
    const stockValue = stockCount ? Number.parseInt(stockCount.dataset.stock) : 999
  
    if (isDecrease) {
      // Decrease quantity
      cart[itemIndex].quantity -= 1
  
      // Remove item if quantity is 0
      if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1)
      }
    } else {
      // Increase quantity (check stock)
      if (cart[itemIndex].quantity < stockValue) {
        cart[itemIndex].quantity += 1
      } else {
        alert("Não há mais estoque disponível para este produto!")
        return
      }
    }
  
    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart))
  
    // Update cart display
    updateCartDisplay()
  }
  
  function removeFromCart(button) {
    const productId = button.dataset.id
  
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || []
  
    // Remove the item
    cart = cart.filter((item) => item.id !== productId)
  
    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart))
  
    // Update cart display
    updateCartDisplay()
  }
  
  function clearCart() {
    // Clear cart in localStorage
    localStorage.removeItem("cart")
  
    // Update cart display
    updateCartDisplay()
  }
  
  function checkout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
  
    if (cart.length === 0) {
      alert("Seu carrinho está vazio!")
      return
    }
  
    // In a real application, this would redirect to a checkout page
    alert("Redirecionando para o checkout...")
  
    // For demo purposes, just clear the cart
    clearCart()
  }
  
  function loadCart() {
    // Update cart display on page load
    updateCartDisplay()
  }
  
  // Form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
      contactForm.reset()
    })
  }
  
  // Stock Management System
  function initializeStockSystem() {
    // Initialize stock display
    updateAllStockDisplays()
  
    // Admin panel toggle
    const adminToggle = document.querySelector(".admin-toggle")
    const adminPanel = document.querySelector(".admin-panel")
  
    if (adminToggle && adminPanel) {
      adminToggle.addEventListener("click", () => {
        adminPanel.classList.toggle("visible")
      })
    }
  
    // Admin login
    const adminLogin = document.getElementById("admin-login")
    const adminPassword = document.getElementById("admin-password")
  
    if (adminLogin && adminPassword) {
      adminLogin.addEventListener("click", () => {
        // Simple password check - in a real app, use proper authentication
        if (adminPassword.value === "admin123") {
          enableAdminMode()
          adminPanel.classList.remove("visible")
          alert("Modo administrador ativado!")
        } else {
          alert("Senha incorreta!")
        }
      })
    }
  
    // Stock update buttons
    document.addEventListener("click", (e) => {
      // Decrease stock button
      if (e.target.classList.contains("decrease-stock")) {
        const productCard = e.target.closest(".product-card")
        const stockCount = productCard.querySelector(".stock-count")
        const input = productCard.querySelector(".stock-input")
  
        const currentStock = Number.parseInt(stockCount.dataset.stock)
        const decreaseAmount = Number.parseInt(input.value) || 1
  
        if (currentStock >= decreaseAmount) {
          updateStock(productCard, currentStock - decreaseAmount)
        } else {
          alert("Estoque insuficiente!")
        }
      }
  
      // Increase stock button
      if (e.target.classList.contains("increase-stock")) {
        const productCard = e.target.closest(".product-card")
        const stockCount = productCard.querySelector(".stock-count")
        const input = productCard.querySelector(".stock-input")
  
        const currentStock = Number.parseInt(stockCount.dataset.stock)
        const increaseAmount = Number.parseInt(input.value) || 1
  
        updateStock(productCard, currentStock + increaseAmount)
      }
  
      // Update stock button
      if (e.target.classList.contains("update-stock")) {
        const productCard = e.target.closest(".product-card")
        const input = productCard.querySelector(".stock-input")
  
        const newStock = Number.parseInt(input.value)
        if (!isNaN(newStock) && newStock >= 0) {
          updateStock(productCard, newStock)
        } else {
          alert("Por favor, insira um valor válido!")
        }
      }
    })
  }
  
  // Update stock for a product
  function updateStock(productCard, newStock) {
    const stockCount = productCard.querySelector(".stock-count")
    const productId = productCard.dataset.productId
  
    // Update the display
    stockCount.textContent = newStock
    stockCount.dataset.stock = newStock
  
    // Update stock color based on quantity
    if (newStock <= 5) {
      stockCount.classList.add("low-stock")
    } else {
      stockCount.classList.remove("low-stock")
    }
  
    // In a real application, you would save this to a database
    console.log(`Updated stock for ${productId}: ${newStock}`)
  
    // You could also add an API call here to update the server
    // saveStockToServer(productId, newStock)
  }
  
  // Enable admin mode
  function enableAdminMode() {
    const adminControls = document.querySelectorAll(".admin-controls")
  
    adminControls.forEach((control) => {
      control.classList.add("visible")
    })
  
    // Store admin state in session storage
    sessionStorage.setItem("adminMode", "true")
  }
  
  // Check if admin mode was previously enabled
  document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("adminMode") === "true") {
      enableAdminMode()
    }
  })
  