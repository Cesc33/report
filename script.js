document.getElementById("sendBtn").addEventListener("click", function () {
  const phoneNumber = document.getElementById("whatsappNumber").value.trim();

  if (!/^\d{10,15}$/.test(phoneNumber)) {
    alert("Enter a valid number");
    return;
  }

  const data = {
    date: document.getElementById("date").value,
    supervisor: document.getElementById("supervisor").value,
    opening: document.getElementById("opening").value,
    closing: document.getElementById("closing").value,
    service: document.getElementById("service").value,
    outOfStock: document.getElementById("outOfStock").value,
    deliveroo: document.getElementById("deliveroo").value,
    supplierIssues: document.getElementById("supplierIssues").value,
    guestComplaints: document.getElementById("guestComplaints").value,
    ordering: document.getElementById("ordering").value,
    maintenance: document.getElementById("maintenance").value,
    cleaning: document.getElementById("cleaning").value,
    prepNotes: document.getElementById("prepNotes").value,
    paperwork: document.getElementById("paperwork").value,
    safety: document.getElementById("safety").value,
    docs: document.getElementById("docs").value,
    otherIssues: document.getElementById("otherIssues").value,
  };

  const message = `
Pitt Bros BOH Supervisors Daily Report
Date: ${data.date}
Supervisor: ${data.supervisor}
Opening: ${data.opening}
Closing: ${data.closing}

Service:
${data.service}

Items out of stock on menu:
${data.outOfStock}

Deliveroo:
${data.deliveroo}

Supplier Issues:
${data.supplierIssues}

Guest Issues / Complaints:
${data.guestComplaints}

Ordering for the next day:
${data.ordering}

Maintenance Issues:
${data.maintenance}

Kitchen / Upstairs Cleaning Status:
${data.cleaning}

Prep Notes for the next day:
${data.prepNotes}

Paperwork completed:
${data.paperwork}

Safety Checks:
${data.safety}

Attach waste/order/audit sheet on Monday:
${data.docs}

Any other issues:
${data.otherIssues}
      `.trim();

  // Atualiza pré-visualização
  document.getElementById("preview").textContent = message;

  if (confirm("Do you want to send this report via WhatsApp??")) {
    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    window.location.href = whatsappURL;
  }
});
