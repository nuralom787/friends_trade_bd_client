import Image from 'next/image';
import React from 'react';

const ProductDetailsPage = ({ params }) => {
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
                "https://i.ibb.co/hRRDPXLH/Corsair-Dominator-Platinum-RGB-32-GB-DDR5.webp",
                "https://i.ibb.co/hRRDPXLH/Corsair-Dominator-Platinum-RGB-32-GB-DDR5.webp"
            ],
            "thumb": "https://i.ibb.co/hRRDPXLH/Corsair-Dominator-Platinum-RGB-32-GB-DDR5.webp",
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
                "https://i.ibb.co/0pw4qmNj/LG-C3-OLED-65-inch-4-K-Smart-TV.webp",
                "https://i.ibb.co/0pw4qmNj/LG-C3-OLED-65-inch-4-K-Smart-TV.webp"
            ],
            "thumb": "https://i.ibb.co/0pw4qmNj/LG-C3-OLED-65-inch-4-K-Smart-TV.webp",
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
                "https://i.ibb.co/1YNm4tPG/Noctua-NH-D15-CPU-Cooler.jpg",
                "https://i.ibb.co/1YNm4tPG/Noctua-NH-D15-CPU-Cooler.jpg"
            ],
            "thumb": "https://i.ibb.co/1YNm4tPG/Noctua-NH-D15-CPU-Cooler.jpg",
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
                "https://i.ibb.co/j9z2kN7C/Fractal-Design-Meshify-2-XL-Case.jpg",
                "https://i.ibb.co/j9z2kN7C/Fractal-Design-Meshify-2-XL-Case.jpg"
            ],
            "thumb": "https://i.ibb.co/j9z2kN7C/Fractal-Design-Meshify-2-XL-Case.jpg",
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
                "https://i.ibb.co/hxYhJ16R/EVGA-Super-NOVA-850-P5-PSU.png",
                "https://i.ibb.co/hxYhJ16R/EVGA-Super-NOVA-850-P5-PSU.png"
            ],
            "thumb": "https://i.ibb.co/hxYhJ16R/EVGA-Super-NOVA-850-P5-PSU.png",
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
                "https://i.ibb.co/wZNHZL2D/Bose-Quiet-Comfort-45-Headphones.jpg",
                "https://i.ibb.co/wZNHZL2D/Bose-Quiet-Comfort-45-Headphones.jpg"
            ],
            "thumb": "https://i.ibb.co/wZNHZL2D/Bose-Quiet-Comfort-45-Headphones.jpg",
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
                "https://i.ibb.co/NgV2vjfG/Blue-Yeti-USB-Microphone.jpg",
                "https://i.ibb.co/NgV2vjfG/Blue-Yeti-USB-Microphone.jpg"
            ],
            "thumb": "https://i.ibb.co/NgV2vjfG/Blue-Yeti-USB-Microphone.jpg",
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
                "https://i.ibb.co/ZpfS9y5P/Ubiquiti-Uni-Fi-Dream-Machine-Pro.png",
                "https://i.ibb.co/ZpfS9y5P/Ubiquiti-Uni-Fi-Dream-Machine-Pro.png"
            ],
            "thumb": "https://i.ibb.co/ZpfS9y5P/Ubiquiti-Uni-Fi-Dream-Machine-Pro.png",
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
                "https://i.ibb.co/pBGXhT6k/Trend-Micro-Maximum-Security-1-Year-3-Devices.webp",
                "https://i.ibb.co/pBGXhT6k/Trend-Micro-Maximum-Security-1-Year-3-Devices.webp"
            ],
            "thumb": "https://i.ibb.co/pBGXhT6k/Trend-Micro-Maximum-Security-1-Year-3-Devices.webp",
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
                "https://i.ibb.co/39LPNCh7/Logitech-MX-Master-3-S-Wireless-Mouse.jpg",
                "https://i.ibb.co/39LPNCh7/Logitech-MX-Master-3-S-Wireless-Mouse.jpg"
            ],
            "thumb": "https://i.ibb.co/39LPNCh7/Logitech-MX-Master-3-S-Wireless-Mouse.jpg",
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
            "id": 37,
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
            "id": 38,
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
            "id": 39,
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
            "id": 40,
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
            "id": 41,
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
            "id": 42,
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
            "id": 43,
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
            "id": 44,
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
            "id": 45,
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
            "id": 46,
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
            "id": 47,
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
            "id": 48,
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
            "id": 49,
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
            "id": 50,
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
            "id": 51,
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
            "id": 52,
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
            "id": 53,
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
            "id": 54,
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
            "id": 55,
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
            "id": 56,
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
            "id": 57,
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
            "id": 58,
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
            "id": 59,
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
            "id": 60,
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
            "id": 61,
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
                "https://i.ibb.co/hRRDPXLH/Corsair-Dominator-Platinum-RGB-32-GB-DDR5.webp",
                "https://i.ibb.co/hRRDPXLH/Corsair-Dominator-Platinum-RGB-32-GB-DDR5.webp"
            ],
            "thumb": "https://i.ibb.co/hRRDPXLH/Corsair-Dominator-Platinum-RGB-32-GB-DDR5.webp",
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
            "id": 62,
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
                "https://i.ibb.co/0pw4qmNj/LG-C3-OLED-65-inch-4-K-Smart-TV.webp",
                "https://i.ibb.co/0pw4qmNj/LG-C3-OLED-65-inch-4-K-Smart-TV.webp"
            ],
            "thumb": "https://i.ibb.co/0pw4qmNj/LG-C3-OLED-65-inch-4-K-Smart-TV.webp",
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
            "id": 63,
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
                "https://i.ibb.co/1YNm4tPG/Noctua-NH-D15-CPU-Cooler.jpg",
                "https://i.ibb.co/1YNm4tPG/Noctua-NH-D15-CPU-Cooler.jpg"
            ],
            "thumb": "https://i.ibb.co/1YNm4tPG/Noctua-NH-D15-CPU-Cooler.jpg",
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
            "id": 64,
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
                "https://i.ibb.co/j9z2kN7C/Fractal-Design-Meshify-2-XL-Case.jpg",
                "https://i.ibb.co/j9z2kN7C/Fractal-Design-Meshify-2-XL-Case.jpg"
            ],
            "thumb": "https://i.ibb.co/j9z2kN7C/Fractal-Design-Meshify-2-XL-Case.jpg",
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
            "id": 65,
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
                "https://i.ibb.co/hxYhJ16R/EVGA-Super-NOVA-850-P5-PSU.png",
                "https://i.ibb.co/hxYhJ16R/EVGA-Super-NOVA-850-P5-PSU.png"
            ],
            "thumb": "https://i.ibb.co/hxYhJ16R/EVGA-Super-NOVA-850-P5-PSU.png",
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
            "id": 66,
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
                "https://i.ibb.co/wZNHZL2D/Bose-Quiet-Comfort-45-Headphones.jpg",
                "https://i.ibb.co/wZNHZL2D/Bose-Quiet-Comfort-45-Headphones.jpg"
            ],
            "thumb": "https://i.ibb.co/wZNHZL2D/Bose-Quiet-Comfort-45-Headphones.jpg",
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
            "id": 67,
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
                "https://i.ibb.co/NgV2vjfG/Blue-Yeti-USB-Microphone.jpg",
                "https://i.ibb.co/NgV2vjfG/Blue-Yeti-USB-Microphone.jpg"
            ],
            "thumb": "https://i.ibb.co/NgV2vjfG/Blue-Yeti-USB-Microphone.jpg",
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
            "id": 68,
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
                "https://i.ibb.co/ZpfS9y5P/Ubiquiti-Uni-Fi-Dream-Machine-Pro.png",
                "https://i.ibb.co/ZpfS9y5P/Ubiquiti-Uni-Fi-Dream-Machine-Pro.png"
            ],
            "thumb": "https://i.ibb.co/ZpfS9y5P/Ubiquiti-Uni-Fi-Dream-Machine-Pro.png",
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
            "id": 69,
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
                "https://i.ibb.co/pBGXhT6k/Trend-Micro-Maximum-Security-1-Year-3-Devices.webp",
                "https://i.ibb.co/pBGXhT6k/Trend-Micro-Maximum-Security-1-Year-3-Devices.webp"
            ],
            "thumb": "https://i.ibb.co/pBGXhT6k/Trend-Micro-Maximum-Security-1-Year-3-Devices.webp",
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
            "id": 70,
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
                "https://i.ibb.co/39LPNCh7/Logitech-MX-Master-3-S-Wireless-Mouse.jpg",
                "https://i.ibb.co/39LPNCh7/Logitech-MX-Master-3-S-Wireless-Mouse.jpg"
            ],
            "thumb": "https://i.ibb.co/39LPNCh7/Logitech-MX-Master-3-S-Wireless-Mouse.jpg",
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
        }
    ];

    const id = params.id;
    const filteredData = products.find(p => p.id === parseFloat(id));

    return (
        <div className=''>
            <section className='bg-white mb-10'>
                <section className='container-width px-3 md:px-6 py-12 flex flex-col md:flex-row items-start gap-8 font-poppins'>
                    <div>
                        <Image src={filteredData?.images[0]} alt={filteredData?.title} height={500} width={500} loading='lazy' />
                        <div className='flex items-center gap-4'>
                            {
                                filteredData?.images?.map((image, idx) => <Image
                                    key={idx}
                                    src={image}
                                    alt={filteredData?.title}
                                    height={100}
                                    width={100}
                                    loading='lazy'
                                />)
                            }
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <h1 className='text-3xl text-[#151515] font-bold font-marvel'>{filteredData?.title}</h1>
                        <div className='flex items-center gap-3 text-gray-500 text-xs font-medium'>
                            <span className='inline-flex items-center gap-2 bg-gray-200 px-3.5 py-1.5 rounded-full'>
                                Price: <span className='text-black'>
                                    {filteredData?.currentPrice.toFixed(2)}৳</span>
                            </span>
                            <span className='inline-flex items-center gap-2 bg-gray-200 px-3.5 py-1.5 rounded-full'>
                                Reguler Price: <span className='text-black'>
                                    {filteredData?.originalPrice.toFixed(2)}৳</span>
                            </span>
                            <span className='inline-flex items-center gap-2 bg-gray-200 px-3.5 py-1.5 rounded-full'>
                                Status: <span className='text-black'>
                                    {filteredData?.stock}</span>
                            </span>
                            <span className='inline-flex items-center gap-2 bg-gray-200 px-3.5 py-1.5 rounded-full'>
                                Product Code: <span className='text-black'>
                                    {filteredData?.sku}</span>
                            </span>
                        </div>
                        <p className='text-sm font-medium'>{filteredData?.description}</p>
                        <h1 className='font-bold text-3xl text-red-600'>{filteredData?.currentPrice.toFixed(2)}৳
                            <span className='ms-3 line-through text-lg text-gray-600 font-semibold'>{filteredData?.originalPrice.toFixed(2)}৳</span>
                        </h1>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default ProductDetailsPage;