function toggle_panel(panel, background_layer) {
            if (panel.classList.contains('speed-in')) {
                panel.classList.remove('speed-in');
                background_layer.classList.remove('is-visible');
            } else {
                panel.classList.add('speed-in');
                background_layer.classList.add('is-visible');
            }
     }