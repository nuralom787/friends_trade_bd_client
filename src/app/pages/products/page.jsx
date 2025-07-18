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
                "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg",
                "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg"
            ],
            "thumb": "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg",
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
                "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp",
                "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp"
            ],
            "thumb": "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp",
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
                "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg",
                "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg"
            ],
            "thumb": "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg",
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
                "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg",
                "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg"
            ],
            "thumb": "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg",
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
                "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png",
                "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png"
            ],
            "thumb": "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png",
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
                "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg",
                "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg"
            ],
            "thumb": "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg",
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
                "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp",
                "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp"
            ],
            "thumb": "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp",
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
                "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp",
                "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp"
            ],
            "thumb": "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp",
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
                "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp",
                "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp"
            ],
            "thumb": "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp",
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
                "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg",
                "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg"
            ],
            "thumb": "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg",
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
                "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp",
                "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp"
            ],
            "thumb": "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp",
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
                "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg",
                "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg"
            ],
            "thumb": "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg",
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
                "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg",
                "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg"
            ],
            "thumb": "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg",
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
                "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg",
                "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg"
            ],
            "thumb": "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg",
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
                "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp",
                "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp"
            ],
            "thumb": "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp",
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
            "id": 27,
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
            "id": 28,
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
            "id": 29,
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
            "id": 30,
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
            "id": 31,
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
            "id": 32,
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
            "id": 33,
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
            "id": 34,
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
            "id": 35,
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
            "id": 36,
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
                "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg",
                "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg"
            ],
            "thumb": "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg",
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
            "id": 37,
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
                "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp",
                "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp"
            ],
            "thumb": "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp",
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
            "id": 38,
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
                "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg",
                "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg"
            ],
            "thumb": "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg",
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
            "id": 39,
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
                "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg",
                "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg"
            ],
            "thumb": "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg",
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
            "id": 40,
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
                "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png",
                "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png"
            ],
            "thumb": "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png",
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
            "id": 41,
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
                "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg",
                "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg"
            ],
            "thumb": "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg",
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
            "id": 42,
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
                "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp",
                "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp"
            ],
            "thumb": "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp",
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
            "id": 43,
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
                "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp",
                "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp"
            ],
            "thumb": "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp",
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
            "id": 44,
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
                "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp",
                "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp"
            ],
            "thumb": "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp",
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
            "id": 45,
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
                "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg",
                "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg"
            ],
            "thumb": "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg",
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
            "id": 46,
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
                "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp",
                "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp"
            ],
            "thumb": "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp",
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
            "id": 47,
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
                "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg",
                "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg"
            ],
            "thumb": "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg",
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
            "id": 48,
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
                "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg",
                "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg"
            ],
            "thumb": "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg",
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
            "id": 49,
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
                "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg",
                "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg"
            ],
            "thumb": "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg",
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
            "id": 50,
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
                "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp",
                "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp"
            ],
            "thumb": "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp",
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
            "id": 51,
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
            "id": 52,
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
            "id": 53,
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
            "id": 54,
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
            "id": 55,
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
            "id": 56,
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
            "id": 57,
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
            "id": 58,
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
            "id": 59,
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
            "id": 60,
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
            "id": 61,
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
                "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg",
                "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg"
            ],
            "thumb": "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg",
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
            "id": 62,
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
                "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp",
                "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp"
            ],
            "thumb": "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp",
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
            "id": 63,
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
                "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg",
                "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg"
            ],
            "thumb": "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg",
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
            "id": 64,
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
                "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg",
                "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg"
            ],
            "thumb": "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg",
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
            "id": 65,
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
                "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png",
                "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png"
            ],
            "thumb": "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png",
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
            "id": 66,
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
                "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg",
                "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg"
            ],
            "thumb": "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg",
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
            "id": 67,
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
                "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp",
                "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp"
            ],
            "thumb": "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp",
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
            "id": 68,
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
                "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp",
                "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp"
            ],
            "thumb": "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp",
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
            "id": 69,
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
                "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp",
                "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp"
            ],
            "thumb": "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp",
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
            "id": 70,
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
                "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg",
                "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg"
            ],
            "thumb": "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg",
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
            "id": 71,
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
                "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp",
                "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp"
            ],
            "thumb": "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp",
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
            "id": 72,
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
                "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg",
                "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg"
            ],
            "thumb": "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg",
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
            "id": 73,
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
                "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg",
                "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg"
            ],
            "thumb": "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg",
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
            "id": 74,
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
                "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg",
                "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg"
            ],
            "thumb": "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg",
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
            "id": 75,
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
                "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp",
                "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp"
            ],
            "thumb": "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp",
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
            "id": 76,
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
                "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp",
                "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp"
            ],
            "thumb": "https://i.ibb.co/xtnfvGbJ/Seagate-Iron-Wolf-Pro-16-TB-NAS-HDD.webp",
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
            "id": 77,
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
            "id": 78,
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
            "id": 79,
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
            "id": 80,
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
            "id": 81,
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
            "id": 82,
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
            "id": 83,
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
            "id": 84,
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
            "id": 85,
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
            "id": 86,
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
            "id": 87,
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
                "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg",
                "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg"
            ],
            "thumb": "https://i.ibb.co/F4cykyc7/Keychron-Q2-QMK-Custom-Keyboard.jpg",
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
            "id": 88,
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
                "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp",
                "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp"
            ],
            "thumb": "https://i.ibb.co/QFtxZX8q/Elgato-Wave3-USB-Microphone.webp",
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
            "id": 89,
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
                "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg",
                "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg"
            ],
            "thumb": "https://i.ibb.co/fGKBm7Dc/Sony-WH-1000-XM5-Noise-Cancelling-Headphones.jpg",
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
            "id": 90,
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
                "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg",
                "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg"
            ],
            "thumb": "https://i.ibb.co/zgH8pC7/Creative-Pebble-V3-USB-C-Speakers.jpg",
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
            "id": 91,
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
                "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png",
                "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png"
            ],
            "thumb": "https://i.ibb.co/svNq1jX2/Netgear-Nighthawk-AX12-Wi-Fi-6-Router.png",
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
            "id": 92,
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
                "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg",
                "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg"
            ],
            "thumb": "https://i.ibb.co/99SkF912/TP-Link-TL-WA850-RE-Wi-Fi-Range-Extender.jpg",
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
            "id": 93,
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
                "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp",
                "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp"
            ],
            "thumb": "https://i.ibb.co/6JWxhhCd/Microsoft-Windows-11-Pro-OEM.webp",
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
            "id": 94,
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
                "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp",
                "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp"
            ],
            "thumb": "https://i.ibb.co/VWydTSCY/Adobe-Creative-Cloud-Annual-Subscription.webp",
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
            "id": 95,
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
                "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp",
                "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp"
            ],
            "thumb": "https://i.ibb.co/VYLQBR1c/Synology-Disk-Station-DS923-NAS.webp",
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
            "id": 96,
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
                "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg",
                "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg"
            ],
            "thumb": "https://i.ibb.co/Gv5gD4VJ/APC-Back-UPS-Pro-BR1500-MS-UPS.jpg",
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
            "id": 97,
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
                "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp",
                "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp"
            ],
            "thumb": "https://i.ibb.co/MxZX7yLL/NVIDIA-Ge-Force-RTX-5090-Next-Gen.webp",
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
            "id": 98,
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
                "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg",
                "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg"
            ],
            "thumb": "https://i.ibb.co/HD51r2HK/AMD-Ryzen-9-8950-X-Next-Gen.jpg",
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
            "id": 99,
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
                "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg",
                "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg"
            ],
            "thumb": "https://i.ibb.co/qYR1WtHZ/Steel-Series-Apex-Pro-Mini-Wireless.jpg",
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
            "id": 100,
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
                "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg",
                "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg"
            ],
            "thumb": "https://i.ibb.co/tP1dfZqM/Razer-Death-Adder-V3-Pro-Gaming-Mouse.jpg",
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
        }
    ];

    return (
        <div className='my-16'>
            <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 font-poppins'>
                {
                    products.map((product) => <div
                        key={product.id}
                        className='relative flex flex-col rounded-md bg-white shadow-lg space-y-2.5 group hover:cursor-pointer'
                    >
                        <span className='w-fit absolute top-3 left-2.5 bg-purple-800 text-white px-2.5 py-0.5 text-[10px] rounded-e-full z-10'>
                            Save: {(product.originalPrice - product.currentPrice).toFixed(2)}৳  (-{product.discount}%)
                        </span>
                        <div className='flex justify-center items-center grow p-6 scale-95 group-hover:scale-110 duration-500'>
                            <Image src={product.images[0]} alt={product.title} width={300} height={200} loading='lazy' />
                        </div>
                        <div className='space-y-2 p-6 border-t-2 border-gray-100'>
                            <h1 title={product.title} className='font-medium text-sm line-clamp-1 group-hover:underline'>{product.title}</h1>
                            <p className='text-red-600 font-bold'>{product.currentPrice.toFixed(2)}৳ <span className='ms-3 line-through text-xs text-gray-600'>{product.originalPrice.toFixed(2)}৳</span></p>
                        </div>
                    </div>)
                }
            </section>
            <section className='my-5 text-center'>
                {/* <button
                    type='button'
                    onClick={loadMore}
                    className='text-white font-medium text-base bg-[#eb9235] px-5 py-1.5 rounded cursor-pointer'>
                    Load More
                </button> */}
            </section>
        </div>
    );
};

export default Products;