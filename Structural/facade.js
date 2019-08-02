/*
	Facade pattern: It's a structural pattern used to provide a unified and simpler, public-facing interface for 
	ease of use that shields away from complexities of its consisting subsystems or subclasses

	The use of this pattern is very common in libraries like jQuery. 
*/

	let currentId = 0;

	class ComplaintRegistry {

		registerComplaint(customer, type, details) {
			const id = ComplaintRegistry.uniqueIdGenerator();
			let registry;
			if (type == "service") {
				registry = new ServiceComplaint();
			}
			else {
				registry = new ProductComplaint();
			}
			return registry.addComplaint({id, customer, details});
		}

		static uniqueIdGenerator() {
			return ++currentId;
		}
	}

	class Complaints {
		constructor() {
			this.complaints = [];
		}

		addComplaint(complaint) {
			this.complaints.push(complaint);
			return this.replyMessage(complaint);
		}

		getComplaint(id) {
			return this.complaints.find(complaint => complaints.id === id);
		}

		//replyMessage(complaint) {}
	}

	class ProductComplaint extends Complaints {
		constructor() {
			super();
			if (ProductComplaint.exists) {
				return ProductComplaint.instance;
			}
			ProductComplaint.exists = true;
			ProductComplaint.instance = this;
			return this;
		}

		replyMessage({ id, customer, details }) {
			return `Complaint No ${id} reported by ${customer} regarding ${details} have been filed with the Products Complaint Department`;
		}
	}

    class ServiceComplaint extends Complaints {
    	constructor() {
    		super();
    		if (ServiceComplaint.exists) {
    			return ServiceComplaint.instance;
    		}
    		ServiceComplaint.exists = true;
    		ServiceComplaint.instance = this;
    		return this;
    	}
    	replyMessage({ id, customer, details }) {
    		return `Complaint No ${id} reported by ${customer} regarding ${details} have been filed with the Service Complaint Department`;
    	}
    }

    //usage
    const registry = new ComplaintRegistry();
    const reportService = registry.registerComplaint('Martha', 'service', 'availability');
    const reportProduct = registry.registerComplaint('Jane', 'product', 'faded color');

    console.log(reportService);
    console.log(reportProduct);	