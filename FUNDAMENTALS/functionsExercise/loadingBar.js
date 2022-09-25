function loadingBar(percent) {
    if (percent == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }
    if (percent == 10) {
        console.log('10% [%.........]');
        console.log('Still loading...');
    }
    if (percent == 20) {
        console.log('20% [%%........]');
        console.log('Still loading...');
    }
    if (percent == 30) {
        console.log('30% [%%%.......]');
        console.log('Still loading...');
    }
    if (percent == 40) {
        console.log('40% [%%%%......]');
        console.log('Still loading...');
    }
    if (percent == 50) {
        console.log('50% [%%%%%.....]');
        console.log('Still loading...');
    }
    if (percent == 60) {
        console.log('60% [%%%%%%....]');
        console.log('Still loading...');
    }
    if (percent == 70) {
        console.log('70% [%%%%%%%...]');
        console.log('Still loading...');
    }
    if (percent == 80) {
        console.log('80% [%%%%%%%%..]');
        console.log('Still loading...');
    }
    if (percent == 90) {
        console.log('90% [%%%%%%%%%.]');
        console.log('Still loading...');
    }
}

loadingBar(30);