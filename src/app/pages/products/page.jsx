import Image from 'next/image';
import React from 'react';

const Products = async () => {
    const products = [
        {
            "id": 1,
            "title": "Quantum Logic Processor",
            "slug": "quantum-logic-processor-q42",
            "category": "CPU",
            "type": "CPU",
            "parent": "CPU",
            "children": [],
            "tags": [
                "high-performance",
                "gaming"
            ],
            "description": "Next-gen processor for extreme computing needs. Optimized for gaming and complex simulations.",
            "images": [
                "https://i.ibb.co/ccDBpDfC/Quantum-Logic-Processor.png",
                "https://i.ibb.co/ccDBpDfC/Quantum-Logic-Processor.png"
            ],
            "thumb": "https://i.ibb.co/ccDBpDfC/Quantum-Logic-Processor.png",
            "sku": "QLP-7890-AB",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 1299.99,
            "originalPrice": 1599.99,
            "discount": 18,
            "quantity": 25,
            "stock": 80,
            "createdAt": "2024-12-01T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 2,
            "title": "AeroCool 3000 CPU Cooler",
            "slug": "aerocool-3000-cpu-cooler-ac3k",
            "category": "Cooler",
            "type": "Cooling System",
            "parent": "CPU",
            "children": [],
            "tags": [
                "liquid-cooling",
                "silent"
            ],
            "description": "Efficient liquid cooling system for optimal CPU temperature management. Ultra-quiet operation.",
            "images": [
                "https://i.ibb.co/VYb5Xyf6/Aero-Cool-3000-CPU-Cooler.png",
                "https://i.ibb.co/VYb5Xyf6/Aero-Cool-3000-CPU-Cooler.png"
            ],
            "thumb": "https://i.ibb.co/VYb5Xyf6/Aero-Cool-3000-CPU-Cooler.png",
            "sku": "ACC-3000-XY",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 189.50,
            "originalPrice": 210.00,
            "discount": 10,
            "quantity": 50,
            "stock": 120,
            "createdAt": "2025-01-15T09:30:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 3,
            "title": "Titan RTX 4090 GPU",
            "slug": "titan-rtx-4090-gpu-trtx4090",
            "category": "GPU",
            "type": "Graphics Card",
            "parent": "GPU",
            "children": [],
            "tags": [
                "4k-gaming",
                "deep-learning"
            ],
            "description": "Unleash ultimate graphics performance with the Titan RTX 4090. Perfect for pro gamers and AI developers.",
            "images": [
                "https://i.ibb.co/d4ZXCX4h/Titan-RTX-4090-GPU.png",
                "https://i.ibb.co/d4ZXCX4h/Titan-RTX-4090-GPU.png"
            ],
            "thumb": "https://i.ibb.co/d4ZXCX4h/Titan-RTX-4090-GPU.png",
            "sku": "TRTX-4090-ZX",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 2499.00,
            "originalPrice": 2999.00,
            "discount": 16,
            "quantity": 15,
            "stock": 40,
            "createdAt": "2024-11-20T14:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 4,
            "title": "HyperX Fury DDR5 64GB RAM",
            "slug": "hyperx-fury-ddr5-64gb-ram-hxfrd564",
            "category": "RAM",
            "type": "Memory",
            "parent": "RAM",
            "children": [],
            "tags": [
                "high-speed",
                "gaming-ram"
            ],
            "description": "Boost your system's performance with HyperX Fury DDR5 RAM. Ideal for demanding applications and gaming.",
            "images": [
                "https://i.ibb.co/27QxR1rD/Hyper-X-Fury-DDR5-64-GB.jpg",
                "https://i.ibb.co/27QxR1rD/Hyper-X-Fury-DDR5-64-GB.jpg"
            ],
            "thumb": "https://i.ibb.co/27QxR1rD/Hyper-X-Fury-DDR5-64-GB.jpg",
            "sku": "HXF-DDR5-64",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 349.99,
            "originalPrice": 399.99,
            "discount": 12,
            "quantity": 30,
            "stock": 90,
            "createdAt": "2025-02-10T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 5,
            "title": "Samsung 990 Pro 2TB NVMe SSD",
            "slug": "samsung-990-pro-2tb-nvme-ssd-sm990p2tb",
            "category": "Storage",
            "type": "SSD",
            "parent": "Storage",
            "children": [],
            "tags": [
                "ultra-fast",
                "nvme"
            ],
            "description": "Experience lightning-fast data transfer with Samsung 990 Pro NVMe SSD. Perfect for OS and game loading.",
            "images": [
                "https://i.ibb.co/B5P49F6W/Samsung-990-Pro-2-TB-NVMe-SSD.webp",
                "https://i.ibb.co/B5P49F6W/Samsung-990-Pro-2-TB-NVMe-SSD.webp"
            ],
            "thumb": "https://i.ibb.co/B5P49F6W/Samsung-990-Pro-2-TB-NVMe-SSD.webp",
            "sku": "SMG-990P-2T",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 279.00,
            "originalPrice": 329.00,
            "discount": 15,
            "quantity": 40,
            "stock": 100,
            "createdAt": "2024-10-05T16:30:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 6,
            "title": "ASUS ROG Strix Z790-E Gaming Motherboard",
            "slug": "asus-rog-strix-z790-e-gaming-motherboard-arz790e",
            "category": "Motherboard",
            "type": "Motherboard",
            "parent": "Motherboard",
            "children": [],
            "tags": [
                "gaming",
                "intel-compatible"
            ],
            "description": "High-performance motherboard for Intel CPUs. Designed for extreme gaming and overclocking.",
            "images": [
                "https://i.ibb.co/WWYkYgzN/ASUS-ROG-Strix-Z790-E-Gaming-Motherboard.png",
                "https://i.ibb.co/WWYkYgzN/ASUS-ROG-Strix-Z790-E-Gaming-Motherboard.png"
            ],
            "thumb": "https://i.ibb.co/WWYkYgzN/ASUS-ROG-Strix-Z790-E-Gaming-Motherboard.png",
            "sku": "ASZ-790E-GM",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 429.00,
            "originalPrice": 479.00,
            "discount": 10,
            "quantity": 20,
            "stock": 60,
            "createdAt": "2025-03-01T08:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 7,
            "title": "Corsair RM1000e Power Supply",
            "slug": "corsair-rm1000e-power-supply-crm1000e",
            "category": "Power Supply",
            "type": "PSU",
            "parent": "Power Supply",
            "children": [],
            "tags": [
                "modular",
                "80plus-gold"
            ],
            "description": "Fully modular 1000W power supply with 80 PLUS Gold efficiency. Reliable power for high-end builds.",
            "images": [
                "https://i.ibb.co/23PyN276/Corsair-RM1000e-Power-Supply.webp",
                "https://i.ibb.co/23PyN276/Corsair-RM1000e-Power-Supply.webp"
            ],
            "thumb": "https://i.ibb.co/23PyN276/Corsair-RM1000e-Power-Supply.webp",
            "sku": "CSR-RM1K-E",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 179.99,
            "originalPrice": 209.99,
            "discount": 14,
            "quantity": 35,
            "stock": 75,
            "createdAt": "2025-01-20T12:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 8,
            "title": "Lian Li O11 Dynamic EVO Case",
            "slug": "lian-li-o11-dynamic-evo-case-llo11devo",
            "category": "PC Case",
            "type": "Case",
            "parent": "PC Case",
            "children": [],
            "tags": [
                "mid-tower",
                "tempered-glass"
            ],
            "description": "Stylish mid-tower case with excellent airflow and tempered glass panels for showcasing your build.",
            "images": [
                "https://i.ibb.co/pv0XTmwT/Lian-Li-O11-Dynamic-EVO-Case.jpg",
                "https://i.ibb.co/pv0XTmwT/Lian-Li-O11-Dynamic-EVO-Case.jpg"
            ],
            "thumb": "https://i.ibb.co/pv0XTmwT/Lian-Li-O11-Dynamic-EVO-Case.jpg",
            "sku": "LLI-O11D-EV",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 169.00,
            "originalPrice": 189.00,
            "discount": 10,
            "quantity": 28,
            "stock": 65,
            "createdAt": "2024-12-25T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 9,
            "title": "Dell Alienware AW3423DWF QD-OLED Monitor",
            "slug": "dell-alienware-aw3423dwf-qd-oled-monitor-daw3423dwf",
            "category": "Monitor",
            "type": "Display",
            "parent": "Monitor",
            "children": [],
            "tags": [
                "ultrawide",
                "oled",
                "gaming-monitor"
            ],
            "description": "Immersive ultrawide QD-OLED gaming monitor for unparalleled visual experience.",
            "images": [
                "https://i.ibb.co/z9sX1Sy/Dell-Alienware-AW3423-DWF-QD-OLED-Monitor.webp",
                "https://i.ibb.co/z9sX1Sy/Dell-Alienware-AW3423-DWF-QD-OLED-Monitor.webp"
            ],
            "thumb": "https://i.ibb.co/z9sX1Sy/Dell-Alienware-AW3423-DWF-QD-OLED-Monitor.webp",
            "sku": "DEL-AW3423-DWF",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 999.00,
            "originalPrice": 1199.00,
            "discount": 17,
            "quantity": 10,
            "stock": 30,
            "createdAt": "2024-11-10T15:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 10,
            "title": "Logitech G Pro X Superlight Wireless Mouse",
            "slug": "logitech-g-pro-x-superlight-wireless-mouse-lgproxsl",
            "category": "Peripherals",
            "type": "Mouse",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "wireless",
                "gaming-mouse",
                "lightweight"
            ],
            "description": "Ultra-lightweight wireless gaming mouse for competitive play. Precision and speed redefined.",
            "images": [
                "https://i.ibb.co/8n2PxfRy/Logitech-G-Pro-X-Superlight-Wireless-Mouse.webp",
                "https://i.ibb.co/8n2PxfRy/Logitech-G-Pro-X-Superlight-Wireless-Mouse.webp"
            ],
            "thumb": "https://i.ibb.co/8n2PxfRy/Logitech-G-Pro-X-Superlight-Wireless-Mouse.webp",
            "sku": "LOG-GPX-SL",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 139.99,
            "originalPrice": 159.99,
            "discount": 12,
            "quantity": 55,
            "stock": 150,
            "createdAt": "2025-02-20T10:30:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 11,
            "title": "Keychron Q2 QMK Custom Keyboard",
            "slug": "keychron-q2-qmk-custom-keyboard-kcq2qmk",
            "category": "Peripherals",
            "type": "Keyboard",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "mechanical",
                "customizable"
            ],
            "description": "Premium custom mechanical keyboard with QMK/VIA support. Fully customizable for your typing needs.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=11",
            "sku": "KCH-Q2-QMK",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 189.00,
            "originalPrice": 220.00,
            "discount": 14,
            "quantity": 22,
            "stock": 50,
            "createdAt": "2024-12-15T13:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 12,
            "title": "Elgato Wave:3 USB Microphone",
            "slug": "elgato-wave3-usb-microphone-ewave3",
            "category": "Peripherals",
            "type": "Microphone",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "streaming",
                "condenser"
            ],
            "description": "Professional-grade USB condenser microphone for streaming, podcasting, and content creation.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=12",
            "sku": "ELG-WAVE3-US",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 149.99,
            "originalPrice": 169.99,
            "discount": 11,
            "quantity": 38,
            "stock": 85,
            "createdAt": "2025-01-01T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 13,
            "title": "Sony WH-1000XM5 Noise-Cancelling Headphones",
            "slug": "sony-wh-1000xm5-noise-cancelling-headphones-swh1000xm5",
            "category": "Audio",
            "type": "Headphones",
            "parent": "Audio",
            "children": [],
            "tags": [
                "bluetooth",
                "noise-cancelling"
            ],
            "description": "Industry-leading noise cancellation and superb sound quality for an immersive audio experience.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=13",
            "sku": "SON-WH1KM5",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 329.00,
            "originalPrice": 380.00,
            "discount": 13,
            "quantity": 25,
            "stock": 70,
            "createdAt": "2024-11-28T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 14,
            "title": "Creative Pebble V3 USB-C Speakers",
            "slug": "creative-pebble-v3-usb-c-speakers-cpv3",
            "category": "Audio",
            "type": "Speakers",
            "parent": "Audio",
            "children": [],
            "tags": [
                "compact",
                "usb-c"
            ],
            "description": "Compact and powerful USB-C powered desktop speakers with impressive audio clarity.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=14",
            "sku": "CRE-PBLV3-USBC",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 39.99,
            "originalPrice": 45.00,
            "discount": 11,
            "quantity": 60,
            "stock": 180,
            "createdAt": "2025-03-10T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 15,
            "title": "Netgear Nighthawk AX12 Wi-Fi 6 Router",
            "slug": "netgear-nighthawk-ax12-wifi-6-router-nnax12",
            "category": "Networking",
            "type": "Router",
            "parent": "Networking",
            "children": [],
            "tags": [
                "wi-fi-6",
                "high-speed"
            ],
            "description": "Next-generation Wi-Fi 6 router for blazing-fast internet speeds and seamless connectivity.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=15",
            "sku": "NET-NHWK-AX12",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 289.00,
            "originalPrice": 340.00,
            "discount": 15,
            "quantity": 18,
            "stock": 55,
            "createdAt": "2024-12-05T14:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 16,
            "title": "TP-Link TL-WA850RE Wi-Fi Range Extender",
            "slug": "tp-link-tl-wa850re-wifi-range-extender-tpl850re",
            "category": "Networking",
            "type": "Range Extender",
            "parent": "Networking",
            "children": [],
            "tags": [
                "easy-setup",
                "signal-boost"
            ],
            "description": "Extend your Wi-Fi coverage to eliminate dead zones. Simple setup for instant signal boost.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=16",
            "sku": "TPL-WA850RE",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 25.99,
            "originalPrice": 29.99,
            "discount": 13,
            "quantity": 70,
            "stock": 200,
            "createdAt": "2025-04-01T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 17,
            "title": "Microsoft Windows 11 Pro OEM",
            "slug": "microsoft-windows-11-pro-oem-mw11po",
            "category": "Software",
            "type": "Operating System",
            "parent": "Software",
            "children": [],
            "tags": [
                "operating-system",
                "professional"
            ],
            "description": "The latest Windows operating system for productivity and creativity. Professional edition.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=17",
            "sku": "MSW-11P-OEM",
            "unit": "license",
            "status": "active",
            "flashSale": true,
            "currentPrice": 149.00,
            "originalPrice": 199.00,
            "discount": 25,
            "quantity": 50,
            "stock": 150,
            "createdAt": "2024-10-20T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 18,
            "title": "Adobe Creative Cloud Annual Subscription",
            "slug": "adobe-creative-cloud-annual-subscription-accas",
            "category": "Software",
            "type": "Creative Suite",
            "parent": "Software",
            "children": [],
            "tags": [
                "design",
                "photo-editing",
                "video-editing"
            ],
            "description": "Full access to Adobe's suite of creative applications for a year. Unleash your creativity.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=18",
            "sku": "ADB-CC-ANN",
            "unit": "subscription",
            "status": "active",
            "flashSale": false,
            "currentPrice": 599.88,
            "originalPrice": 659.88,
            "discount": 9,
            "quantity": 30,
            "stock": 80,
            "createdAt": "2025-01-25T14:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 19,
            "title": "Synology DiskStation DS923+ NAS",
            "slug": "synology-diskstation-ds923-plus-nas-sds923p",
            "category": "Storage",
            "type": "NAS",
            "parent": "Storage",
            "children": [],
            "tags": [
                "network-storage",
                "backup"
            ],
            "description": "Powerful 4-bay NAS for centralized data storage, backup, and media streaming.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=19",
            "sku": "SYN-DS923P-NAS",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 549.00,
            "originalPrice": 620.00,
            "discount": 11,
            "quantity": 12,
            "stock": 35,
            "createdAt": "2024-11-01T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 20,
            "title": "APC Back-UPS Pro BR1500MS UPS",
            "slug": "apc-back-ups-pro-br1500ms-ups-apcbr1500ms",
            "category": "Power Solutions",
            "type": "UPS",
            "parent": "Power Solutions",
            "children": [],
            "tags": [
                "battery-backup",
                "surge-protection"
            ],
            "description": "Uninterruptible power supply to protect your electronics from power outages and surges.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=20",
            "sku": "APC-BR1500MS",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 199.99,
            "originalPrice": 220.00,
            "discount": 9,
            "quantity": 25,
            "stock": 60,
            "createdAt": "2025-02-05T16:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 21,
            "title": "NVIDIA GeForce RTX 5090 (Next Gen)",
            "slug": "nvidia-geforce-rtx-5090-next-gen-nv5090",
            "category": "GPU",
            "type": "Graphics Card",
            "parent": "GPU",
            "children": [],
            "tags": [
                "future-tech",
                "ultra-gaming"
            ],
            "description": "Anticipated next-generation graphics card for unprecedented gaming and rendering.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=21",
            "sku": "NV-RTX-5090",
            "unit": "pcs",
            "status": "upcoming",
            "flashSale": false,
            "currentPrice": 2999.00,
            "originalPrice": 3500.00,
            "discount": 14,
            "quantity": 0,
            "stock": 0,
            "createdAt": "2025-06-15T08:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 22,
            "title": "AMD Ryzen 9 8950X (Next Gen)",
            "slug": "amd-ryzen-9-8950x-next-gen-amdryz8950x",
            "category": "CPU",
            "type": "CPU",
            "parent": "CPU",
            "children": [],
            "tags": [
                "high-core-count",
                "productivity"
            ],
            "description": "Future AMD processor designed for multi-threaded workloads and extreme performance.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=22",
            "sku": "AMD-R9-8950X",
            "unit": "pcs",
            "status": "upcoming",
            "flashSale": false,
            "currentPrice": 799.00,
            "originalPrice": 900.00,
            "discount": 11,
            "quantity": 0,
            "stock": 0,
            "createdAt": "2025-05-20T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 23,
            "title": "SteelSeries Apex Pro Mini Wireless",
            "slug": "steelseries-apex-pro-mini-wireless-ssapmwireless",
            "category": "Peripherals",
            "type": "Keyboard",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "60-percent",
                "wireless",
                "gaming"
            ],
            "description": "Compact 60% wireless gaming keyboard with adjustable mechanical switches.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=23",
            "sku": "SST-APXPM-WL",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 169.99,
            "originalPrice": 199.99,
            "discount": 15,
            "quantity": 30,
            "stock": 70,
            "createdAt": "2025-03-25T14:30:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 24,
            "title": "Razer DeathAdder V3 Pro Gaming Mouse",
            "slug": "razer-deathadder-v3-pro-gaming-mouse-rdav3pro",
            "category": "Peripherals",
            "type": "Mouse",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "ergonomic",
                "wireless",
                "esports"
            ],
            "description": "Ergonomic wireless gaming mouse trusted by esports professionals for ultimate precision.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=24",
            "sku": "RZR-DAV3P",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 149.99,
            "originalPrice": 169.99,
            "discount": 12,
            "quantity": 45,
            "stock": 110,
            "createdAt": "2025-02-01T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 25,
            "title": "Seagate IronWolf Pro 16TB NAS HDD",
            "slug": "seagate-ironwolf-pro-16tb-nas-hdd-sip16t",
            "category": "Storage",
            "type": "HDD",
            "parent": "Storage",
            "children": [],
            "tags": [
                "high-capacity",
                "nas-optimized"
            ],
            "description": "Reliable 16TB hard drive designed for 24/7 operation in NAS systems.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=25",
            "sku": "SGT-IWP-16T",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 319.00,
            "originalPrice": 380.00,
            "discount": 16,
            "quantity": 18,
            "stock": 50,
            "createdAt": "2024-10-15T13:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 26,
            "title": "Corsair Dominator Platinum RGB 32GB DDR5",
            "slug": "corsair-dominator-platinum-rgb-32gb-ddr5-cdprgb32d5",
            "category": "RAM",
            "type": "Memory",
            "parent": "RAM",
            "children": [],
            "tags": [
                "premium-ram",
                "rgb"
            ],
            "description": "High-performance DDR5 RAM with stunning RGB lighting for a premium build.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=26",
            "sku": "CSR-DPRGB-32D5",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 289.00,
            "originalPrice": 320.00,
            "discount": 9,
            "quantity": 25,
            "stock": 75,
            "createdAt": "2025-01-08T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 27,
            "title": "LG C3 OLED 65-inch 4K Smart TV",
            "slug": "lg-c3-oled-65-inch-4k-smart-tv-lgc365",
            "category": "Monitor",
            "type": "Smart TV",
            "parent": "Monitor",
            "children": [],
            "tags": [
                "oled-tv",
                "4k",
                "smart-tv"
            ],
            "description": "Stunning 65-inch OLED TV with perfect blacks and vibrant colors for an immersive viewing experience.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=27",
            "sku": "LG-C3-65",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 1799.00,
            "originalPrice": 2199.00,
            "discount": 18,
            "quantity": 8,
            "stock": 25,
            "createdAt": "2024-11-05T12:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 28,
            "title": "Noctua NH-D15 CPU Cooler",
            "slug": "noctua-nh-d15-cpu-cooler-nnhd15",
            "category": "Cooler",
            "type": "Air Cooler",
            "parent": "CPU",
            "children": [],
            "tags": [
                "air-cooling",
                "ultra-quiet"
            ],
            "description": "Award-winning dual tower CPU air cooler for exceptional cooling performance and silence.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=28",
            "sku": "NOC-NHD15",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 109.99,
            "originalPrice": 119.99,
            "discount": 8,
            "quantity": 40,
            "stock": 95,
            "createdAt": "2025-03-05T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 29,
            "title": "Fractal Design Meshify 2 XL Case",
            "slug": "fractal-design-meshify-2-xl-case-fdm2xl",
            "category": "PC Case",
            "type": "Full Tower",
            "parent": "PC Case",
            "children": [],
            "tags": [
                "full-tower",
                "airflow"
            ],
            "description": "Spacious full-tower case with excellent airflow and modular design for extreme builds.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=29",
            "sku": "FDC-MSH2XL",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 219.00,
            "originalPrice": 250.00,
            "discount": 12,
            "quantity": 15,
            "stock": 40,
            "createdAt": "2024-12-08T15:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 30,
            "title": "EVGA SuperNOVA 850 P5 PSU",
            "slug": "evga-supernova-850-p5-psu-evgsn850p5",
            "category": "Power Supply",
            "type": "PSU",
            "parent": "Power Supply",
            "children": [],
            "tags": [
                "platinum-rated",
                "fully-modular"
            ],
            "description": "850W Platinum-rated fully modular power supply for maximum efficiency and reliability.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=30",
            "sku": "EVG-SN850P5",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 149.99,
            "originalPrice": 170.00,
            "discount": 12,
            "quantity": 30,
            "stock": 80,
            "createdAt": "2025-02-15T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 31,
            "title": "Bose QuietComfort 45 Headphones",
            "slug": "bose-quietcomfort-45-headphones-bqcp45",
            "category": "Audio",
            "type": "Headphones",
            "parent": "Audio",
            "children": [],
            "tags": [
                "noise-cancelling",
                "comfort"
            ],
            "description": "Renowned Bose noise cancellation and comfortable design for all-day listening.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=31",
            "sku": "BOS-QC45",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 279.00,
            "originalPrice": 329.00,
            "discount": 15,
            "quantity": 20,
            "stock": 60,
            "createdAt": "2024-11-22T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 32,
            "title": "Blue Yeti USB Microphone",
            "slug": "blue-yeti-usb-microphone-byusbmic",
            "category": "Peripherals",
            "type": "Microphone",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "podcast",
                "versatile"
            ],
            "description": "Versatile USB microphone ideal for podcasting, streaming, and voiceovers.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=32",
            "sku": "BLU-YETI-US",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 99.99,
            "originalPrice": 119.99,
            "discount": 17,
            "quantity": 50,
            "stock": 130,
            "createdAt": "2025-01-10T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 33,
            "title": "Ubiquiti UniFi Dream Machine Pro",
            "slug": "ubiquiti-unifi-dream-machine-pro-uudmp",
            "category": "Networking",
            "type": "Gateway",
            "parent": "Networking",
            "children": [],
            "tags": [
                "network-appliance",
                "security"
            ],
            "description": "All-in-one network appliance for advanced routing, security, and network management.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=33",
            "sku": "UBQ-UDM-PRO",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 379.00,
            "originalPrice": 420.00,
            "discount": 10,
            "quantity": 10,
            "stock": 30,
            "createdAt": "2024-11-15T16:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 34,
            "title": "Trend Micro Maximum Security (1 Year, 3 Devices)",
            "slug": "trend-micro-maximum-security-1yr-3dev-tmmms",
            "category": "Software",
            "type": "Antivirus",
            "parent": "Software",
            "children": [],
            "tags": [
                "cybersecurity",
                "multi-device"
            ],
            "description": "Comprehensive security suite protecting your devices from viruses, malware, and online threats.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=34",
            "sku": "TRM-MS-1Y3D",
            "unit": "license",
            "status": "active",
            "flashSale": false,
            "currentPrice": 49.99,
            "originalPrice": 69.99,
            "discount": 29,
            "quantity": 80,
            "stock": 250,
            "createdAt": "2025-03-01T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 35,
            "title": "Logitech MX Master 3S Wireless Mouse",
            "slug": "logitech-mx-master-3s-wireless-mouse-lmxm3s",
            "category": "Peripherals",
            "type": "Mouse",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "productivity",
                "ergonomic"
            ],
            "description": "Advanced wireless mouse designed for ultimate comfort, control, and productivity.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=35",
            "sku": "LOG-MXM3S",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 99.99,
            "originalPrice": 119.99,
            "discount": 17,
            "quantity": 60,
            "stock": 140,
            "createdAt": "2024-12-18T12:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 36,
            "title": "Glorious GMMK Pro Mechanical Keyboard",
            "slug": "glorious-gmmk-pro-mechanical-keyboard-ggpro",
            "category": "Peripherals",
            "type": "Keyboard",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "hot-swappable",
                "custom-build"
            ],
            "description": "Barebones mechanical keyboard for enthusiasts to build their perfect custom keyboard.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=36",
            "sku": "GLO-GMMKP",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 169.99,
            "originalPrice": 180.00,
            "discount": 5,
            "quantity": 28,
            "stock": 70,
            "createdAt": "2025-02-28T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 37,
            "title": "Samsung Odyssey G9 Neo Monitor",
            "slug": "samsung-odyssey-g9-neo-monitor-sog9n",
            "category": "Monitor",
            "type": "Display",
            "parent": "Monitor",
            "children": [],
            "tags": [
                "super-ultrawide",
                "mini-led"
            ],
            "description": "Immersive 49-inch super ultrawide Mini-LED gaming monitor with stunning HDR.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=37",
            "sku": "SMG-ODG9N",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 1499.00,
            "originalPrice": 1999.00,
            "discount": 25,
            "quantity": 7,
            "stock": 20,
            "createdAt": "2024-11-08T14:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 38,
            "title": "Arctic Liquid Freezer II 360 AIO",
            "slug": "arctic-liquid-freezer-ii-360-aio-alfa360",
            "category": "Cooler",
            "type": "Liquid Cooler",
            "parent": "CPU",
            "children": [],
            "tags": [
                "all-in-one",
                "high-performance"
            ],
            "description": "High-performance 360mm all-in-one liquid cooler for demanding CPU workloads.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=38",
            "sku": "ARC-LFII-360",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 129.99,
            "originalPrice": 140.00,
            "discount": 7,
            "quantity": 30,
            "stock": 80,
            "createdAt": "2025-03-15T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 39,
            "title": "Gigabyte AORUS FO48U 4K OLED Monitor",
            "slug": "gigabyte-aorus-fo48u-4k-oled-monitor-gaf48u",
            "category": "Monitor",
            "type": "Display",
            "parent": "Monitor",
            "children": [],
            "tags": [
                "4k",
                "oled",
                "large-format"
            ],
            "description": "Large 48-inch 4K OLED gaming monitor, perfect for immersive PC gaming and console use.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=39",
            "sku": "GIGA-FO48U",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 899.00,
            "originalPrice": 1099.00,
            "discount": 18,
            "quantity": 10,
            "stock": 30,
            "createdAt": "2024-12-10T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 40,
            "title": "Western Digital Black SN850X 1TB NVMe SSD",
            "slug": "western-digital-black-sn850x-1tb-nvme-ssd-wdb850x1t",
            "category": "Storage",
            "type": "SSD",
            "parent": "Storage",
            "children": [],
            "tags": [
                "gaming-ssd",
                "pcie-gen4"
            ],
            "description": "High-speed PCIe Gen4 NVMe SSD optimized for gaming and heavy workloads.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=40",
            "sku": "WDC-SN850X-1T",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 129.99,
            "originalPrice": 149.99,
            "discount": 13,
            "quantity": 50,
            "stock": 120,
            "createdAt": "2025-01-30T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 41,
            "title": "AMD Radeon RX 7900 XTX",
            "slug": "amd-radeon-rx-7900-xtx-amdrx7900xtx",
            "category": "GPU",
            "type": "Graphics Card",
            "parent": "GPU",
            "children": [],
            "tags": [
                "4k-gaming",
                "amd-gpu"
            ],
            "description": "High-performance AMD graphics card for immersive 4K gaming and content creation.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=41",
            "sku": "AMD-R7900XTX",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 899.00,
            "originalPrice": 999.00,
            "discount": 10,
            "quantity": 20,
            "stock": 60,
            "createdAt": "2024-11-25T13:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 42,
            "title": "Intel Core i9-14900K",
            "slug": "intel-core-i9-14900k-inteli914900k",
            "category": "CPU",
            "type": "CPU",
            "parent": "CPU",
            "children": [],
            "tags": [
                "gaming",
                "workstation"
            ],
            "description": "Flagship Intel CPU for unparalleled gaming and multi-tasking performance.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=42",
            "sku": "INT-I9-14900K",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 589.00,
            "originalPrice": 620.00,
            "discount": 5,
            "quantity": 30,
            "stock": 90,
            "createdAt": "2025-01-05T08:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 43,
            "title": "MSI PRO B650-P WIFI Motherboard",
            "slug": "msi-pro-b650-p-wifi-motherboard-msipb650p",
            "category": "Motherboard",
            "type": "Motherboard",
            "parent": "Motherboard",
            "children": [],
            "tags": [
                "amd-compatible",
                "wifi"
            ],
            "description": "Feature-rich motherboard for AMD Ryzen CPUs with integrated Wi-Fi.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=43",
            "sku": "MSI-PB650P-WF",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 189.99,
            "originalPrice": 220.00,
            "discount": 14,
            "quantity": 25,
            "stock": 70,
            "createdAt": "2025-03-08T14:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 44,
            "title": "NZXT H7 Flow PC Case",
            "slug": "nzxt-h7-flow-pc-case-nzh7flow",
            "category": "PC Case",
            "type": "Mid Tower",
            "parent": "PC Case",
            "children": [],
            "tags": [
                "airflow",
                "minimalist"
            ],
            "description": "Mid-tower case with optimized airflow and a clean, minimalist design.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=44",
            "sku": "NZXT-H7FL",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 129.99,
            "originalPrice": 139.99,
            "discount": 7,
            "quantity": 35,
            "stock": 85,
            "createdAt": "2025-02-20T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 45,
            "title": "Fractal Design Ion+ 860P Platinum PSU",
            "slug": "fractal-design-ion-860p-platinum-psu-fdion860p",
            "category": "Power Supply",
            "type": "PSU",
            "parent": "Power Supply",
            "children": [],
            "tags": [
                "platinum-rated",
                "quiet"
            ],
            "description": "Quiet and efficient Platinum-rated 860W power supply for reliable system operation.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=45",
            "sku": "FDC-ION860P",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 159.00,
            "originalPrice": 180.00,
            "discount": 11,
            "quantity": 20,
            "stock": 50,
            "createdAt": "2024-12-28T16:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 46,
            "title": "Corsair Virtuoso RGB Wireless XT Headset",
            "slug": "corsair-virtuoso-rgb-wireless-xt-headset-cvrgbwxt",
            "category": "Audio",
            "type": "Gaming Headset",
            "parent": "Audio",
            "children": [],
            "tags": [
                "wireless",
                "gaming-audio"
            ],
            "description": "High-fidelity wireless gaming headset with immersive sound and comfortable earcups.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=46",
            "sku": "CSR-VRGX-XT",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 199.99,
            "originalPrice": 219.99,
            "discount": 9,
            "quantity": 30,
            "stock": 70,
            "createdAt": "2025-01-18T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 47,
            "title": "HP Omen 27qs 240Hz QHD Gaming Monitor",
            "slug": "hp-omen-27qs-240hz-qhd-gaming-monitor-hpom27qs",
            "category": "Monitor",
            "type": "Display",
            "parent": "Monitor",
            "children": [],
            "tags": [
                "high-refresh-rate",
                "qhd"
            ],
            "description": "27-inch QHD gaming monitor with a blazing-fast 240Hz refresh rate for competitive gaming.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=47",
            "sku": "HP-OMEN-27QS",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 399.00,
            "originalPrice": 450.00,
            "discount": 11,
            "quantity": 15,
            "stock": 40,
            "createdAt": "2024-11-01T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 48,
            "title": "TP-Link Deco X50 Mesh Wi-Fi System (3-Pack)",
            "slug": "tp-link-deco-x50-mesh-wifi-system-tplx50",
            "category": "Networking",
            "type": "Mesh Router",
            "parent": "Networking",
            "children": [],
            "tags": [
                "whole-home-wifi",
                "wi-fi-6"
            ],
            "description": "Seamless whole-home Wi-Fi 6 coverage with this easy-to-setup mesh system.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=48",
            "sku": "TPL-DECX50-3P",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 249.99,
            "originalPrice": 279.99,
            "discount": 11,
            "quantity": 22,
            "stock": 60,
            "createdAt": "2025-03-01T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 49,
            "title": "Bitdefender Total Security (2025, 5 Devices)",
            "slug": "bitdefender-total-security-2025-bdtotsec25",
            "category": "Software",
            "type": "Security Suite",
            "parent": "Software",
            "children": [],
            "tags": [
                "antivirus",
                "privacy",
                "vpn"
            ],
            "description": "All-in-one security for your digital life, including antivirus, VPN, and privacy tools.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=49",
            "sku": "BDF-TOTSEC25-5D",
            "unit": "license",
            "status": "active",
            "flashSale": true,
            "currentPrice": 79.99,
            "originalPrice": 100.00,
            "discount": 20,
            "quantity": 40,
            "stock": 100,
            "createdAt": "2024-10-25T15:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 50,
            "title": "SanDisk Extreme Portable SSD V2 2TB",
            "slug": "sandisk-extreme-portable-ssd-v2-2tb-sde2tbv2",
            "category": "Storage",
            "type": "External SSD",
            "parent": "Storage",
            "children": [],
            "tags": [
                "portable",
                "rugged"
            ],
            "description": "Durable and fast portable SSD for on-the-go storage and data transfer.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=50",
            "sku": "SNDK-EXPSSD-2T",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 189.99,
            "originalPrice": 220.00,
            "discount": 14,
            "quantity": 30,
            "stock": 80,
            "createdAt": "2025-02-10T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 51,
            "title": "Google Pixel 9 Pro (Upcoming)",
            "slug": "google-pixel-9-pro-upcoming-gpp9pro",
            "category": "Mobile",
            "type": "Smartphone",
            "parent": "Mobile",
            "children": [],
            "tags": [
                "android",
                "flagship",
                "camera"
            ],
            "description": "Next-generation Google smartphone with advanced AI features and camera technology.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=51",
            "sku": "GGL-PX9P",
            "unit": "pcs",
            "status": "upcoming",
            "flashSale": false,
            "currentPrice": 999.00,
            "originalPrice": 1100.00,
            "discount": 9,
            "quantity": 0,
            "stock": 0,
            "createdAt": "2025-06-01T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 52,
            "title": "Apple MacBook Air M3 15-inch",
            "slug": "apple-macbook-air-m3-15-inch-ambam315",
            "category": "Laptop",
            "type": "Laptop",
            "parent": "Laptop",
            "children": [],
            "tags": [
                "thin-and-light",
                "long-battery"
            ],
            "description": "Super thin and light laptop powered by the M3 chip, offering exceptional performance and battery life.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=52",
            "sku": "APL-MBA-M3-15",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 1499.00,
            "originalPrice": 1699.00,
            "discount": 12,
            "quantity": 18,
            "stock": 50,
            "createdAt": "2024-12-01T15:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 53,
            "title": "Dyson V15 Detect Absolute Vacuum",
            "slug": "dyson-v15-detect-absolute-vacuum-dv15da",
            "category": "Home Appliances",
            "type": "Vacuum Cleaner",
            "parent": "Home Appliances",
            "children": [],
            "tags": [
                "cordless",
                "laser-detect"
            ],
            "description": "Powerful cordless vacuum with laser detection to reveal microscopic dust.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=53",
            "sku": "DYS-V15DA",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 699.00,
            "originalPrice": 750.00,
            "discount": 7,
            "quantity": 10,
            "stock": 30,
            "createdAt": "2025-01-20T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 54,
            "title": "Philips Hue White and Color Ambiance Starter Kit",
            "slug": "philips-hue-white-color-ambiance-starter-kit-phwcas",
            "category": "Smart Home",
            "type": "Smart Lighting",
            "parent": "Smart Home",
            "children": [],
            "tags": [
                "smart-lighting",
                "rgb"
            ],
            "description": "Start your smart home lighting journey with vibrant colors and white light shades.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=54",
            "sku": "PHL-HUE-WCAS",
            "unit": "kit",
            "status": "active",
            "flashSale": true,
            "currentPrice": 179.99,
            "originalPrice": 200.00,
            "discount": 10,
            "quantity": 25,
            "stock": 70,
            "createdAt": "2024-11-10T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 55,
            "title": "Samsung Galaxy S25 Ultra (Upcoming)",
            "slug": "samsung-galaxy-s25-ultra-upcoming-sgs25ultra",
            "category": "Mobile",
            "type": "Smartphone",
            "parent": "Mobile",
            "children": [],
            "tags": [
                "android",
                "camera-phone",
                "flagship"
            ],
            "description": "Next-gen Samsung flagship phone with cutting-edge camera and performance.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=55",
            "sku": "SMG-GS25U",
            "unit": "pcs",
            "status": "upcoming",
            "flashSale": false,
            "currentPrice": 1299.00,
            "originalPrice": 1400.00,
            "discount": 7,
            "quantity": 0,
            "stock": 0,
            "createdAt": "2025-05-15T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 56,
            "title": "LG Gram 17 (2024) Lightweight Laptop",
            "slug": "lg-gram-17-2024-lightweight-laptop-lggram1724",
            "category": "Laptop",
            "type": "Laptop",
            "parent": "Laptop",
            "children": [],
            "tags": [
                "ultralight",
                "large-screen"
            ],
            "description": "Incredibly lightweight 17-inch laptop offering a large display for productivity on the go.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=56",
            "sku": "LG-GRAM-17-24",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 1399.00,
            "originalPrice": 1550.00,
            "discount": 9,
            "quantity": 15,
            "stock": 45,
            "createdAt": "2025-02-01T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 57,
            "title": "Ecobee Smart Thermostat Premium",
            "slug": "ecobee-smart-thermostat-premium-ebstpremium",
            "category": "Smart Home",
            "type": "Smart Thermostat",
            "parent": "Smart Home",
            "children": [],
            "tags": [
                "energy-saving",
                "voice-control"
            ],
            "description": "Smart thermostat with built-in Alexa, allowing voice control and energy savings.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=57",
            "sku": "ECB-STP",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 239.00,
            "originalPrice": 269.00,
            "discount": 11,
            "quantity": 20,
            "stock": 60,
            "createdAt": "2024-11-20T14:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 58,
            "title": "Ring Video Doorbell Pro 2",
            "slug": "ring-video-doorbell-pro-2-rvdbpro2",
            "category": "Smart Home",
            "type": "Smart Doorbell",
            "parent": "Smart Home",
            "children": [],
            "tags": [
                "security",
                "2k-video"
            ],
            "description": "Advanced video doorbell with 2K HDR video and 3D motion detection for enhanced home security.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=58",
            "sku": "RNG-VDBP2",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 249.99,
            "originalPrice": 279.99,
            "discount": 11,
            "quantity": 15,
            "stock": 40,
            "createdAt": "2025-03-10T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 59,
            "title": "Sony Alpha a7 IV Mirrorless Camera",
            "slug": "sony-alpha-a7-iv-mirrorless-camera-sa7iv",
            "category": "Photography",
            "type": "Camera",
            "parent": "Photography",
            "children": [],
            "tags": [
                "full-frame",
                "4k-video"
            ],
            "description": "Versatile full-frame mirrorless camera for stunning photos and professional 4K video.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=59",
            "sku": "SONY-A7IV",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 2299.00,
            "originalPrice": 2499.00,
            "discount": 8,
            "quantity": 5,
            "stock": 15,
            "createdAt": "2024-12-25T16:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 60,
            "title": "DJI Mini 4 Pro Drone",
            "slug": "dji-mini-4-pro-drone-djm4p",
            "category": "Drones",
            "type": "Drone",
            "parent": "Drones",
            "children": [],
            "tags": [
                "compact",
                "4k-camera"
            ],
            "description": "Ultra-light and foldable drone with a 4K camera and advanced obstacle sensing.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=60",
            "sku": "DJI-MN4P",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 759.00,
            "originalPrice": 800.00,
            "discount": 5,
            "quantity": 8,
            "stock": 20,
            "createdAt": "2025-01-12T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 61,
            "title": "GoPro HERO12 Black Action Camera",
            "slug": "gopro-hero12-black-action-camera-goproh12b",
            "category": "Photography",
            "type": "Action Camera",
            "parent": "Photography",
            "children": [],
            "tags": [
                "waterproof",
                "5k-video"
            ],
            "description": "Rugged and waterproof action camera capturing stunning 5.3K video and 27MP photos.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=61",
            "sku": "GPRO-H12B",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 349.00,
            "originalPrice": 399.00,
            "discount": 12,
            "quantity": 15,
            "stock": 40,
            "createdAt": "2024-11-20T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 62,
            "title": "Nintendo Switch OLED Model",
            "slug": "nintendo-switch-oled-model-nwswoled",
            "category": "Gaming Consoles",
            "type": "Console",
            "parent": "Gaming Consoles",
            "children": [],
            "tags": [
                "portable",
                "oled-screen"
            ],
            "description": "Vibrant 7-inch OLED screen brings games to life on the go or at home.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=62",
            "sku": "NINT-SWOLED",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 349.00,
            "originalPrice": 350.00,
            "discount": 0,
            "quantity": 25,
            "stock": 70,
            "createdAt": "2025-01-01T12:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 63,
            "title": "PlayStation 5 Slim",
            "slug": "playstation-5-slim-ps5slim",
            "category": "Gaming Consoles",
            "type": "Console",
            "parent": "Gaming Consoles",
            "children": [],
            "tags": [
                "4k-gaming",
                "next-gen"
            ],
            "description": "Slimmer version of the PlayStation 5, offering stunning 4K gaming and immersive experiences.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=63",
            "sku": "SONY-PS5S",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 449.00,
            "originalPrice": 499.00,
            "discount": 10,
            "quantity": 10,
            "stock": 30,
            "createdAt": "2024-11-05T13:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 64,
            "title": "Xbox Series X",
            "slug": "xbox-series-x-xboxsx",
            "category": "Gaming Consoles",
            "type": "Console",
            "parent": "Gaming Consoles",
            "children": [],
            "tags": [
                "4k-gaming",
                "game-pass"
            ],
            "description": "Microsoft's most powerful console, delivering true 4K gaming and blazing-fast load times.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=64",
            "sku": "MSFT-XBSX",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 499.00,
            "originalPrice": 499.00,
            "discount": 0,
            "quantity": 15,
            "stock": 40,
            "createdAt": "2025-02-15T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 65,
            "title": "Roku Streaming Stick 4K",
            "slug": "roku-streaming-stick-4k-rss4k",
            "category": "Streaming Devices",
            "type": "Streaming Stick",
            "parent": "Streaming Devices",
            "children": [],
            "tags": [
                "4k-hdr",
                "voice-remote"
            ],
            "description": "Stream your favorite content in stunning 4K HDR with a voice remote.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=65",
            "sku": "ROKU-SS4K",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 39.00,
            "originalPrice": 49.00,
            "discount": 20,
            "quantity": 50,
            "stock": 120,
            "createdAt": "2024-11-28T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 66,
            "title": "Amazon Echo Dot (5th Gen)",
            "slug": "amazon-echo-dot-5th-gen-aed5",
            "category": "Smart Home",
            "type": "Smart Speaker",
            "parent": "Smart Home",
            "children": [],
            "tags": [
                "alexa",
                "smart-speaker"
            ],
            "description": "Compact smart speaker with improved audio and Alexa voice assistant.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=66",
            "sku": "AMZ-ECHODOT5",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 49.99,
            "originalPrice": 59.99,
            "discount": 17,
            "quantity": 80,
            "stock": 200,
            "createdAt": "2025-03-05T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 67,
            "title": "Blink Outdoor 4 Camera System (3-Pack)",
            "slug": "blink-outdoor-4-camera-system-blinkout43pk",
            "category": "Smart Home",
            "type": "Security Camera",
            "parent": "Smart Home",
            "children": [],
            "tags": [
                "wireless",
                "weatherproof"
            ],
            "description": "Wireless, battery-powered outdoor security cameras for comprehensive home surveillance.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=67",
            "sku": "BLNK-OUT4-3P",
            "unit": "kit",
            "status": "active",
            "flashSale": true,
            "currentPrice": 249.99,
            "originalPrice": 300.00,
            "discount": 17,
            "quantity": 10,
            "stock": 30,
            "createdAt": "2024-12-15T14:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 68,
            "title": "Epson EcoTank ET-4850 All-in-One Printer",
            "slug": "epson-ecotank-et-4850-all-in-one-printer-epset4850",
            "category": "Printers & Scanners",
            "type": "Printer",
            "parent": "Printers & Scanners",
            "children": [],
            "tags": [
                "ink-tank",
                "wireless"
            ],
            "description": "Cartridge-free all-in-one printer with supersized ink tanks for significant savings.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=68",
            "sku": "EPS-ET4850",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 399.00,
            "originalPrice": 420.00,
            "discount": 5,
            "quantity": 12,
            "stock": 35,
            "createdAt": "2025-02-22T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 69,
            "title": "Logitech C920s HD Pro Webcam",
            "slug": "logitech-c920s-hd-pro-webcam-lc920s",
            "category": "Peripherals",
            "type": "Webcam",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "full-hd",
                "privacy-shutter"
            ],
            "description": "Full HD 1080p webcam with privacy shutter for video calls and streaming.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=69",
            "sku": "LOG-C920S",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 59.99,
            "originalPrice": 69.99,
            "discount": 14,
            "quantity": 70,
            "stock": 180,
            "createdAt": "2024-11-03T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 70,
            "title": "WD My Passport 5TB External HDD",
            "slug": "wd-my-passport-5tb-external-hdd-wdmp5t",
            "category": "Storage",
            "type": "External HDD",
            "parent": "Storage",
            "children": [],
            "tags": [
                "portable",
                "backup"
            ],
            "description": "Compact 5TB external hard drive for portable storage and backup solutions.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=70",
            "sku": "WDC-MP5T",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 129.99,
            "originalPrice": 140.00,
            "discount": 7,
            "quantity": 40,
            "stock": 100,
            "createdAt": "2025-01-25T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 71,
            "title": "Razer BlackWidow V4 Pro Keyboard",
            "slug": "razer-blackwidow-v4-pro-keyboard-rbwv4pro",
            "category": "Peripherals",
            "type": "Keyboard",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "mechanical",
                "gaming-keyboard"
            ],
            "description": "Full-sized mechanical gaming keyboard with Chroma RGB lighting and macro keys.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=71",
            "sku": "RZR-BWV4P",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 189.99,
            "originalPrice": 220.00,
            "discount": 14,
            "quantity": 25,
            "stock": 60,
            "createdAt": "2024-12-08T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 72,
            "title": "Asus ROG Zephyrus G14 Gaming Laptop",
            "slug": "asus-rog-zephyrus-g14-gaming-laptop-argzg14",
            "category": "Laptop",
            "type": "Gaming Laptop",
            "parent": "Laptop",
            "children": [],
            "tags": [
                "portable-gaming",
                "amd-ryzen"
            ],
            "description": "Compact and powerful gaming laptop with AMD Ryzen CPU and dedicated graphics.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=72",
            "sku": "ASUS-RZG14",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 1599.00,
            "originalPrice": 1700.00,
            "discount": 6,
            "quantity": 10,
            "stock": 30,
            "createdAt": "2025-03-01T15:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 73,
            "title": "Samsung Galaxy Tab S9 Ultra",
            "slug": "samsung-galaxy-tab-s9-ultra-sgts9u",
            "category": "Tablets",
            "type": "Tablet",
            "parent": "Tablets",
            "children": [],
            "tags": [
                "android-tablet",
                "large-display"
            ],
            "description": "Premium Android tablet with a massive OLED display and powerful performance.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=73",
            "sku": "SMG-GTS9U",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 1099.00,
            "originalPrice": 1200.00,
            "discount": 8,
            "quantity": 8,
            "stock": 25,
            "createdAt": "2024-11-18T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 74,
            "title": "Amazon Kindle Paperwhite (Latest Gen)",
            "slug": "amazon-kindle-paperwhite-latest-gen-akpwlg",
            "category": "E-readers",
            "type": "E-reader",
            "parent": "E-readers",
            "children": [],
            "tags": [
                "e-ink",
                "waterproof"
            ],
            "description": "Waterproof e-reader with a glare-free display for comfortable reading anywhere.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=74",
            "sku": "AMZ-KPW-LG",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 139.99,
            "originalPrice": 149.99,
            "discount": 7,
            "quantity": 30,
            "stock": 80,
            "createdAt": "2025-02-05T12:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 75,
            "title": "Apple iPad Air (M2, Latest Gen)",
            "slug": "apple-ipad-air-m2-latest-gen-aipa2lg",
            "category": "Tablets",
            "type": "Tablet",
            "parent": "Tablets",
            "children": [],
            "tags": [
                "ipad",
                "m2-chip"
            ],
            "description": "Thin and light iPad Air with the powerful M2 chip for productivity and entertainment.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=75",
            "sku": "APL-IPAIR-M2",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 599.00,
            "originalPrice": 650.00,
            "discount": 8,
            "quantity": 15,
            "stock": 40,
            "createdAt": "2024-12-01T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 76,
            "title": "Microsoft Surface Pro 10",
            "slug": "microsoft-surface-pro-10-mssp10",
            "category": "Laptop",
            "type": "2-in-1 Laptop",
            "parent": "Laptop",
            "children": [],
            "tags": [
                "tablet-laptop",
                "windows"
            ],
            "description": "Versatile 2-in-1 device offering laptop performance and tablet portability.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=76",
            "sku": "MSFT-SURP10",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 899.00,
            "originalPrice": 950.00,
            "discount": 5,
            "quantity": 10,
            "stock": 30,
            "createdAt": "2025-03-12T14:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 77,
            "title": "Canon EOS R5 Mirrorless Camera",
            "slug": "canon-eos-r5-mirrorless-camera-cer5",
            "category": "Photography",
            "type": "Camera",
            "parent": "Photography",
            "children": [],
            "tags": [
                "full-frame",
                "8k-video"
            ],
            "description": "High-resolution full-frame mirrorless camera capable of capturing stunning 8K video.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=77",
            "sku": "CAN-EOS-R5",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 2799.00,
            "originalPrice": 3000.00,
            "discount": 6,
            "quantity": 4,
            "stock": 10,
            "createdAt": "2024-11-25T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 78,
            "title": "Netgear Orbi RBKE960 Wi-Fi 6E Mesh System",
            "slug": "netgear-orbi-rbke960-wifi-6e-mesh-system-norbke960",
            "category": "Networking",
            "type": "Mesh Router",
            "parent": "Networking",
            "children": [],
            "tags": [
                "wi-fi-6e",
                "whole-home-coverage"
            ],
            "description": "Top-tier Wi-Fi 6E mesh system for unparalleled speed and coverage in large homes.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=78",
            "sku": "NET-ORBIE960",
            "unit": "kit",
            "status": "active",
            "flashSale": false,
            "currentPrice": 1499.00,
            "originalPrice": 1600.00,
            "discount": 6,
            "quantity": 5,
            "stock": 15,
            "createdAt": "2025-01-05T13:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 79,
            "title": "Sony WH-CH720N Noise Cancelling Headphones",
            "slug": "sony-wh-ch720n-noise-cancelling-headphones-swhch720n",
            "category": "Audio",
            "type": "Headphones",
            "parent": "Audio",
            "children": [],
            "tags": [
                "budget-friendly",
                "noise-cancelling"
            ],
            "description": "Affordable noise-cancelling headphones with comfortable design and long battery life.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=79",
            "sku": "SON-WH720N",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 99.99,
            "originalPrice": 120.00,
            "discount": 17,
            "quantity": 40,
            "stock": 100,
            "createdAt": "2024-12-10T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 80,
            "title": "Samsung 870 EVO 1TB SATA SSD",
            "slug": "samsung-870-evo-1tb-sata-ssd-sm870e1t",
            "category": "Storage",
            "type": "SSD",
            "parent": "Storage",
            "children": [],
            "tags": [
                "sata",
                "reliable"
            ],
            "description": "Reliable and fast SATA SSD for upgrading older systems or as secondary storage.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=80",
            "sku": "SMG-870E-1T",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 89.99,
            "originalPrice": 99.99,
            "discount": 10,
            "quantity": 60,
            "stock": 150,
            "createdAt": "2025-03-20T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 81,
            "title": "Corsair iCUE H150i ELITE LCD XT AIO",
            "slug": "corsair-icue-h150i-elite-lcd-xt-aio-cih150ielcdxt",
            "category": "Cooler",
            "type": "Liquid Cooler",
            "parent": "CPU",
            "children": [],
            "tags": [
                "lcd-screen",
                "rgb"
            ],
            "description": "Premium AIO liquid cooler with a customizable LCD screen for real-time monitoring and GIFs.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=81",
            "sku": "CSR-H150I-LCDXT",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 249.99,
            "originalPrice": 280.00,
            "discount": 11,
            "quantity": 18,
            "stock": 45,
            "createdAt": "2024-12-05T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 82,
            "title": "Lenovo Legion Pro 7i Gen 9 Gaming Laptop",
            "slug": "lenovo-legion-pro-7i-gen-9-gaming-laptop-llp7i9",
            "category": "Laptop",
            "type": "Gaming Laptop",
            "parent": "Laptop",
            "children": [],
            "tags": [
                "high-end-gaming",
                "rtx-gpu"
            ],
            "description": "Top-tier gaming laptop with powerful Intel CPU and NVIDIA RTX graphics for ultimate performance.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=82",
            "sku": "LEN-LGP7I-G9",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 2299.00,
            "originalPrice": 2500.00,
            "discount": 8,
            "quantity": 7,
            "stock": 20,
            "createdAt": "2025-03-01T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 83,
            "title": "Sony WF-1000XM5 Truly Wireless Earbuds",
            "slug": "sony-wf-1000xm5-truly-wireless-earbuds-swfm1000xm5",
            "category": "Audio",
            "type": "Earbuds",
            "parent": "Audio",
            "children": [],
            "tags": [
                "noise-cancelling",
                "wireless-earbuds"
            ],
            "description": "Premium truly wireless earbuds with industry-leading noise cancellation and superb audio.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=83",
            "sku": "SON-WF1KM5",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 279.99,
            "originalPrice": 299.99,
            "discount": 7,
            "quantity": 30,
            "stock": 80,
            "createdAt": "2024-11-15T12:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 84,
            "title": "Anker 737 Power Bank (PowerCore 24K)",
            "slug": "anker-737-power-bank-powercore-24k-a737pb",
            "category": "Accessories",
            "type": "Power Bank",
            "parent": "Accessories",
            "children": [],
            "tags": [
                "high-capacity",
                "fast-charging"
            ],
            "description": "High-capacity 24,000mAh power bank with fast charging for laptops and smartphones.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=84",
            "sku": "ANK-737PB-24K",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 149.99,
            "originalPrice": 159.99,
            "discount": 6,
            "quantity": 50,
            "stock": 120,
            "createdAt": "2025-02-20T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 85,
            "title": "Logitech MX Keys S Wireless Keyboard",
            "slug": "logitech-mx-keys-s-wireless-keyboard-lmxkys",
            "category": "Peripherals",
            "type": "Keyboard",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "productivity",
                "wireless"
            ],
            "description": "Premium wireless keyboard with comfortable, backlit keys for fluid typing.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=85",
            "sku": "LOG-MXKS",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 109.99,
            "originalPrice": 129.99,
            "discount": 15,
            "quantity": 35,
            "stock": 90,
            "createdAt": "2024-12-01T14:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 86,
            "title": "Corsair K100 RGB Mechanical Gaming Keyboard",
            "slug": "corsair-k100-rgb-mechanical-gaming-keyboard-ck100rgb",
            "category": "Peripherals",
            "type": "Keyboard",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "optical-mechanical",
                "rgb-lighting"
            ],
            "description": "High-performance gaming keyboard with optical-mechanical switches and dynamic RGB.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=86",
            "sku": "CSR-K100RGB",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 199.99,
            "originalPrice": 229.99,
            "discount": 13,
            "quantity": 20,
            "stock": 50,
            "createdAt": "2025-01-10T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 87,
            "title": "Intel Arc A770 Graphics Card",
            "slug": "intel-arc-a770-graphics-card-inta770",
            "category": "GPU",
            "type": "Graphics Card",
            "parent": "GPU",
            "children": [],
            "tags": [
                "budget-gaming",
                "intel-gpu"
            ],
            "description": "Intel's dedicated graphics card offering solid performance for mainstream gaming.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=87",
            "sku": "INTEL-A770",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 299.00,
            "originalPrice": 329.00,
            "discount": 9,
            "quantity": 30,
            "stock": 70,
            "createdAt": "2024-11-20T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 88,
            "title": "AMD Ryzen 7 7800X3D CPU",
            "slug": "amd-ryzen-7-7800x3d-cpu-amdr77800x3d",
            "category": "CPU",
            "type": "CPU",
            "parent": "CPU",
            "children": [],
            "tags": [
                "gaming-cpu",
                "3d-v-cache"
            ],
            "description": "Gaming powerhouse CPU with 3D V-Cache technology for exceptional frame rates.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=88",
            "sku": "AMD-R7-7800X3D",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 369.00,
            "originalPrice": 399.00,
            "discount": 7,
            "quantity": 25,
            "stock": 60,
            "createdAt": "2025-01-08T15:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 89,
            "title": "MSI MPG B650 CARBON WIFI Motherboard",
            "slug": "msi-mpg-b650-carbon-wifi-motherboard-msimpb650c",
            "category": "Motherboard",
            "type": "Motherboard",
            "parent": "Motherboard",
            "children": [],
            "tags": [
                "gaming",
                "amd-compatible"
            ],
            "description": "Premium gaming motherboard with robust power delivery and Wi-Fi 6E.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=89",
            "sku": "MSI-MPGB650C-WF",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 259.00,
            "originalPrice": 289.00,
            "discount": 10,
            "quantity": 15,
            "stock": 40,
            "createdAt": "2024-12-15T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 90,
            "title": "Lian Li Lancool III RGB PC Case",
            "slug": "lian-li-lancool-iii-rgb-pc-case-lllc3rgb",
            "category": "PC Case",
            "type": "Mid Tower",
            "parent": "PC Case",
            "children": [],
            "tags": [
                "airflow",
                "rgb-fans"
            ],
            "description": "Mid-tower case with excellent airflow and pre-installed RGB fans for a vibrant build.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=90",
            "sku": "LLI-LC3RGB",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 149.99,
            "originalPrice": 160.00,
            "discount": 6,
            "quantity": 25,
            "stock": 65,
            "createdAt": "2025-02-28T12:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 91,
            "title": "Seasoning Focus GX-850 PSU",
            "slug": "seasonic-focus-gx-850-psu-sfgx850",
            "category": "Power Supply",
            "type": "PSU",
            "parent": "Power Supply",
            "children": [],
            "tags": [
                "gold-rated",
                "quiet-operation"
            ],
            "description": "Reliable 850W 80 PLUS Gold certified power supply with quiet operation.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=91",
            "sku": "SSN-FCSGX-850",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 119.99,
            "originalPrice": 139.99,
            "discount": 14,
            "quantity": 30,
            "stock": 75,
            "createdAt": "2024-12-20T11:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 92,
            "title": "HyperX QuadCast S USB Microphone",
            "slug": "hyperx-quadcast-s-usb-microphone-hxqcsmic",
            "category": "Peripherals",
            "type": "Microphone",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "streaming",
                "rgb-lighting"
            ],
            "description": "Versatile USB microphone with stunning RGB lighting, perfect for streamers and gamers.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=92",
            "sku": "HX-QCS-MIC",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 159.99,
            "originalPrice": 169.99,
            "discount": 6,
            "quantity": 20,
            "stock": 50,
            "createdAt": "2025-01-28T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 93,
            "title": "Logitech G502 X PLUS LIGHTSPEED Mouse",
            "slug": "logitech-g502-x-plus-lightspeed-mouse-lg502xl",
            "category": "Peripherals",
            "type": "Mouse",
            "parent": "Peripherals",
            "children": [],
            "tags": [
                "wireless",
                "gaming-mouse"
            ],
            "description": "Iconic gaming mouse with LIGHTSPEED wireless technology and RGB lighting.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=93",
            "sku": "LOG-G502XL",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 139.99,
            "originalPrice": 159.99,
            "discount": 12,
            "quantity": 30,
            "stock": 80,
            "createdAt": "2024-11-10T15:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 94,
            "title": "Acer Predator XB323QK NV 4K IPS Gaming Monitor",
            "slug": "acer-predator-xb323qk-nv-4k-ips-gaming-monitor-apx323qknv",
            "category": "Monitor",
            "type": "Display",
            "parent": "Monitor",
            "children": [],
            "tags": [
                "4k-gaming",
                "ips-panel"
            ],
            "description": "32-inch 4K IPS gaming monitor with high refresh rate for vibrant visuals and smooth gameplay.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=94",
            "sku": "ACR-PX323QKNV",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 799.00,
            "originalPrice": 850.00,
            "discount": 6,
            "quantity": 12,
            "stock": 35,
            "createdAt": "2025-03-05T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 95,
            "title": "Crucial P5 Plus 2TB NVMe SSD",
            "slug": "crucial-p5-plus-2tb-nvme-ssd-cp5p2t",
            "category": "Storage",
            "type": "SSD",
            "parent": "Storage",
            "children": [],
            "tags": [
                "pcie-gen4",
                "value"
            ],
            "description": "Excellent value PCIe Gen4 NVMe SSD for fast storage and improved system responsiveness.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=95",
            "sku": "CRU-P5P-2T",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 179.99,
            "originalPrice": 200.00,
            "discount": 10,
            "quantity": 40,
            "stock": 100,
            "createdAt": "2024-12-25T13:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 96,
            "title": "Google Chromecast with Google TV (4K)",
            "slug": "google-chromecast-google-tv-4k-gcgtv4k",
            "category": "Streaming Devices",
            "type": "Streaming Dongle",
            "parent": "Streaming Devices",
            "children": [],
            "tags": [
                "4k-hdr",
                "google-tv"
            ],
            "description": "Smart streaming dongle with Google TV for access to all your favorite apps in 4K HDR.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=96",
            "sku": "GGL-CC-GTV4K",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 49.99,
            "originalPrice": 59.99,
            "discount": 17,
            "quantity": 60,
            "stock": 150,
            "createdAt": "2025-01-15T09:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 97,
            "title": "TP-Link Kasa Smart Plug Mini (4-Pack)",
            "slug": "tp-link-kasa-smart-plug-mini-4-pack-tplksm4p",
            "category": "Smart Home",
            "type": "Smart Plug",
            "parent": "Smart Home",
            "children": [],
            "tags": [
                "smart-home",
                "voice-control"
            ],
            "description": "Control your devices from anywhere with these compact smart plugs. Compatible with Alexa and Google Assistant.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=97",
            "sku": "TPL-KSM-4P",
            "unit": "kit",
            "status": "active",
            "flashSale": true,
            "currentPrice": 39.99,
            "originalPrice": 49.99,
            "discount": 20,
            "quantity": 50,
            "stock": 120,
            "createdAt": "2024-11-01T14:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 98,
            "title": "Razer Kraken V3 HyperSense Gaming Headset",
            "slug": "razer-kraken-v3-hypersense-gaming-headset-rkv3hs",
            "category": "Audio",
            "type": "Gaming Headset",
            "parent": "Audio",
            "children": [],
            "tags": [
                "haptic-feedback",
                "gaming-audio"
            ],
            "description": "Gaming headset with haptic feedback for a truly immersive audio experience.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=98",
            "sku": "RZR-KV3HS",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 99.99,
            "originalPrice": 119.99,
            "discount": 17,
            "quantity": 30,
            "stock": 70,
            "createdAt": "2025-02-12T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 99,
            "title": "Samsung QN90C Neo QLED 75-inch 4K Smart TV",
            "slug": "samsung-qn90c-neo-qled-75-inch-4k-smart-tv-smqn90c75",
            "category": "Monitor",
            "type": "Smart TV",
            "parent": "Monitor",
            "children": [],
            "tags": [
                "neo-qled",
                "4k",
                "gaming-tv"
            ],
            "description": "Brilliant 75-inch Neo QLED 4K TV with Mini-LED technology for incredible contrast and brightness.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=99",
            "sku": "SMG-QN90C-75",
            "unit": "pcs",
            "status": "active",
            "flashSale": true,
            "currentPrice": 2499.00,
            "originalPrice": 2999.00,
            "discount": 17,
            "quantity": 5,
            "stock": 15,
            "createdAt": "2024-11-28T16:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        },
        {
            "id": 100,
            "title": "Sonos Era 300 Smart Speaker",
            "slug": "sonos-era-300-smart-speaker-snosera300",
            "category": "Audio",
            "type": "Smart Speaker",
            "parent": "Audio",
            "children": [],
            "tags": [
                "spatial-audio",
                "multi-room"
            ],
            "description": "Immersive spatial audio experience from a compact smart speaker with multi-room capabilities.",
            "images": [
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp",
                "https://i.ibb.co/C3wpzxNS/38903-000100-200x200.webp"
            ],
            "thumb": "https://placekitten.com/299/272?random=100",
            "sku": "SON-ERA300",
            "unit": "pcs",
            "status": "active",
            "flashSale": false,
            "currentPrice": 449.00,
            "originalPrice": 499.00,
            "discount": 10,
            "quantity": 15,
            "stock": 40,
            "createdAt": "2025-03-08T10:00:00",
            "updatedAt": "2025-07-16T13:23:54.483235"
        }
    ];


    return (
        <div className='my-16'>
            <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {
                    products.map((product) => <div
                        key={product.id}
                        className='relative flex flex-col rounded-md bg-white shadow-lg space-y-2.5'
                    >
                        <span className='w-fit absolute top-3 left-2.5 bg-purple-800 text-white px-2.5 py-0.5 text-[10px] rounded-e-full'>
                            Save: {(product.originalPrice - product.currentPrice).toFixed(2)}৳  (-{product.discount}%)
                        </span>
                        <div className='flex justify-center items-center grow p-6'>
                            <Image src={product.images[0]} alt={product.title} width={500} height={200} loading='eager' />
                        </div>
                        <div className='space-y-2 p-6 border-t-2 border-gray-100'>
                            <h1 title={product.title} className='font-medium text-sm line-clamp-1'>{product.title}</h1>
                            <p className='text-red-600 font-bold'>{product.currentPrice.toFixed(2)}৳ <span className='ms-3 line-through text-xs text-gray-600'>{product.originalPrice.toFixed(2)}৳</span></p>
                        </div>
                    </div>)
                }
            </section>
        </div>
    );
};

export default Products;