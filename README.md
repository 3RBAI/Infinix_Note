# Infinix_Note 
ROM designed to unlock root privileges 
Infinix_Note_50X_5G_X6857_MT6878_15.1.2.128SP02_OP001PF001AZ_101025_MXML
إليك الخطوات الأساسية:

⚠️ تحذيرات مهمة أولاً:

· فك قفل البوت لودر سيحذف جميع البيانات على جهازك
· قد يفقد الجهاز الضمان
· تأكد من عمل نسخة احتياطية من البيانات المهمة

الخطوات الأساسية:

1. تمكين خيارات المطور (Developer Options)

· اذهب إلى الإعدادات → حول الهاتف
· اضغط 7 مرات على رقم البناء (Build Number)
· عد إلى الإعدادات الرئيسية وستجد خيارات المطور

2. تمكين تصحيح أخطاء USB

· في خيارات المطور، فعّل تصحيح أخطاء USB
· فعّل فك قفل OEM (إن وجد)

3. استخدام أوامر ADB و Fastboot

```bash
# إعادة تشغيل الجهاز إلى وضع Fastboot
adb reboot bootloader

# أو
fastboot reboot bootloader

# التحقق من اتصال الجهاز
fastboot devices
```

4. فك قفل البوت لودر

```bash
# الأمر الأساسي (قد يختلف حسب الشركة المصنعة)
fastboot flashing unlock

# أو لبعض الأجهزة
fastboot oem unlock
```
```التواصل 

#https://github.com/3RBAI
#t.me/a3b6iii
https://wa.me/+96895596569
email: wolfonlyoman@gmail.com
ملاحظات خاصة بجهاز Infinix:

· قد تحتاج إلى الحصول على كود فك القفل من موقع Infinix الرسمي
· بعض أجهزة Infinix تستخدم أوامر خاصة
· تحقق من إجراءات الجهاز المحدد على موقع XDA Developers
![Screenshot_20260103-233207](https://github.com/user-attachments/assets/342e77f7-495f-470b-a5ee-455b796cd91f)
