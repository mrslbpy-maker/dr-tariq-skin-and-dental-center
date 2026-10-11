// CLINICAL CASE DATA WITH IMAGES
    const casesData = {
      case1: {
        title: "Case 104: Chronic Facial Melasma & Dermal Hyperpigmentation",
        desc: "Clinical diagnosis: Mixed epidermal-dermal melasma resistant to topical hydroquinone regimens.",
        doctor: "Prof. Dr. Tariq Rashid (FCPS)",
        protocol: "Combination Medical Peel + Low-Fluence Laser Toning",
        duration: "4 Sessions (3-week intervals)",
        downtime: "Minimal Flaking (24-48 hrs)",
        servicePrefill: "Melasma & Pigmentation Reversal",
        beforeImg: "assets/skin_before.jpg",
        afterImg: "assets/skin_after.jpg"
      },
      case2: {
        title: "Case 218: Enamel Dysplasia & Smile Discoloration Makeover",
        desc: "Severe intrinsic fluorosis discoloration with irregular anterior enamel margins.",
        doctor: "Dr. Saira Arshad (MSc UK, MFDRCSI)",
        protocol: "Minimally Invasive CAD/CAM Porcelain Veneers",
        duration: "2 Appointments (Preparation & Final Bonding)",
        downtime: "Immediate Aesthetic Function",
        servicePrefill: "Zirconia & Veneers",
        beforeImg: "assets/dental_before.jpg",
        afterImg: "assets/dental_after.jpg"
      }
    };

    let currentBACaseKey = 'case1';

    function initBACanvas(caseKey) {
      const c = casesData[caseKey];
      document.getElementById('baCaseTitle').innerText = c.title;
      document.getElementById('baCaseDesc').innerText = c.desc;
      document.getElementById('baDoctor').innerText = c.doctor;
      document.getElementById('baProtocol').innerText = c.protocol;
      document.getElementById('baDuration').innerText = c.duration;
      document.getElementById('baDowntime').innerText = c.downtime;
      document.getElementById('baBookBtn').onclick = () => setServiceInForm(c.servicePrefill);

      const afterLayer = document.getElementById('baAfterLayer');
      const beforeInner = document.getElementById('baBeforeInner');

      afterLayer.style.backgroundImage = `url("${c.afterImg}")`;
      beforeInner.style.backgroundImage = `url("${c.beforeImg}")`;

      setBASlider(50);
    }

    function switchBACase(caseKey, btn) {
      currentBACaseKey = caseKey;
      document.querySelectorAll('.ba-case-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      initBACanvas(caseKey);
    }

    function setBASlider(val) {
      document.getElementById('baBeforeLayer').style.width = val + '%';
      document.getElementById('baHandle').style.left = val + '%';
      document.getElementById('baRangeInput').value = val;
    }

    // Initialize Case 1 on load
    initBACanvas('case1');

    // ESTIMATOR DATA
    const estimatorData = {
      laser: {
        badge: "Dermatology Protocol",
        title: "Painless Laser Hair Removal",
        summary: "Medical chilled-tip diode laser safely destroys hair follicles permanently with zero downtime.",
        sessions: "6 to 8 Sessions",
        interval: "4 – 6 Weeks",
        recovery: "Zero Downtime (Immediate return)",
        prep: "Shave area 24 hrs prior, avoid sun & waxing",
        doc: "Dr. Navaira Tariq",
        serviceName: "Laser Hair Removal"
      },
      hydra: {
        badge: "Aesthetic Facial",
        title: "Medical HydraFacial Elite",
        summary: "Vortex vacuum extraction of blackheads followed by clinical peptide and hyaluronic infusion.",
        sessions: "1 to 4 Monthly Maintenance",
        interval: "4 Weeks",
        recovery: "Instant Radiance (Zero Downtime)",
        prep: "Discontinue retinoids 48 hrs prior",
        doc: "Aesthetic Clinical Team",
        serviceName: "HydraFacial"
      },
      veneers: {
        badge: "Cosmetic Dentistry",
        title: "Zirconia Crowns & Porcelain Veneers",
        summary: "Digital 3D CAD/CAM smile transformation restoring broken, discolored, or uneven teeth.",
        sessions: "2 to 3 Visits",
        interval: "1 – 2 Weeks",
        recovery: "Immediate Smile Function",
        prep: "Full clinical photography & digital impression",
        doc: "Dr. Saira Arshad (MSc UK)",
        serviceName: "Zirconia & Veneers"
      },
      rct: {
        badge: "Endodontics",
        title: "Single-Visit Painless Root Canal (RCT)",
        summary: "Electronic apex locator and rotary nickel-titanium instrumentation under profound local anesthesia.",
        sessions: "1 Visit (Occasionally 2 for acute infection)",
        interval: "Single Procedure",
        recovery: "24 Hours local settling",
        prep: "Pre-procedure digital periapical radiograph",
        doc: "Dr. Ali Abu Bakar & Dr. Saira Arshad",
        serviceName: "Painless RCT"
      },
      aligners: {
        badge: "Orthodontics",
        title: "Invisible Clear Aligners",
        summary: "Transparent medical polyurethane trays sequentially shifting misaligned teeth discreetly.",
        sessions: "Tray change every 10–14 days",
        interval: "6 – 12 Months Total Duration",
        recovery: "Completely painless & removable",
        prep: "Intraoral 3D digital scan & orthodontic plan",
        doc: "Dr. Saira Arshad",
        serviceName: "Clear Aligners"
      }
    };

    let activeEstKey = 'laser';

    function loadEstimator(key, btn) {
      activeEstKey = key;
      document.querySelectorAll('.estimator-option-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const d = estimatorData[key];
      document.getElementById('estBadge').innerText = d.badge;
      document.getElementById('estTitle').innerText = d.title;
      document.getElementById('estSummary').innerText = d.summary;
      document.getElementById('estSessions').innerText = d.sessions;
      document.getElementById('estInterval').innerText = d.interval;
      document.getElementById('estRecovery').innerText = d.recovery;
      document.getElementById('estPrep').innerText = d.prep;
      document.getElementById('estDoc').innerText = d.doc;
    }

    function prefillEstimatorService() {
      const d = estimatorData[activeEstKey];
      setServiceInForm(d.serviceName);
    }

    // LIVE CLINIC STATUS
    function evaluateClinicStatus() {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const pktTime = new Date(utc + (3600000 * 5));
      const day = pktTime.getDay();
      const hour = pktTime.getHours();
      
      const badge = document.getElementById('liveStatusBadge');
      const text = document.getElementById('liveStatusText');

      if (day === 6) {
        badge.className = 'live-status closed';
        text.innerText = 'Closed Today (Saturday) • Opens Sunday at 12 PM';
      } else if (hour >= 12 && hour < 20) {
        badge.className = 'live-status open';
        text.innerText = 'Open Now • Closes at 8:00 PM';
      } else if (hour < 12) {
        badge.className = 'live-status closed';
        text.innerText = 'Closed • Opens Today at 12:00 PM';
      } else {
        badge.className = 'live-status closed';
        text.innerText = 'Closed for the night • Opens at 12:00 PM';
      }
    }
    evaluateClinicStatus();

    // SPECIALTY FILTER
    function filterSpecialty(type, btn) {
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cards = document.querySelectorAll('.service-card');
      cards.forEach(card => {
        if (type === 'all' || card.dataset.category === type) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // TRIAGE DATA & LOGIC
    const triageData = {
      laser: {
        title: "Body Laser Hair Removal",
        options: [
          { label: "Full Body Smoothness", desc: "Arms, legs, underarms & body" },
          { label: "Facial Hair Reduction", desc: "Upper lip, chin, sideburns" },
          { label: "Beard Line Shaping (Men)", desc: "Sharp, clean cheek contour" }
        ],
        protocol: "Triple Wavelength Painless Diode Protocol",
        desc: "Equipped with cooling sapphire contact tip. Melanin-selective targeting safely destroys hair follicles with zero thermal injury.",
        doc: "Dr. Navaira Tariq",
        sessions: "6 - 8 Sessions (4-6 weeks apart)",
        downtime: "None (Immediate return to routine)"
      },
      skin: {
        title: "Skin & Complexion",
        options: [
          { label: "Active Acne & Breakouts", desc: "Inflammatory pimples & congestion" },
          { label: "Stubborn Melasma / Dark Spots", desc: "Hormonal patches & sun damage" },
          { label: "Dull Skin / Wedding Glow", desc: "Instant hydration & radiance" }
        ],
        protocol: "Medical HydraFacial + Targeted Dermaceuticals",
        desc: "Combines salicylic purification with medical-grade glutathione and hyaluronic micro-infusion under dermatological protocol.",
        doc: "Prof. Dr. Tariq Rashid",
        sessions: "3 - 5 Sessions",
        downtime: "Zero to 24 Hours slight erythema"
      },
      smile: {
        title: "Smile Makeover",
        options: [
          { label: "Crooked or Gapped Teeth", desc: "Misalignment without metal wires" },
          { label: "Stained / Discolored Enamel", desc: "Deep coffee or tea yellowing" },
          { label: "Chipped or Irregular Shape", desc: "Restoring tooth proportion" }
        ],
        protocol: "CAD/CAM Zirconia Veneers & Smile Alignment",
        desc: "Digitally designed porcelain or zirconia laminates bonded to anterior teeth for a permanent, stain-resistant natural smile.",
        doc: "Dr. Saira Arshad (MSc UK)",
        sessions: "2 - 3 Appointments",
        downtime: "Minimal adjustment period"
      },
      dental_pain: {
        title: "Restorative Dental Care",
        options: [
          { label: "Severe Toothache / Sensitivity", desc: "Pulp nerve inflammation" },
          { label: "Missing Tooth Replacement", desc: "Permanent titanium implant" },
          { label: "Cavity / Broken Filling", desc: "Tooth-colored aesthetic resin" }
        ],
        protocol: "Single-Visit Precision Root Canal (RCT) / Implants",
        desc: "Using electronic apex locators and flexible rotary nickel-titanium instrumentation for painless restoration.",
        doc: "Dr. Ali Abu Bakar & Dr. Saira Arshad",
        sessions: "1 - 2 Visits",
        downtime: "24 Hours local settling"
      }
    };

    let currentTriage = null;

    function selectTriageCategory(catKey) {
      currentTriage = triageData[catKey];
      document.getElementById('triageStage1').style.display = 'none';
      document.getElementById('triageStage2').style.display = 'block';
      document.getElementById('step2Indicator').classList.add('active');

      const container = document.getElementById('stage2Options');
      container.innerHTML = '';
      currentTriage.options.forEach(opt => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = `<h4>${opt.label}</h4><p>${opt.desc}</p>`;
        card.onclick = () => renderTriageResult(opt.label);
        container.appendChild(card);
      });
    }

    function renderTriageResult() {
      document.getElementById('triageStage2').style.display = 'none';
      document.getElementById('triageStage3').style.display = 'block';
      document.getElementById('step3Indicator').classList.add('active');

      document.getElementById('resProtocolName').innerText = currentTriage.protocol;
      document.getElementById('resDescription').innerText = currentTriage.desc;
      document.getElementById('resDoctor').innerText = currentTriage.doc;
      document.getElementById('resSessions').innerText = currentTriage.sessions;
      document.getElementById('resDowntime').innerText = currentTriage.downtime;
    }

    function resetTriage() {
      document.getElementById('triageStage1').style.display = 'block';
      document.getElementById('triageStage2').style.display = 'none';
      document.getElementById('triageStage3').style.display = 'none';
      document.getElementById('step2Indicator').classList.remove('active');
      document.getElementById('step3Indicator').classList.remove('active');
      currentTriage = null;
    }

    function prefillBookingService() {
      if (currentTriage) {
        document.getElementById('bookTreatment').value = currentTriage.protocol;
      }
    }

    function setServiceInForm(serviceName) {
      document.getElementById('bookTreatment').value = serviceName;
    }

    // BOOKING STEPPER
    function updateDoctorDropdown(dept) {
      const docSelect = document.getElementById('bookDoctor');
      docSelect.innerHTML = '';

      if (dept === 'dermatology') {
        docSelect.innerHTML = `
          <option value="Prof. Dr. Tariq Rashid">Prof. Dr. Tariq Rashid (Chief Dermatologist)</option>
          <option value="Dr. Navaira Tariq">Dr. Navaira Tariq (Aesthetics & Laser Specialist)</option>
        `;
      } else if (dept === 'dental') {
        docSelect.innerHTML = `
          <option value="Dr. Saira Arshad">Dr. Saira Arshad (MSc UK, Cosmetic Dentist)</option>
          <option value="Dr. Ali Abu Bakar">Dr. Ali Abu Bakar (Oral Surgery Specialist)</option>
        `;
      } else {
        docSelect.innerHTML = `<option value="">-- First Select Department Above --</option>`;
      }
    }

    function goToStep(step) {
      if (step === 2) {
        const spec = document.getElementById('bookSpecialty').value;
        const treat = document.getElementById('bookTreatment').value;
        if (!spec || !treat) {
          alert('Please fill out department and primary concern.');
          return;
        }
      }
      if (step === 3) {
        const date = document.getElementById('bookDate').value;
        const slot = document.getElementById('selectedTimeSlot').value;
        if (!date || !slot) {
          alert('Please pick a consultation date and available time slot.');
          return;
        }
      }

      document.getElementById('bookingStep1').style.display = (step === 1) ? 'block' : 'none';
      document.getElementById('bookingStep2').style.display = (step === 2) ? 'block' : 'none';
      document.getElementById('bookingStep3').style.display = (step === 3) ? 'block' : 'none';

      document.getElementById('node1').className = (step >= 1) ? 'step-node active' : 'step-node';
      document.getElementById('node2').className = (step >= 2) ? 'step-node active' : 'step-node';
      document.getElementById('node3').className = (step >= 3) ? 'step-node active' : 'step-node';
    }

    function selectSlot(slotText, element) {
      document.querySelectorAll('.slot-pill').forEach(el => el.classList.remove('selected'));
      element.classList.add('selected');
      document.getElementById('selectedTimeSlot').value = slotText;
    }

    function validateBookingDate(input) {
      const selected = new Date(input.value);
      if (selected.getDay() === 6) {
        alert('Please note: Dr. Tariq Skin and Dental Center is closed on Saturdays. Kindly select another day (Sun - Fri).');
        input.value = '';
      }
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    document.getElementById('bookDate').min = `${yyyy}-${mm}-${dd}`;

    let lastBooking = {};

    function handleBookingSubmit(e) {
      e.preventDefault();
      
      lastBooking = {
        name: document.getElementById('patientName').value,
        phone: document.getElementById('patientPhone').value,
        doctor: document.getElementById('bookDoctor').value,
        treatment: document.getElementById('bookTreatment').value,
        date: document.getElementById('bookDate').value,
        time: document.getElementById('selectedTimeSlot').value,
        notes: document.getElementById('patientNotes').value || 'None'
      };

      document.getElementById('modalSummaryBox').innerHTML = `
        <p><strong>Patient:</strong> ${lastBooking.name}</p>
        <p><strong>Specialist:</strong> ${lastBooking.doctor}</p>
        <p><strong>Procedure:</strong> ${lastBooking.treatment}</p>
        <p><strong>Date & Time:</strong> ${lastBooking.date} (${lastBooking.time})</p>
        <p><strong>Location:</strong> Plaza 4-A, Union Living, Mohlanwal Rd, Chung, Lahore</p>
      `;

      const waMsg = encodeURIComponent(
        `*New Appointment Request - Dr. Tariq Skin and Dental Center*\n` +
        `• Patient: ${lastBooking.name}\n` +
        `• Doctor: ${lastBooking.doctor}\n` +
        `• Service: ${lastBooking.treatment}\n` +
        `• Preferred Slot: ${lastBooking.date} at ${lastBooking.time}\n` +
        `• Contact: ${lastBooking.phone}\n` +
        `• Notes: ${lastBooking.notes}`
      );
      document.getElementById('modalWhatsAppLink').href = `https://wa.me/923215311883?text=${waMsg}`;

      document.getElementById('confirmModal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('confirmModal').style.display = 'none';
      document.getElementById('bookingForm').reset();
      goToStep(1);
    }

    function downloadCalendarInvite() {
      if (!lastBooking.date) return;
      const cleanDate = lastBooking.date.replace(/-/g, '');
      const icsData = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Dr Tariq Skin and Dental Center//Appointment//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Appointment with ${lastBooking.doctor}
DESCRIPTION:Procedure: ${lastBooking.treatment}\nPatient: ${lastBooking.name}\nClinic Phone: +92 321 5311883
LOCATION:Plaza 4-A, First Floor, Union Living, Main Mohlanwal Road, Chung, Lahore
DTSTART;VALUE=DATE:${cleanDate}
DTEND;VALUE=DATE:${cleanDate}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', `appointment_dr_tariq_${cleanDate}.ics`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }