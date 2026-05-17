/* ================================
   CONTACTO PAGE - Formulario de contacto
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});

function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        // Obtener valores del formulario
        const formData = {
            nombre: document.getElementById('nombre').value.trim(),
            email: document.getElementById('email').value.trim(),
            asunto: document.getElementById('asunto').value,
            mensaje: document.getElementById('mensaje').value.trim()
        };
        
        // Validaciones
        if (!validateForm(formData)) {
            e.preventDefault();
            return;
        }
        
        // Mostrar estado de envio
        const btn = form.querySelector('button[type="submit"]');
        btn.innerHTML = '<span>Enviando...</span>';
        btn.disabled = true;
        
        // El formulario se enviara a Formspree automaticamente
    });
    
    // Validacion en tiempo real
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Quitar estado de error al escribir
            this.classList.remove('error');
            const errorMsg = this.parentElement.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });
}

function validateForm(data) {
    let isValid = true;
    
    // Validar nombre
    if (!data.nombre || data.nombre.length < 2) {
        showFieldError('nombre', 'El nombre debe tener al menos 2 caracteres');
        isValid = false;
    }
    
    // Validar email
    if (!data.email || !isValidEmail(data.email)) {
        showFieldError('email', 'Por favor ingresa un email valido');
        isValid = false;
    }
    
    // Validar asunto
    if (!data.asunto) {
        showFieldError('asunto', 'Por favor selecciona un asunto');
        isValid = false;
    }
    
    // Validar mensaje
    if (!data.mensaje || data.mensaje.length < 10) {
        showFieldError('mensaje', 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const name = field.name || field.id;
    
    let error = '';
    
    switch (name) {
        case 'nombre':
            if (!value || value.length < 2) {
                error = 'El nombre debe tener al menos 2 caracteres';
            }
            break;
        case 'email':
            if (!value || !isValidEmail(value)) {
                error = 'Por favor ingresa un email valido';
            }
            break;
        case 'asunto':
            if (!value) {
                error = 'Por favor selecciona un asunto';
            }
            break;
        case 'mensaje':
            if (!value || value.length < 10) {
                error = 'El mensaje debe tener al menos 10 caracteres';
            }
            break;
    }
    
    if (error) {
        showFieldError(name, error);
        return false;
    }
    
    return true;
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    // Agregar clase de error
    field.classList.add('error');
    
    // Buscar o crear mensaje de error
    let errorMsg = field.parentElement.querySelector('.error-message');
    if (!errorMsg) {
        errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        field.parentElement.appendChild(errorMsg);
    }
    
    errorMsg.textContent = message;
    
    // Agregar estilos de error si no existen
    if (!document.getElementById('error-styles')) {
        const styles = document.createElement('style');
        styles.id = 'error-styles';
        styles.textContent = `
            .form-input.error {
                border-color: var(--error) !important;
            }
            .error-message {
                display: block;
                color: var(--error);
                font-size: 0.8rem;
                margin-top: 0.25rem;
            }
        `;
        document.head.appendChild(styles);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
